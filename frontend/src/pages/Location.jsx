import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Location.module.css';

const Location = () => {
    const { t, language } = useLanguage();

    return (
        <div className={s.wrap}>
            <div className={s.infoPanel}>
                <h2 className={s.title}>{t('location', 'title')}</h2>
                <div className={s.addressRow}>
                    <MapPin size={22} className={s.addressIcon} />
                    <p>{t('location', 'address')}</p>
                </div>
                <a
                    href={t('location', 'map_link')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.directionsBtn}
                >
                    {language === 'en' ? 'Get Directions' : 'దారి తెలుసుకోండి'}
                </a>
            </div>

            <div className={s.mapPanel}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15192.708042304184!2d82.92657832570532!3d17.8303351523422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a397f4a3a004019%3A0x9d2268685858a846!2sRWJG%2B2MP%2C%20Ankupalem%2C%20Andhra%20Pradesh%20531036!5e0!3m2!1sen!2sin!4v1773123257411!5m2!1sen!2sin"
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
