import React from 'react';
import { motion } from 'framer-motion';
import { Check, Droplets } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Services.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Services = () => {
    const { t, tArray } = useLanguage();

    const plans = [
        {
            title: '4 ½ inch Bore',
            price: `${t('services', 'price_start')} ₹80 ${t('services', 'per_ft')}`,
            features: tArray('services', 'features_45'),
            highlight: false,
            icon: <Droplets size={28} />
        },
        {
            title: '6 ½ inch Bore',
            price: `${t('services', 'price_start')} ₹110 ${t('services', 'per_ft')}`,
            features: tArray('services', 'features_65'),
            highlight: true,
            icon: <Droplets size={28} />
        },
        {
            title: t('services', 'pressing_title'),
            price: t('services', 'pressing_desc'),
            features: tArray('services', 'features_pressing'),
            highlight: false,
            icon: <Droplets size={28} />
        }
    ];

    return (
        <div className={s.wrap}>
            <h2 className={s.title}>{t('services', 'title')}</h2>
            <div className={s.divider} />

            <div className={s.plansRow}>
                {plans.map((plan, i) => (
                    <motion.div
                        key={i}
                        className={plan.highlight ? s.planHighlight : s.planCard}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        {plan.highlight && <div className={s.popularBadge}>{t('services', 'most_popular')}</div>}
                        <div className={s.planIcon}>{plan.icon}</div>
                        <h3 className={s.planTitle}>{plan.title}</h3>
                        <div className={s.planPrice}>{plan.price}</div>

                        <ul className={s.featureList}>
                            {plan.features.map((f, j) => (
                                <li key={j} className={s.featureItem}>
                                    <Check size={16} className={s.featureIcon} />
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <button className={s.selectBtn} onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('services', 'choose')}
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className={s.tableWrap}>
                <h2 className={s.tableTitle}>{t('services', 'compare_title')}</h2>
                <table className={s.table}>
                    <thead>
                        <tr>
                            {tArray('services', 'compare_headers').map((h, i) => (
                                <th key={i}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tArray('services', 'compare_rows').map((row, i) => (
                            <tr key={i}>
                                <td>{row.feature}</td>
                                <td>{row.val45}</td>
                                <td>{row.val65}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Services;
