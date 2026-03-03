import React from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Footer.module.css';

const Footer = () => {
    const { language, t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className={s.footer}>
            <div className={s.grid}>
                {/* Brand */}
                <div>
                    <div className={s.brand}>
                        <img src="images/logo.png" alt="Logo" className={s.brandLogo} />
                        <span className={s.brandName}>JMJ Borewells</span>
                    </div>
                    <p className={s.brandDesc}>
                        {language === 'en'
                            ? 'Leading borewell drilling company in Vizag region for over 25 years. Specializing in high-precision 4.5" and 6.5" drilling services.'
                            : 'విశాఖ రీజియన్‌లో 25 ఏళ్లుగా నమ్మకమైన బోర్‌వెల్ సేవలందిస్తున్నాము. 4.5" మరియు 6.5" డ్రిల్లింగ్‌లో మాకు సాటి ఎవరూ లేరు.'}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className={s.colTitle}>{language === 'en' ? 'Quick Links' : 'లింకులు'}</h4>
                    <div className={s.linkList}>
                        {['home', 'services', 'location', 'about'].map(link => (
                            <button key={link} className={s.footerLink} onClick={() => scrollTo(link)}>
                                <ChevronRight size={14} className={s.linkIcon} />
                                {t('nav', link === 'services' ? 'plans' : link)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className={s.colTitle}>{language === 'en' ? 'Our Services' : 'మా సేవలు'}</h4>
                    {['4.5" Domestic Borewell', '6.5" High Yield Borewell', 'Borewell Pressing/Flushing', 'Scientific Sensor Survey'].map((svc, i) => (
                        <div key={i} className={s.serviceItem}>
                            <ChevronRight size={14} className={s.serviceIcon} />
                            {svc}
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div>
                    <h4 className={s.colTitle}>{language === 'en' ? 'Get in Touch' : 'సంప్రదించండి'}</h4>
                    <div className={s.contactItem}>
                        <MapPin size={20} className={s.contactIcon} />
                        <span className={s.contactText}>1-93, Near RCM Church,<br />Chodavaram, 531034</span>
                    </div>
                    <div className={s.contactItem}>
                        <Phone size={18} className={s.contactIcon} />
                        <span className={s.contactText}>+91 91001 11643</span>
                    </div>
                    <div className={s.contactItem}>
                        <Mail size={18} className={s.contactIcon} />
                        <span className={s.contactText}>jmjborewell@gmail.com</span>
                    </div>
                </div>
            </div>

            <div className={s.copyright}>
                © {currentYear} JMJ Borewells. All Rights Reserved | Designed for Excellence
            </div>
        </footer>
    );
};

export default Footer;
