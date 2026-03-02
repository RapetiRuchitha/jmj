import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { toggleLanguage, t, language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    };

    const navLinks = [
        { name: t('nav', 'home'), id: 'home' },
        { name: t('nav', 'plans'), id: 'services' },
        { name: t('nav', 'location'), id: 'location' },
        { name: t('nav', 'about'), id: 'about' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '15px 30px',
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'var(--text-main)'
            }}
        >
            <div
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                onClick={() => scrollToSection('home')}
            >
                <img
                    src="images/logo.png"
                    alt="JMJ Borewells"
                    style={{ height: scrolled ? '60px' : '80px', objectFit: 'contain', transition: 'height 0.3s' }}
                    className="nav-logo"
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--text-main)',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                fontWeight: 500,
                                padding: '8px 16px',
                                borderRadius: '8px',
                                transition: 'background 0.2s'
                            }}
                            onMouseEnter={(e) => e.target.style.background = 'var(--glass-bg)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Language Toggle */}
                <button
                    onClick={toggleLanguage}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-main)',
                        padding: '8px 12px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                    }}
                    title="Switch Language"
                >
                    <Languages size={18} />
                    {language === 'en' ? 'TE' : 'EN'}
                </button>

                {/* Theme Toggle Icon */}
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-main)',
                        padding: '8px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    title="Toggle Theme"
                >
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--text-main)' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            right: '20px',
                            background: 'var(--card-bg)',
                            backdropFilter: 'blur(15px)',
                            padding: '20px',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            minWidth: '220px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-main)',
                                    fontSize: '1.1rem',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    transition: 'background 0.2s'
                                }}
                                onMouseEnter={(e) => e.target.style.background = 'var(--glass-bg)'}
                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block; cursor: pointer; }
          .nav-logo { height: 50px !important; }
        }
        @media (min-width: 769px) {
          .mobile-toggle { display: none; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
