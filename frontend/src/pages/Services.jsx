import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';



const Services = () => {
    const { t, tArray } = useLanguage();

    const plans = [
        {
            title: `4 ½ inch Bore`,
            price: `${t('services', 'price_start')} ₹80 ${t('services', 'per_ft')}`,
            features: [
                t('services', 'domestic'),
                'Cost-Effective',
                'Suitable for Soft/Medium Soil',
                'Standard Casing Pipes',
            ],
            highlight: false,
        },
        {
            title: `6 ½ inch Bore`,
            price: `${t('services', 'price_start')} ₹110 ${t('services', 'per_ft')}`,
            features: [
                t('services', 'commercial'),
                'High-Pressure Drilling',
                'Deep Water Access',
                'Heavy Duty Piping',
            ],
            highlight: true,
        }
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 className="gradient-text" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px' }}>{t('services', 'title')}</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            flex: '1 1 300px',
                            maxWidth: '400px',
                            border: plan.highlight ? '2px solid var(--secondary-color)' : '1px solid var(--glass-border)',
                            position: 'relative',
                            background: plan.highlight ? 'rgba(236, 72, 153, 0.1)' : 'var(--glass-bg)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        {plan.highlight && (
                            <div style={{
                                position: 'absolute',
                                top: '-15px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'var(--secondary-color)',
                                padding: '5px 15px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                            }}>{t('services', 'most_popular')}</div>
                        )}

                        <h3 style={{ fontSize: '2rem', marginTop: 0 }}>{plan.title}</h3>
                        <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>{plan.price}</p>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '30px 0' }}>
                            {plan.features.map((feature, i) => (
                                <li key={i} style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' }}>
                                    <Check size={20} color="var(--accent-color)" />
                                    <span style={{ color: 'var(--text-muted)' }}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className="btn-primary"
                            style={{ width: '100%' }}
                            onClick={() => document.getElementById('location').scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('services', 'choose')}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className="glass-panel" style={{ marginTop: '60px', padding: '40px', overflowX: 'auto' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px' }}>{t('services', 'compare_title')}</h2>

                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid var(--glass-border)' }}>
                            {tArray('services', 'compare_headers').map((header, i) => (
                                <th key={i} style={{ padding: '20px', textAlign: 'left', fontSize: '1.2rem', color: 'var(--text-main)' }}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tArray('services', 'compare_rows').map((row, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                <td style={{ padding: '20px', fontWeight: 'bold', color: 'var(--secondary-color)' }}>{row.feature}</td>
                                <td style={{ padding: '20px', color: 'var(--text-muted)' }}>{row.val45}</td>
                                <td style={{ padding: '20px', color: 'var(--text-muted)' }}>{row.val65}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Services;
