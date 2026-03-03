import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import s from './Faq.module.css';

const Faq = () => {
    const { t, tArray } = useLanguage();
    const [openFaq, setOpenFaq] = useState(null);
    const faqs = tArray('home', 'faqs');

    return (
        <section className={s.section}>
            <div className={`${s.sectionInner} ${s.textCenter}`}>
                <h2 className={s.sectionTitleGradient}>{t('home', 'faq_title')}</h2>
                <div className={s.divider} />

                <div className={s.faqGrid}>
                    {/* Left Column */}
                    <div className={s.faqColumn}>
                        {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, i) => (
                            <div key={`l-${i}`} className={s.faqItem}>
                                <button
                                    className={s.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === `l-${i}` ? null : `l-${i}`)}
                                    aria-expanded={openFaq === `l-${i}`}
                                >
                                    {faq.q}
                                    {openFaq === `l-${i}` ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === `l-${i}` && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                                            <div className={s.faqAnswer}>{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                    {/* Right Column */}
                    <div className={s.faqColumn}>
                        {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, i) => (
                            <div key={`r-${i}`} className={s.faqItem}>
                                <button
                                    className={s.faqQuestion}
                                    onClick={() => setOpenFaq(openFaq === `r-${i}` ? null : `r-${i}`)}
                                    aria-expanded={openFaq === `r-${i}`}
                                >
                                    {faq.q}
                                    {openFaq === `r-${i}` ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === `r-${i}` && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                                            <div className={s.faqAnswer}>{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
