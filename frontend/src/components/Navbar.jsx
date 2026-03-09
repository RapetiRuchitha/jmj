import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);
    const { toggleLanguage, t, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            // Calculate scroll progress
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section using IntersectionObserver
    useEffect(() => {
        const sectionIds = ['home', 'services', 'location', 'about'];
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('light-mode', isDarkMode);
    };

    const navLinks = [
        { name: t('nav', 'home'), id: 'home' },
        { name: t('nav', 'plans'), id: 'services' },
        { name: t('nav', 'location'), id: 'location' },
        { name: t('nav', 'about'), id: 'about' },
    ];

    const scrollToSection = useCallback((id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`} role="navigation" aria-label="Main navigation">
            <div className={styles.logo} onClick={() => scrollToSection('home')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}>
                <img src="images/logo.png" alt="JMJ Borewells - Precision Borewell Drilling Company" className={styles.logoImg} />
            </div>

            <div className={styles.right}>
                {/* Desktop Menu */}
                <div className={styles.desktopMenu} role="menubar">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            className={`${styles.navLink} ${activeSection === link.id ? styles.navLinkActive : ''}`}
                            onClick={() => scrollToSection(link.id)}
                            role="menuitem"
                            aria-current={activeSection === link.id ? 'page' : undefined}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Language Toggle */}
                <button onClick={toggleLanguage} className={styles.toggleBtn} aria-label={language === 'en' ? 'Switch to Telugu' : 'Switch to English'} title={language === 'en' ? 'Switch to Telugu' : 'Switch to English'}>
                    <Languages size={16} />
                    {language === 'en' ? 'TE' : 'EN'}
                </button>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className={styles.themeBtn} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.15 }}
                        role="menu"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                className={`${styles.mobileLink} ${activeSection === link.id ? styles.mobileLinkActive : ''}`}
                                onClick={() => scrollToSection(link.id)}
                                role="menuitem"
                                aria-current={activeSection === link.id ? 'page' : undefined}
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Progress Bar */}
            <div className={styles.scrollProgressTrack}>
                <div
                    className={styles.scrollProgressBar}
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </nav>
    );
};

export default Navbar;
