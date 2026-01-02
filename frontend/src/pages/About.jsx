import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const About = () => {
    const { t, tArray } = useLanguage();

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.div
                className="glass-panel"
                style={{ padding: '60px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '30px' }}>{t('about', 'title')}</h2>

                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', marginBottom: '30px' }}>
                    {t('about', 'desc')}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{t('about', 'mission')}</h3>
                        <p style={{ color: 'var(--text-muted)' }}>{t('about', 'mission_desc')}</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)' }}>{t('about', 'why_us')}</h3>
                        <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px' }}>
                            {tArray('about', 'reasons').map((reason, i) => (
                                <li key={i}>{reason}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default About;
