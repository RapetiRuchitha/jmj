import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
    const [boreSize, setBoreSize] = useState('4.5');
    const [depth, setDepth] = useState(100);
    const [pipeBrand, setPipeBrand] = useState('sudakar');
    const [total, setTotal] = useState(0);

    const PVC_PIPE_LENGTH = 20; // Feet per pipe usually
    const CASING_DEPTH_ESTIMATE = 40; // Approx casing depth needed

    const prices = {
        fixedLabour: 1000,
        drilling: { '4.5': 80, '6.5': 110 },
        casing: { '4.5': 350, '6.5': 550 },
        pipes: {
            sudakar: { '4.5': 150, '6.5': 250 },
            nandi: { '4.5': 180, '6.5': 280 },
            'sudakar-special': { '4.5': 200, '6.5': 300 }
        }
    };

    useEffect(() => {
        // Calculation Logic
        const drillingCost = depth * prices.drilling[boreSize];
        const casingCost = CASING_DEPTH_ESTIMATE * prices.casing[boreSize]; // Estimate casing for top soil

        // Pipe cost for the rest of depth (Total - Casing) or full depth depending on implementation. 
        // Usually casing is top, then PVC pipes go down. Let's assume PVC for full depth for simplicity or (Depth - Casing).
        // Let's assume PVC pipes are needed for the full depth for the pump insertion usually.
        const pipeCost = depth * prices.pipes[pipeBrand][boreSize];

        const currentTotal = prices.fixedLabour + drillingCost + casingCost + pipeCost;
        setTotal(currentTotal);
    }, [boreSize, depth, pipeBrand]);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="gradient-text" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px' }}>Cost Estimator</h2>

            <div className="glass-panel" style={{ padding: '40px' }}>
                <div style={{ display: 'grid', gap: '30px' }}>

                    {/* Bore Size Selection */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '1.2rem' }}>Bore Size</label>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <button
                                className={`glass-panel`}
                                style={{
                                    flex: 1,
                                    padding: '15px',
                                    background: boreSize === '4.5' ? 'var(--primary-color)' : 'transparent',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setBoreSize('4.5')}
                            >
                                4 ½ Inch
                            </button>
                            <button
                                className={`glass-panel`}
                                style={{
                                    flex: 1,
                                    padding: '15px',
                                    background: boreSize === '6.5' ? 'var(--primary-color)' : 'transparent',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setBoreSize('6.5')}
                            >
                                6 ½ Inch
                            </button>
                        </div>
                    </div>

                    {/* Depth Input */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '1.2rem' }}>Depth (Feet): <span className="gradient-text">{depth} ft</span></label>
                        <input
                            type="range"
                            min="50"
                            max="1000"
                            step="10"
                            value={depth}
                            onChange={(e) => setDepth(Number(e.target.value))}
                            style={{ width: '100%', height: '10px', borderRadius: '5px', accentColor: 'var(--secondary-color)' }}
                        />
                    </div>

                    {/* Pipe Brand */}
                    <div>
                        <label style={{ display: 'block', marginBottom: '10px', fontSize: '1.2rem' }}>Pipe Brand</label>
                        <select
                            value={pipeBrand}
                            onChange={(e) => setPipeBrand(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px',
                                background: 'var(--glass-bg)',
                                color: 'var(--text-main)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="sudakar" style={{ color: 'black' }}>Sudakar</option>
                            <option value="nandi" style={{ color: 'black' }}>Nandi</option>
                            <option value="sudakar-special" style={{ color: 'black' }}>Sudakar Special</option>
                        </select>
                    </div>

                    {/* Breakdown */}
                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px', marginTop: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-muted)' }}>
                            <span>Fixed Labour</span>
                            <span>₹{prices.fixedLabour}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-muted)' }}>
                            <span>Drilling ({depth} ft)</span>
                            <span>₹{depth * prices.drilling[boreSize]}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-muted)' }}>
                            <span>Est. Casing (~40ft)</span>
                            <span>₹{CASING_DEPTH_ESTIMATE * prices.casing[boreSize]}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-muted)' }}>
                            <span>Pipes ({pipeBrand})</span>
                            <span>₹{depth * prices.pipes[pipeBrand][boreSize]}</span>
                        </div>
                    </div>

                    {/* Total */}
                    <div style={{
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        padding: '30px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        marginTop: '10px'
                    }}>
                        <span style={{ fontSize: '1.2rem', opacity: 0.9 }}>Estimated Cost</span>
                        <h2 style={{ fontSize: '3.5rem', margin: '5px 0' }}>₹{total.toLocaleString()}</h2>
                        <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>*Approximate estimate. Actuals may vary based on soil conditions.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Calculator;
