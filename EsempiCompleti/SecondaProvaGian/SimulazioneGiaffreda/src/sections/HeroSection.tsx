//sezione di introduzione sito con foto di bg a tutto schermo e titolo
import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1 className="hero-title">
                    Celebrando eventi indimenticabili
                </h1>
            </div>
        </section>
    );
};

export default HeroSection;