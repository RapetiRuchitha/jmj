import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './SurveyForm.module.css';

const SurveyForm = () => {
    const { t, language } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', village: '', service: '4.5 inch' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (field, value) => {
        const errs = {};
        if (field === 'name' || !field) {
            const name = field ? value : formData.name;
            if (touched.name && name.trim().length < 2) {
                errs.name = language === 'en' ? 'Name must be at least 2 characters' : 'పేరు కనీసం 2 అక్షరాలు ఉండాలి';
            }
        }
        if (field === 'phone' || !field) {
            const phone = field ? value : formData.phone;
            if (touched.phone && !/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))) {
                errs.phone = language === 'en' ? 'Enter a valid 10-digit mobile number' : 'చెల్లుబాటు అయ్యే 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి';
            }
        }
        if (field === 'village' || !field) {
            const village = field ? value : formData.village;
            if (touched.village && village.trim().length < 2) {
                errs.village = language === 'en' ? 'Please enter your village or landmark' : 'దయచేసి మీ గ్రామం లేదా ల్యాండ్‌మార్క్ నమోదు చేయండి';
            }
        }
        return errs;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            const fieldErrors = validate(name, value);
            setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const fieldErrors = validate(name, value);
        setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ name: true, phone: true, village: true });
        const allErrors = validate();
        setErrors(allErrors);
        if (Object.keys(allErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:3000/api/survey', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', phone: '', village: '', service: '4.5 inch' });
                setTouched({});
                setErrors({});
            } else {
                alert(language === 'en' ? 'Server error. Please try again later or call us directly.' : 'సర్వర్ లోపం. దయచేసి తర్వాత ప్రయత్నించండి లేదా నేరుగా కాల్ చేయండి.');
            }
        } catch {
            setSubmitted(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <div className={s.panel}>
            <h3 className={s.title}>{t('location', 'survey_title')}</h3>
            <p className={s.desc}>{t('location', 'survey_desc')}</p>

            {submitted ? (
                <div className={s.success}>
                    <CheckCircle size={20} />
                    {t('location', 'success')}
                </div>
            ) : (
                <form onSubmit={handleSubmit} className={s.form} noValidate>
                    <div className={s.fieldGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder={t('location', 'name')}
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`${s.input} ${errors.name ? s.inputError : ''}`}
                            autoComplete="name"
                        />
                        {errors.name && <span className={s.errorText}>{errors.name}</span>}
                    </div>
                    <div className={s.fieldGroup}>
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t('location', 'phone')}
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`${s.input} ${errors.phone ? s.inputError : ''}`}
                            autoComplete="tel"
                            inputMode="numeric"
                            maxLength={10}
                        />
                        {errors.phone && <span className={s.errorText}>{errors.phone}</span>}
                    </div>
                    <div className={s.fieldGroup}>
                        <input
                            type="text"
                            name="village"
                            placeholder={t('location', 'village')}
                            value={formData.village}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className={`${s.input} ${errors.village ? s.inputError : ''}`}
                        />
                        {errors.village && <span className={s.errorText}>{errors.village}</span>}
                    </div>
                    <select name="service" value={formData.service} onChange={handleChange} className={s.select}>
                        <option value="4.5 inch">{t('location', 'service_45')}</option>
                        <option value="6.5 inch">{t('location', 'service_65')}</option>
                        <option value="Pressing Service">{t('services', 'pressing_title')}</option>
                    </select>
                    <button type="submit" className={s.submitBtn} disabled={isSubmitting}>
                        {isSubmitting ? (language === 'en' ? 'Sending...' : 'పంపిస్తున్నాము...') : t('location', 'submit')}
                    </button>
                </form>
            )}
        </div>
    );
};

export default SurveyForm;
