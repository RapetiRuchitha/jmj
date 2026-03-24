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

    const founders = [
        {
            name: language === 'en' ? 'Dadi Appala Naidu (Pedababu)' : 'దాది అప్పల నాయుడు (పెదబాబు)',
            subtitle: '',
            role: language === 'en' ? 'Founder' : 'సంస్థాపక',
            message: language === 'en'
                ? 'For over 25 years, his mission was simple — to bring reliable water access to every family and farmer in the region. What started as a small drilling operation in Chodavaram grew into a trusted name across the Vizag region. His values and dedication continue to guide the business today.'
                : 'ఇరవై ఐదు సంవత్సరాలుగా, ప్రతి కుటుంబానికి మరియు రైతులకు నమ్మకమైన నీటి సరఫరా కల్పించడం అతని లక్ష్యం. చోదవరంలో చిన్న డ్రిల్లింగ్ కార్యక్రమం నుండి, ఇఖ్ఝాఖ్ వృద్ధి దాని విశాఖ ప్రాంతంలో నమ్మకమైన పేరుగా మారింది.'
        },
        {
            name: language === 'en' ? 'Dadi Santhosh Kumar' : 'దాది సంతోష్ కుమార్',
            subtitle: '',
            role: language === 'en' ? 'Managing Director' : 'నిర్వాహక సంచాలక',
            message: language === 'en'
                ? 'I proudly carry forward the legacy of trust, values, and hard work built by our founder, ensuring that every bore we drill reflects our commitment to the highest standards of quality, precision, and reliability. We focus on delivering dependable water solutions that meet the needs of every customer.'
                : 'నా సంస్థాపకుడు నిర్మించిన విశ్వాస, విలువలు మరియు కష్టపడిన ప్రయత్నాల వారసత్వాన్ని గర్వితంగా కొనసాగిస్తున్నాను. మేము నిర్వహించే ప్రతి డ్రిల్ గుణమానం, ఖచ్చితత్వం మరియు నమ్మకం యొక్క అత్యున్నత ప్రమాణాలకు సంబంధించినదిగా ఉండాలని నిశ్చయం చేస్తున్నాం. ప్రతి వాహకుడి అవసరాలను తీర్చే నమ్మకమైన నీటి పరిష్కారాలను రూపొందించడానికి మేము ఆసక్తి చేస్తున్నాము.'
        }
    ];

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

            {/* Founders Grid */}
            <div className={s.foundersGrid}>
                {founders.map((founder, idx) => (
                    <motion.div key={idx} className={s.founderSection} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className={s.founderIcon}>
                            <Users size={32} />
                        </div>
                        <div className={s.founderContent}>
                            <h3 className={s.founderName}>{founder.name}</h3>
                            {founder.subtitle && <div className={s.founderSubtitle}>{founder.subtitle}</div>}
                            <div className={s.founderRole}>{founder.role}</div>
                            <p className={s.founderMessage}>{founder.message}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

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
