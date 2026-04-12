import React from 'react';
import './HeroSection.css';

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  className?: string;
}

export default function HeroSection({
  title = 'Benvenuto nel nostro catalogo',
  subtitle = 'Scopri prodotti selezionati e offerte aggiornate ogni giorno.',
  ctaLabel = 'Esplora ora',
  ctaHref = '/catalogo',
  backgroundImage,
  className = '',
}: HeroSectionProps) {
  const style: React.CSSProperties = backgroundImage
    ? { backgroundImage: `linear-gradient(rgba(17,24,39,0.55), rgba(17,24,39,0.55)), url(${backgroundImage})` }
    : {};

  return (
    <section className={`cmp-hero ${className}`.trim()} style={style} aria-label="Sezione principale">
      <div className="cmp-hero-content">
        <h1 className="cmp-hero-title">{title}</h1>
        <p className="cmp-hero-subtitle">{subtitle}</p>
        <a href={ctaHref} className="cmp-hero-btn">
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
