import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import s from './SurveyForm.module.css';

const SurveyForm = () => {
    const { t, language } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', village: '', service: '4.5 inch' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            } else {
                alert('Server error. Please try again later or call us directly.');
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
                <div className={s.success}>{t('location', 'success')}</div>
            ) : (
                <form onSubmit={handleSubmit} className={s.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder={t('location', 'name')}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={s.input}
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder={t('location', 'phone')}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={s.input}
                    />
                    <input
                        type="text"
                        name="village"
                        placeholder={t('location', 'village')}
                        value={formData.village}
                        onChange={handleChange}
                        required
                        className={s.input}
                    />
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
