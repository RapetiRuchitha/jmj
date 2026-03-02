import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Location = () => {
    const { t } = useLanguage();

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '30px' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{t('location', 'title')}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                    <MapPin size={24} color="var(--secondary-color)" />
                    <p style={{ margin: 0 }}>
                        1-93, Near RCM Church, Chodavaram, 531034
                    </p>
                </div>
            </div>

            <div className="glass-panel" style={{ flex: 1, padding: '10px', minHeight: '350px' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15197.683050462088!2d82.9377405!3d17.828889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a397a6a4d653787%3A0x69680327f1c42f0!2sChodavaram%2C%20Andhra%20Pradesh%20531036!5e0!3m2!1sen!2sin!4v1703150000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JMJ Borewells Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
