import React, { useState } from 'react';
import './Navbar.css';

type NavLink = {
  label: string;
  href: string;
};

export interface NavbarProps {
  brand?: string;
  brandImage?: string;
  links?: NavLink[];
  sticky?: boolean;
  rightContent?: React.ReactNode;
  className?: string;
}

export default function Navbar({
  brand = 'Logo',
  brandImage,
  links = [
    { label: 'Home', href: '/' },
    { label: 'Carosello', href: '/carosello' },
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'Contatti', href: '/contatti' },
  ],
  sticky = true,
  rightContent,
  className = '',
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className={`cmp-navbar ${sticky ? 'is-sticky' : ''} ${className}`.trim()}>
      <div className="cmp-navbar-container">
        <div className="cmp-navbar-brand">
          {brandImage && <img src={brandImage} alt={brand} className="cmp-navbar-logo" />}
          <span className="cmp-navbar-text">{brand}</span>
        </div>

        <button
          type="button"
          className={`cmp-navbar-toggle ${mobileOpen ? 'is-open' : ''}`.trim()}
          onClick={toggleMobile}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`cmp-navbar-nav ${mobileOpen ? 'is-open' : ''}`.trim()}>
          <ul className="cmp-navbar-list">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="cmp-navbar-link"
                  onClick={(e) => {
                    // chiudi il menu mobile sempre
                    setMobileOpen(false);

                    const href = link.href ?? '';

                    // se è un anchor locale (#id) gestiamo lo scroll in-page
                    if (href.startsWith('#')) {
                      e.preventDefault();
                      const target = document.querySelector(href) as HTMLElement | null;
                      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      return;
                    }

                    // se è una route tipo '/carosello' e nella pagina esiste #carosello, scrolla senza navigare
                    if (href.startsWith('/')) {
                      const id = href.replace(/^\/+/, '').split(/[?#]/)[0];
                      if (id) {
                        const target = document.querySelector(`#${id}`) as HTMLElement | null;
                        if (target) {
                          e.preventDefault();
                          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          return;
                        }
                      }
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="cmp-navbar-right">{rightContent}</div>
      </div>
    </header>
  );
}
