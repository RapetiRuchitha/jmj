import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { toggleLanguage, t, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.logo} onClick={() => scrollToSection('home')}>
                <img src="images/logo.png" alt="JMJ Borewells" className={styles.logoImg} />
            </div>

            <div className={styles.right}>
                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <button key={link.id} className={styles.navLink} onClick={() => scrollToSection(link.id)}>
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Language Toggle */}
                <button onClick={toggleLanguage} className={styles.toggleBtn} aria-label="Switch language" title="Switch Language">
                    <Languages size={16} />
                    {language === 'en' ? 'TE' : 'EN'}
                </button>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className={styles.themeBtn} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'} title="Toggle Theme">
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Mobile Toggle */}
                <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </div>
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
                    >
                        {navLinks.map((link) => (
                            <button key={link.id} className={styles.mobileLink} onClick={() => scrollToSection(link.id)}>
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
