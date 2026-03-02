import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/919100111643"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '180px', // Raised to be above call button and footer
                right: '25px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#25D366', // WhatsApp Green
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
                zIndex: 2000,
                cursor: 'pointer',
                color: 'white'
            }}
        >
            <FaWhatsapp size={32} color="white" />
        </motion.a>
    );
};

export default FloatingWhatsAppButton;
