import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Location.module.css';

const Location = () => {
    const { t } = useLanguage();

    return (
        <div className={s.wrap}>
            <div className={s.infoPanel}>
                <h2 className={s.title}>{t('location', 'title')}</h2>
                <div className={s.addressRow}>
                    <MapPin size={22} className={s.addressIcon} />
                    <p>1-93, Near RCM Church, Chodavaram, 531034</p>
                </div>
            </div>

            <div className={s.mapPanel}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15197.683050462088!2d82.9377405!3d17.828889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a397a6a4d653787%3A0x69680327f1c42f0!2sChodavaram%2C%20Andhra%20Pradesh%20531036!5e0!3m2!1sen!2sin!4v1703150000000!5m2!1sen!2sin"
                    className={s.mapFrame}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JMJ Borewells Location"
                />
            </div>
        </div>
    );
};

export default Location;
