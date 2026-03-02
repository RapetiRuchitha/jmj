import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, CheckCircle, Trophy, Star, ChevronDown, ChevronUp, Quote, Camera } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import Slider from '../components/Slider';

const Home = () => {
    const { t, tArray, language } = useLanguage();
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = tArray('home', 'testimonials');
    const faqs = tArray('home', 'faqs');
    const galleryItems = tArray('home', 'gallery');

    // Auto-rotate testimonials
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div style={{ width: '100%' }}>
            {/* Hero Slider Section - Full Width */}
            <div style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
                <Slider />

                {/* Overlay Content */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '20px',
                    zIndex: 20
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ background: 'var(--primary-color)', color: 'white', padding: '5px 15px', borderRadius: '4px', display: 'inline-block', marginBottom: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            {t('home', 'govt')}
                        </div>
                        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', margin: '0 0 20px 0', fontWeight: '900', textShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                            {t('home', 'title')}
                        </h1>
                        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.8rem)', color: '#ffffff', maxWidth: '900px', margin: '0 auto 40px auto', fontWeight: '600', opacity: 0.95 }}>
                            {t('home', 'subtitle')}
                        </p>

                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <button
                                className="btn-primary"
                                style={{ fontSize: '1.2rem', padding: '15px 35px', borderRadius: '50px' }}
                                onClick={() => document.getElementById('location').scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('location', 'survey_title')}
                            </button>
                            <button
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(10px)',
                                    border: '2px solid white',
                                    color: 'white',
                                    padding: '15px 35px',
                                    borderRadius: '50px',
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => { e.target.style.background = 'white'; e.target.style.color = 'black'; }}
                                onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.color = 'white'; }}
                                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('nav', 'about')}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div style={{ padding: '100px 5%', background: 'linear-gradient(180deg, var(--background-start), transparent)' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span style={{ border: '1px solid var(--primary-color)', color: 'var(--primary-color)', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px' }}>{language === 'en' ? 'OUR STRENGTH' : 'మా బలం'}</span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginTop: '20px', fontWeight: '800' }}>
                        {t('home', 'why_choose_us_title')}
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                    {tArray('home', 'why_choose_us_steps').map((step, index) => (
                        <motion.div key={index} whileHover={{ y: -10 }} className="glass-panel" style={{ textAlign: 'center', padding: '40px', borderRadius: '24px' }}>
                            <div style={{
                                width: '80px', height: '80px',
                                background: index === 1 ? 'rgba(236, 72, 153, 0.1)' : index === 2 ? 'rgba(34, 197, 94, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                                color: index === 1 ? 'var(--secondary-color)' : index === 2 ? '#22c55e' : 'var(--primary-color)',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px auto',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {index === 1 ? <CheckCircle size={40} /> : <Trophy size={40} />}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Section with Bordered Animation */}
            <div style={{ padding: '80px 5%', background: 'transparent' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    textAlign: 'center'
                }}>
                    {tArray('home', 'stats').map((stat, index) => (
                        <div key={index} className="stat-card">
                            <h2 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', margin: '0 0 10px 0', fontWeight: '900' }}>
                                {stat.value}
                            </h2>
                            <p style={{ fontSize: '1.1rem', margin: 0, opacity: 0.9, color: 'var(--text-main)', letterSpacing: '1px', fontWeight: 'bold' }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Gallery Section */}
            <div style={{ padding: '100px 5%' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--primary-color)', marginBottom: '10px' }}>
                        <Camera size={20} />
                        <span style={{ fontWeight: 'bold', letterSpacing: '2px' }}>EXCELLENCE IN ACTION</span>
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800' }}>{t('home', 'gallery_title')}</h2>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <img src={`images/slide${(index % 3) + 1}.jpg`} alt={item.title} />
                            <div className="gallery-overlay">
                                <h4 style={{ margin: 0, fontSize: '1.4rem', color: 'white' }}>{item.title}</h4>
                                <p style={{ margin: '5px 0 0 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Working Process Section */}
            <div style={{ padding: '100px 5%', background: 'rgba(15, 23, 42, 0.4)' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800' }}>{t('home', 'process_title')}</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary-color)', margin: '20px auto 0' }}></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {tArray('home', 'process_steps').map((step, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '40px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{
                                width: '60px', height: '60px',
                                background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem', fontWeight: 'bold', color: 'white',
                                margin: '0 auto 25px auto',
                                boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)'
                            }}>
                                {index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div style={{ padding: '100px 5%', overflow: 'hidden' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-main)', fontWeight: '800' }}>{t('home', 'testimonials_title')}</h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="testimonial-card"
                        >
                            <Quote className="quote-icon" size={80} />
                            <div style={{ display: 'flex', gap: '5px', marginBottom: '20px', color: '#f59e0b' }}>
                                {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => <Star key={i} size={20} fill="#f59e0b" />)}
                            </div>
                            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '30px', color: 'var(--text-main)', position: 'relative', zIndex: 1 }}>
                                "{testimonials[activeTestimonial].text}"
                            </p>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: 'var(--primary-color)' }}>{testimonials[activeTestimonial].name}</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{testimonials[activeTestimonial].role}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
                        {testimonials.map((_, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                style={{
                                    width: '12px', height: '12px', borderRadius: '50%',
                                    background: i === activeTestimonial ? 'var(--primary-color)' : 'rgba(255,255,255,0.2)',
                                    cursor: 'pointer', transition: 'all 0.3s'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div style={{ padding: '100px 5%', background: 'rgba(0,0,0,0.2)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <span style={{ color: 'var(--primary-color)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem' }}>OUR MISSION</span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-main)', fontWeight: '800', margin: '20px 0' }}>{t('about', 'mission')}</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
                            {t('about', 'mission_desc')}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {tArray('about', 'reasons').map((reason, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1rem', color: 'var(--text-main)', opacity: 0.9 }}>
                                    <div style={{ color: '#22c55e' }}><CheckCircle size={20} /></div>
                                    {reason}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '-15px', width: '100%', height: '100%', border: '2px solid var(--primary-color)', borderRadius: '15px', opacity: 0.3 }}></div>
                        <img
                            src="images/slide3.jpg"
                            alt="Borewell Mission"
                            style={{ width: '100%', height: '400px', objectFit: 'cover', position: 'relative', zIndex: 1, borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                        />
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div style={{ padding: '100px 5%' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800' }}>{t('home', 'faq_title')}</h2>
                </div>

                <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {/* Left Column - First 6 Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {faqs.slice(0, 6).map((faq, index) => (
                            <div key={`left-${index}`} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === `left-${index}` ? null : `left-${index}`)}
                                >
                                    {faq.q}
                                    {openFaq === `left-${index}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === `left-${index}` && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="faq-answer">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Next 6 Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {faqs.slice(6, 12).map((faq, index) => (
                            <div key={`right-${index}`} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === `right-${index}` ? null : `right-${index}`)}
                                >
                                    {faq.q}
                                    {openFaq === `right-${index}` ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === `right-${index}` && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="faq-answer">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
