import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Calculator from './pages/Calculator';
import Location from './pages/Location';
import About from './pages/About';
import FloatingCallButton from './components/FloatingCallButton';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import SurveyForm from './components/SurveyForm';
import { LanguageProvider } from './LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <div style={{ paddingBottom: '50px', overflowX: 'hidden' }}>
                <Navbar />
                <FloatingCallButton />
                <FloatingWhatsAppButton />

                <section id="home" style={{ paddingTop: '100px', minHeight: '90vh' }}>
                    <Home />
                </section>

                <section id="services" style={{ padding: '80px 20px', minHeight: '80vh' }}>
                    <Services />
                </section>

                <section id="calculator" style={{ padding: '80px 20px', minHeight: '80vh' }}>
                    <Calculator />
                </section>

                <section id="location" style={{ padding: '80px 20px', minHeight: '80vh' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <Location />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: 'fit-content' }}>
                                <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '20px' }}>Contact Details</h3>
                                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                                    <strong>Phone:</strong> +91 91001 11643<br /><br />
                                    <strong>Email:</strong> jmjborewell@gmail.com<br /><br />
                                    <strong>Address:</strong><br />
                                    1-93, Near RCM Church,<br />
                                    Chodavaram, 531034
                                </p>
                            </div>
                            <SurveyForm />
                        </div>
                    </div>
                </section>

                <section id="about" style={{ padding: '80px 20px', minHeight: '60vh' }}>
                    <About />
                </section>
            </div>
        </LanguageProvider>
    );
}

export default App;
