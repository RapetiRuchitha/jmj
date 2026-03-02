import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const About = () => {
    const { t, tArray } = useLanguage();

    return (
        <div style={{ width: '100%' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{t('about', 'title')}</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary-color)', margin: '0 auto', borderRadius: '2px' }}></div>
                </div>

                <div className="glass-panel" style={{ padding: '60px', marginBottom: '40px' }}>
                    <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: 'var(--text-main)', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                        {t('about', 'desc')}
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
                    <div className="glass-panel" style={{ padding: '40px' }}>
                        <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '20px' }}>{t('about', 'mission')}</h3>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{t('about', 'mission_desc')}</p>
                    </div>

                    <div className="glass-panel" style={{ padding: '40px' }}>
                        <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '20px' }}>{t('about', 'why_us')}</h3>
                        <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '2' }}>
                            {tArray('about', 'reasons').map((reason, i) => (
                                <li key={i} style={{ marginBottom: '10px' }}>
                                    <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginRight: '10px' }}>✓</span>
                                    {reason}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
