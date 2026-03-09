import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Location from './pages/Location';
import About from './pages/About';
import Faq from './components/Faq';
import { FloatingCallButton, FloatingWhatsAppButton, BackToTopButton } from './components/FloatingButtons';
import SurveyForm from './components/SurveyForm';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';
import s from './App.module.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <LanguageProvider>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        className={s.loader}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className={s.loaderContent}>
                            <img src="images/logo.png" alt="JMJ Borewells" className={s.loaderLogo} />
                            <div className={s.loaderSpinner} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={s.app}>
                <a href="#main" className="skip-link">Skip to main content</a>
                <Navbar />
                <FloatingCallButton />
                <FloatingWhatsAppButton />
                <BackToTopButton />

                <main id="main" className={s.main}>
                    {/* Home Section */}
                    <Home />

                    {/* Services Section */}
                    <section id="services" className={s.servicesSection}>
                        <Services />
                    </section>

                    {/* Location & Contact Section */}
                    <section id="location" className={s.contactSection}>
                        <div className={s.contactGrid}>
                            <div className={s.contactCol}>
                                <Location />
                            </div>
                            <div className={s.contactCol}>
                                <SurveyForm />
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className={s.aboutSection}>
                        <About />
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className={s.faqSection}>
                        <Faq />
                    </section>
                </main>

                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
