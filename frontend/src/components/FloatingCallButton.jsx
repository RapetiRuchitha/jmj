import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton = () => {
    return (
        <motion.a
            href="tel:+919100111643"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '100px', // Raised to be above fixed footer
                right: '25px',
                backgroundColor: '#22c55e', // Green for call
                color: 'white',
                padding: '15px',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.5)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textDecoration: 'none'
            }}
        >
            <Phone size={28} />
        </motion.a>
    );
};

export default FloatingCallButton;
