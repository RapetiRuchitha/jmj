import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    "images/slide1.jpeg",
    "images/slide2.jpeg",
    "images/slide3.jpg",
    "images/slide4.jpg"
];

const Slider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: {
            x: '100%',
            opacity: 1
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: {
            zIndex: 0,
            x: '-100%',
            opacity: 1
        }
    };

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
            <AnimatePresence initial={false} mode='popLayout'>
                <motion.img
                    key={index}
                    src={images[index]}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute'
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

export default Slider;
