import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Trophy, ChevronDown, ChevronUp, Quote, Star, Camera } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Home.module.css';

const images = ['images/slide1.jpeg', 'images/slide2.jpeg', 'images/slide3.jpg', 'images/slide4.jpg'];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Home = () => {
    const { t, tArray, language } = useLanguage();
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);

    const testimonials = tArray('home', 'testimonials');
    const faqs = tArray('home', 'faqs');
    const galleryItems = tArray('home', 'gallery');

    // Auto-rotate slides
    useEffect(() => {
        const timer = setInterval(() => setSlideIndex(p => (p + 1) % images.length), 5000);
        return () => clearInterval(timer);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div>
            {/* ===== HERO ===== */}
            <section className={s.hero} id="home">
                <div className={s.sliderBg}>
                    <AnimatePresence mode="popLayout">
                        <motion.img
                            key={slideIndex}
                            src={images[slideIndex]}
                            className={s.slideImage}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 } }}
                            alt="JMJ Borewells drilling"
                        />
                    </AnimatePresence>
                </div>
                <div className={s.overlay} />

                <motion.div className={s.heroContent} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                    <div className={s.badge}>{t('home', 'govt')}</div>
                    <h1 className={s.heroTitle}>{t('home', 'title')}</h1>
                    <p className={s.heroSubtitle}>{t('home', 'subtitle')}</p>
                    <div className={s.heroCta}>
                        <button className={s.btnPrimary} onClick={() => scrollTo('location')}>
                            {t('location', 'survey_title')}
                        </button>
                        <button className={s.btnOutline} onClick={() => scrollTo('about')}>
                            {t('nav', 'about')}
                        </button>
                    </div>
                </motion.div>

                <div className={s.indicators}>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`${s.dot} ${i === slideIndex ? s.dotActive : ''}`}
                            onClick={() => setSlideIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* ===== WHY CHOOSE US ===== */}
            <section className={s.section}>
                <div className={`${s.sectionInner} ${s.textCenter}`}>
                    <span className={s.sectionLabel}>{language === 'en' ? 'OUR STRENGTH' : 'మా బలం'}</span>
                    <h2 className={s.sectionTitle}>{t('home', 'why_choose_us_title')}</h2>
                    <div className={s.divider} />

                    <div className={s.cardsGrid}>
                        {tArray('home', 'why_choose_us_steps').map((step, i) => (
                            <motion.div key={i} className={s.card} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className={i === 0 ? s.cardIconPrimary : i === 1 ? s.cardIconAccent : s.cardIconSuccess}>
                                    {i === 1 ? <CheckCircle size={28} /> : <Trophy size={28} />}
                                </div>
                                <h3 className={s.cardTitle}>{step.title}</h3>
                                <p className={s.cardDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className={s.section}>
                <div className={s.sectionInner}>
                    <div className={s.statsGrid}>
                        {tArray('home', 'stats').map((stat, i) => (
                            <motion.div key={i} className={s.statCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
                                <div className={s.statValue}>{stat.value}</div>
                                <div className={s.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== GALLERY ===== */}
            <section className={s.section}>
                <div className={`${s.sectionInner} ${s.textCenter}`}>
                    <span className={s.sectionLabel}>
                        <Camera size={16} /> {language === 'en' ? 'EXCELLENCE IN ACTION' : 'మా పని'}
                    </span>
                    <h2 className={s.sectionTitle}>{t('home', 'gallery_title')}</h2>
                    <div className={s.divider} />

                    <div className={s.galleryGrid}>
                        {galleryItems.map((item, i) => (
                            <motion.div key={i} className={s.galleryItem} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <img src={images[i % images.length]} alt={item.title} loading="lazy" />
                                <div className={s.galleryOverlay}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className={s.section} style={{ background: 'rgba(79, 70, 229, 0.03)' }}>
                <div className={`${s.sectionInner} ${s.textCenter}`}>
                    <h2 className={s.sectionTitleGradient}>{t('home', 'process_title')}</h2>
                    <div className={s.divider} />

                    <div className={s.processGrid}>
                        {tArray('home', 'process_steps').map((step, i) => (
                            <motion.div key={i} className={s.processCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className={s.stepNumber}>{i + 1}</div>
                                <h3 className={s.processTitle}>{step.title}</h3>
                                <p className={s.processDesc}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className={s.section}>
                <div className={`${s.sectionInner} ${s.textCenter}`}>
                    <h2 className={s.sectionTitle}>{t('home', 'testimonials_title')}</h2>
                    <div className={s.divider} />

                    <div className={s.testimonialWrap}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial}
                                className={s.testimonialCard}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                            >
                                <Quote className={s.quoteIcon} size={72} />
                                <div className={s.stars}>
                                    {[...Array(testimonials[activeTestimonial]?.stars || 5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>
                                <p className={s.testimonialText}>"{testimonials[activeTestimonial]?.text}"</p>
                                <div className={s.testimonialAuthor}>{testimonials[activeTestimonial]?.name}</div>
                                <div className={s.testimonialRole}>{testimonials[activeTestimonial]?.role}</div>
                            </motion.div>
                        </AnimatePresence>

                        <div className={s.dotsRow}>
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`${s.testimonialDot} ${i === activeTestimonial ? s.testimonialDotActive : ''}`}
                                    onClick={() => setActiveTestimonial(i)}
                                    aria-label={`Testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== MISSION ===== */}
            <section className={s.section} style={{ background: 'rgba(6, 182, 212, 0.03)' }}>
                <div className={s.sectionInner}>
                    <div className={s.missionGrid}>
                        <div>
                            <div className={s.missionLabel}>{language === 'en' ? 'OUR MISSION' : 'మా లక్ష్యం'}</div>
                            <h2 className={s.missionTitle}>{t('about', 'mission')}</h2>
                            <p className={s.missionDesc}>{t('about', 'mission_desc')}</p>
                            <div className={s.reasonList}>
                                {tArray('about', 'reasons').map((reason, i) => (
                                    <div key={i} className={s.reasonItem}>
                                        <CheckCircle size={18} className={s.reasonIcon} />
                                        {reason}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={s.missionImgWrap}>
                            <div className={s.missionImgBorder} />
                            <img src="images/slide3.jpg" alt="Borewell Mission" className={s.missionImg} loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
