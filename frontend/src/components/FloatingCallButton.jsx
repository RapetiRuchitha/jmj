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
                bottom: '20px',
                right: '20px', // Right side is standard for FABs
                backgroundColor: '#22c55e', // Green for call
                color: 'white',
                padding: '15px',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.5)',
                zIndex: 1000,
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
