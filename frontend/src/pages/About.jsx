import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Wrench, TrendingUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './About.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const About = () => {
    const { t, tArray, language } = useLanguage();
    const milestones = tArray('about', 'milestones');

    return (
        <div className={s.wrap}>
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className={s.header}>
                    <h2 className={s.title}>{t('about', 'title')}</h2>
                    <div className={s.divider} />
                </div>

                <div className={s.descPanel}>
                    <p className={s.descText}>{t('about', 'desc')}</p>
                </div>
            </motion.div>

            {/* Founder Section */}
            <motion.div className={s.founderSection} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className={s.founderIcon}>
                    <Users size={32} />
                </div>
                <div className={s.founderContent}>
                    <h3 className={s.founderName}>{t('about', 'founder_name')}</h3>
                    <div className={s.founderRole}>{t('about', 'founder_role')}</div>
                    <p className={s.founderMessage}>{t('about', 'founder_message')}</p>
                </div>
            </motion.div>

            {/* Cards */}
            <div className={s.grid}>
                <motion.div className={s.card} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h3 className={s.cardTitle}>{t('about', 'mission')}</h3>
                    <p className={s.cardText}>{t('about', 'mission_desc')}</p>
                </motion.div>

                <motion.div className={s.card} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h3 className={s.cardTitle}>{t('about', 'why_us')}</h3>
                    <ul className={s.reasonList}>
                        {tArray('about', 'reasons').map((reason, i) => (
                            <li key={i} className={s.reasonItem}>
                                <CheckCircle size={16} className={s.checkIcon} />
                                {reason}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Timeline */}
            {milestones.length > 0 && (
                <div className={s.timelineSection}>
                    <h3 className={s.timelineTitle}>{t('about', 'timeline_title')}</h3>
                    <div className={s.dividerSmall} />
                    <div className={s.timeline}>
                        {milestones.map((m, i) => (
                            <motion.div key={i} className={s.timelineItem} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className={s.timelineDot}>
                                    {i === 0 ? <Award size={16} /> : i === milestones.length - 1 ? <TrendingUp size={16} /> : <Wrench size={16} />}
                                </div>
                                <div className={s.timelineContent}>
                                    <div className={s.timelineYear}>{m.year}</div>
                                    <h4 className={s.timelineEvent}>{m.title}</h4>
                                    <p className={s.timelineDesc}>{m.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
