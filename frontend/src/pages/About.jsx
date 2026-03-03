import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import s from './About.module.css';

const About = () => {
    const { t, tArray } = useLanguage();

    return (
        <div className={s.wrap}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className={s.header}>
                    <h2 className={s.title}>{t('about', 'title')}</h2>
                    <div className={s.divider} />
                </div>

                <div className={s.descPanel}>
                    <p className={s.descText}>{t('about', 'desc')}</p>
                </div>

                <div className={s.grid}>
                    <div className={s.card}>
                        <h3 className={s.cardTitle}>{t('about', 'mission')}</h3>
                        <p className={s.cardText}>{t('about', 'mission_desc')}</p>
                    </div>

                    <div className={s.card}>
                        <h3 className={s.cardTitle}>{t('about', 'why_us')}</h3>
                        <ul className={s.reasonList}>
                            {tArray('about', 'reasons').map((reason, i) => (
                                <li key={i} className={s.reasonItem}>
                                    <span className={s.checkIcon}>✓</span>
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
