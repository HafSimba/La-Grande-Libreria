//footer con contatti e riferimenti istituizionali fittizzi
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* 1. Contatti */}
                <section className="footer-section">
                    <h3>Contatti</h3>
                    <ul>
                        <li>
                            <a href="mailto:info@esempio.it">eventipazziculturali@esempio.it</a>
                        </li>
                        <li>
                            <a href="tel:+390123456789">+39 0666 6666 666 </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/culturaflecs"
                                target="_blank" rel="noopener noreferrer">
                                Via Fittizia 420, 00100 ZooDeRoma
                            </a>
                        </li>
                    </ul>
                </section>

                {/* 2. Riferimenti istituzionali */}
                <section className="footer-section">
                    <h3>Istituzioni</h3>
                    <ul>
                        <li>
                            <a href="#privacy" className="footer-link">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#terms" className="footer-link">
                                Termini di servizio
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="footer-link">
                                Chi siamo
                            </a>
                        </li>
                    </ul>
                </section>

            </div>

            <div className="footer-bottom">
                © 2026 Esempio S.r.l. - Tutti i diritti riservati al dio serpente
            </div>
        </footer>
    );
};

export default Footer;