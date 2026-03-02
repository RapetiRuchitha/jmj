import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
    const { language, t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{
            background: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.02) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
            borderTop: '1px solid var(--glass-border)',
            padding: '80px 5% 40px',
            color: 'white',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '50px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Brand & Mission */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                        <img src="images/logo.png" alt="Logo" style={{ height: '50px' }} />
                        <h3 className="gradient-text" style={{ fontSize: '1.8rem', margin: 0, fontWeight: 'bold' }}>
                            JMJ Borewells
                        </h3>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1rem' }}>
                        {language === 'en'
                            ? 'Leading borewell drilling company in Vizag region for over 25 years. Specializing in high-precision 4.5" and 6.5" drilling services.'
                            : 'విశాఖ రీజియన్‌లో 25 ఏళ్లుగా నమ్మకమైన బోర్‌వెల్ సేవలందిస్తున్నాము. 4.5" మరియు 6.5" డ్రిల్లింగ్‌లో మాకు సాటి ఎవరూ లేరు.'}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                        {language === 'en' ? 'Quick Links' : 'లింకులు'}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', background: 'var(--primary-color)' }}></div>
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {['home', 'services', 'location', 'about'].map(link => (
                            <button
                                key={link}
                                onClick={() => scrollToSection(link)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'rgba(255,255,255,0.7)',
                                    textAlign: 'left',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                            >
                                <ChevronRight size={16} color="var(--primary-color)" />
                                {t('nav', link === 'services' ? 'plans' : link)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Our Services */}
                <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                        {language === 'en' ? 'Our Services' : 'మా సేవలు'}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', background: 'var(--primary-color)' }}></div>
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(255,255,255,0.7)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ChevronRight size={16} color="var(--secondary-color)" />
                            4.5" Domestic Borewell
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ChevronRight size={16} color="var(--secondary-color)" />
                            6.5" High Yield Borewell
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ChevronRight size={16} color="var(--secondary-color)" />
                            Borewell Pressing/Flushing
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <ChevronRight size={16} color="var(--secondary-color)" />
                            Scientific Sensor Survey
                        </div>
                    </div>
                </div>

                {/* Get in Touch */}
                <div>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                        {language === 'en' ? 'Get in Touch' : 'సంప్రదించండి'}
                        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '2px', background: 'var(--primary-color)' }}></div>
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <MapPin size={24} color="var(--primary-color)" />
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
                                1-93, Near RCM Church,<br />Chodavaram, 531034
                            </span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <Phone size={20} color="var(--primary-color)" />
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>+91 91001 11643</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <Mail size={20} color="var(--primary-color)" />
                            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>jmjborewell@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div style={{
                marginTop: '80px',
                paddingTop: '30px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.9rem'
            }}>
                © {currentYear} JMJ Borewells. All Rights Reserved | Designed for Excellence
            </div>
        </footer>
    );
};

export default Footer;
