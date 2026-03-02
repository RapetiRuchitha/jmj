import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Location from './pages/Location';
import About from './pages/About';
import FloatingCallButton from './components/FloatingCallButton';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import SurveyForm from './components/SurveyForm';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
    return (
        <LanguageProvider>
            <div style={{ overflowX: 'hidden' }}>
                <Navbar />
                <FloatingCallButton />
                <FloatingWhatsAppButton />

                <div className="main-container">
                    {/* Home Section */}
                    <section id="home">
                        <Home />
                    </section>

                    {/* Services Section */}
                    <section
                        id="services"
                        style={{
                            background: 'linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.05), transparent)'
                        }}
                    >
                        <Services />
                    </section>

                    {/* Location & Contact Section */}
                    <section
                        id="location"
                        style={{
                            background: 'linear-gradient(180deg, transparent, rgba(236, 72, 153, 0.05), transparent)',
                            padding: '60px 5%'
                        }}
                    >
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Location />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <SurveyForm />
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section
                        id="about"
                        style={{
                            background: 'linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.05), transparent)',
                            paddingBottom: '150px'
                        }}
                    >
                        <About />
                    </section>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default App;
