import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'var(--bg-body)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)'
                }}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Something went wrong
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '500px', lineHeight: 1.6 }}>
                        We apologize for the inconvenience. Please refresh the page or contact us directly at <strong>+91 91001 11643</strong>.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 2rem',
                            borderRadius: '9999px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
