import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import s from './FloatingButtons.module.css';

export const FloatingCallButton = () => (
    <motion.a
        href="tel:+919100111643"
        className={s.callBtn}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        aria-label="Call JMJ Borewells"
    >
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
        aria-label="Chat on WhatsApp"
    >
        <FaWhatsapp size={26} />
    </motion.a>
);
