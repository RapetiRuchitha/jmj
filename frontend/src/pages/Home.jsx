import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Trophy, ChevronDown, ChevronUp, Quote, Star, Camera, ChevronLeft, ChevronRight, Droplets, Lightbulb, ShieldCheck, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Home.module.css';

const images = [
    { src: 'images/slide1.jpeg', alt: 'JMJ Borewells high-pressure drilling rig in action at Vizag' },
    { src: 'images/slide2.jpeg', alt: 'Professional borewell drilling team installing casing pipes' },
    { src: 'images/slide3.jpg', alt: '6.5 inch industrial borewell drilling for agricultural use' },
    { src: 'images/slide4.jpg', alt: 'Scientific water source survey using sensor equipment' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Animated count-up hook
const useCountUp = (target, duration = 2000, startCounting = false) => {
    const [count, setCount] = useState(0);
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''), 10) || 0;
    const suffix = target.replace(/[0-9]/g, '');

    useEffect(() => {
        if (!startCounting) return;
        let start = 0;
        const increment = numericTarget / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= numericTarget) {
                setCount(numericTarget);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [startCounting, numericTarget, duration]);

    return startCounting ? `${count}${suffix}` : `0${suffix}`;
};

const StatCard = ({ stat, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const animatedValue = useCountUp(stat.value, 2000, isVisible);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div ref={ref} className={s.statCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
            <div className={s.statValue}>{animatedValue}</div>
            <div className={s.statLabel}>{stat.label}</div>
        </motion.div>
    );
};

const Home = () => {
    const { t, tArray, language } = useLanguage();
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [slideDirection, setSlideDirection] = useState(1);
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const testimonials = tArray('home', 'testimonials');
    const faqs = tArray('home', 'faqs');
    const galleryItems = tArray('home', 'gallery');

    // Auto-rotate slides with pause on hover
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setSlideDirection(1);
            setSlideIndex(p => (p + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const goToSlide = useCallback((index) => {
        setSlideDirection(index > slideIndex ? 1 : -1);
        setSlideIndex(index);
    }, [slideIndex]);

    const prevSlide = useCallback(() => {
        setSlideDirection(-1);
        setSlideIndex(p => (p - 1 + images.length) % images.length);
    }, []);

    const nextSlide = useCallback(() => {
        setSlideDirection(1);
        setSlideIndex(p => (p + 1) % images.length);
    }, []);

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    // Lightbox keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowLeft') setLightboxIndex(p => (p - 1 + images.length) % images.length);
            if (e.key === 'ArrowRight') setLightboxIndex(p => (p + 1) % images.length);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKey);
        };
    }, [lightboxIndex]);

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div>
            {/* ===== HERO ===== */}
            <section className={s.hero} id="home" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                <div className={s.sliderBg}>
                    <AnimatePresence mode="popLayout" custom={slideDirection}>
                        <motion.img
                            key={slideIndex}
                            src={images[slideIndex].src}
                            className={s.slideImage}
                            custom={slideDirection}
                            initial={{ x: slideDirection > 0 ? '100%' : '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: slideDirection > 0 ? '-100%' : '100%' }}
                            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 } }}
                            alt={images[slideIndex].alt}
                        />
                    </AnimatePresence>
                </div>
                <div className={s.overlay} />

                {/* Carousel Navigation Arrows */}
                <button className={`${s.carouselArrow} ${s.carouselArrowLeft}`} onClick={prevSlide} aria-label="Previous slide">
                    <ChevronLeft size={28} />
                </button>
                <button className={`${s.carouselArrow} ${s.carouselArrowRight}`} onClick={nextSlide} aria-label="Next slide">
                    <ChevronRight size={28} />
                </button>

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
                            onClick={() => goToSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
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
                            <StatCard key={i} stat={stat} index={i} />
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
                            <motion.div key={i} className={s.galleryItem} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} onClick={() => setLightboxIndex(i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setLightboxIndex(i)}>
                                <img src={images[i % images.length].src} alt={`${item.title} - ${item.desc}`} loading="lazy" />
                                <div className={s.galleryOverlay}>
                                    <ZoomIn size={24} className={s.galleryZoom} />
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

            {/* ===== WATER TIPS ===== */}
            <section className={s.section}>
                <div className={`${s.sectionInner} ${s.textCenter}`}>
                    <span className={s.sectionLabel}>
                        <Lightbulb size={16} /> {language === 'en' ? 'EXPERT ADVICE' : 'నిపుణుల సలహా'}
                    </span>
                    <h2 className={s.sectionTitle}>{t('home', 'tips_title')}</h2>
                    <div className={s.divider} />

                    <div className={s.tipsGrid}>
                        {tArray('home', 'water_tips').map((tip, i) => (
                            <motion.div key={i} className={s.tipCard} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className={s.tipIcon}>
                                    {i === 0 ? <Droplets size={22} /> : i === 1 ? <ShieldCheck size={22} /> : <Lightbulb size={22} />}
                                </div>
                                <h4 className={s.tipTitle}>{tip.title}</h4>
                                <p className={s.tipDesc}>{tip.desc}</p>
                            </motion.div>
                        ))}
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
                            <img src="images/slide3.jpg" alt="JMJ Borewells team performing borewell drilling at a client site" className={s.missionImg} loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== LIGHTBOX ===== */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        className={s.lightboxOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxIndex(null)}
                    >
                        <button className={s.lightboxClose} onClick={() => setLightboxIndex(null)} aria-label="Close lightbox">
                            <X size={28} />
                        </button>
                        <button
                            className={`${s.lightboxArrow} ${s.lightboxArrowLeft}`}
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <motion.img
                            key={lightboxIndex}
                            src={images[lightboxIndex % images.length].src}
                            alt={galleryItems[lightboxIndex]?.title || ''}
                            className={s.lightboxImg}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            className={`${s.lightboxArrow} ${s.lightboxArrowRight}`}
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>
                        <div className={s.lightboxCaption}>
                            <h4>{galleryItems[lightboxIndex]?.title}</h4>
                            <p>{galleryItems[lightboxIndex]?.desc}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Home;
