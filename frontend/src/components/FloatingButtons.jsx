import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import s from './FloatingButtons.module.css';

export const FloatingCallButton = () => (
    <motion.a
        href="tel:+919100111643"
        className={s.callBtn}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Call JMJ Borewells at +91 91001 11643"
        title="Call Us"
    >
        <span className={s.tooltip}>Call Us</span>
        <Phone size={24} />
    </motion.a>
);

export const FloatingWhatsAppButton = () => (
    <motion.a
        href="https://wa.me/919100111643"
        target="_blank"
        rel="noopener noreferrer"
        className={s.whatsappBtn}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
        aria-label="Chat with JMJ Borewells on WhatsApp"
        title="Chat on WhatsApp"
    >
        <span className={s.tooltip}>WhatsApp</span>
        <FaWhatsapp size={26} />
    </motion.a>
);

export const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    className={s.backToTop}
                    onClick={scrollToTop}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    aria-label="Back to top"
                    title="Back to top"
                >
                    <span className={s.tooltip}>Back to Top</span>
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};
