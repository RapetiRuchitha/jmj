import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, CheckCircle, Trophy } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Slider from '../components/Slider';


const Home = () => {
    const { t, tArray } = useLanguage();

    return (
        <div style={{ width: '100%' }}>

            {/* Hero Slider Section - Full Width */}
            <div style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
                <Slider />

                {/* Overlay Content */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '20px',
                    zIndex: 20
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="gradient-text" style={{ fontSize: '4rem', margin: '0 0 20px 0', fontWeight: '800' }}>
                            {t('home', 'title')}
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: '#f8fafc', maxWidth: '800px', margin: '0 auto 30px auto', fontWeight: '600', textShadow: '1px 1px 5px rgba(0,0,0,0.8)' }}>
                            {t('home', 'subtitle')}
                        </p>

                        <div>
                            <button
                                className="btn-primary"
                                style={{ fontSize: '1.2rem', padding: '16px 32px' }}
                                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('home', 'cta')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>



            {/* Constrained Content Wrapper */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px', padding: '40px 20px' }}>

                {/* Stats Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
                    {tArray('home', 'stats').map((stat, index) => (
                        <motion.div
                            key={index}
                            className="glass-panel"
                            style={{ padding: '20px' }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <h2 className="gradient-text" style={{ fontSize: '2.5rem', margin: '0 0 5px 0' }}>{stat.value}</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Working Process Section */}
                <div className="glass-panel" style={{ padding: '40px' }}>
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' }}>{t('home', 'process_title')}</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                        {tArray('home', 'process_steps').map((step, index) => (
                            <div key={index} style={{ flex: '1 1 250px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{
                                    width: '60px', height: '60px',
                                    background: 'var(--primary-color)',
                                    borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', fontWeight: 'bold', color: 'white',
                                    marginBottom: '20px'
                                }}>
                                    {index + 1}
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Info Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

                    <motion.div
                        className="glass-panel"
                        style={{ padding: '30px' }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <MapPin className="gradient-text" size={32} />
                            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{t('home', 'hero_visit')}</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            1-93, Near RCM Church,<br />
                            Chodavaram, 531034
                        </p>
                    </motion.div>

                    <motion.div
                        className="glass-panel"
                        style={{ padding: '30px' }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <CheckCircle className="gradient-text" size={32} />
                            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{t('home', 'hero_services')}</h3>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                            <li style={{ marginBottom: '10px' }}>• 4.5" & 6.5" Borewells</li>
                            <li style={{ marginBottom: '10px' }}>• Advanced Drilling Equipment</li>
                            <li>• Experienced Operators</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="glass-panel"
                        style={{ padding: '30px' }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                            <Phone className="gradient-text" size={32} />
                            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{t('home', 'hero_contact')}</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            Ready to start your project?<br />
                            <strong>Contact us today!</strong>
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Home;
