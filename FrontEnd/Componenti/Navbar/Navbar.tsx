import React, { useState } from 'react';
import './Navbar.css';

export type NavItem = {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  target?: string;
};

export interface NavbarProps {
  brand?: string;
  brandLogo?: string; // url immagine
  navItems?: NavItem[];
  rightContent?: React.ReactNode;
  sticky?: boolean;
  className?: string;
}

export default function Navbar({
  brand,
  brandLogo,
  navItems = [],
  rightContent,
  sticky = false,
  className = ''
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`lg-navbar ${sticky ? 'lg-navbar--sticky' : ''} ${className}`}>
      <div className="lg-navbar__container">
        <div className="lg-navbar__brand">
          {brandLogo && <img src={brandLogo} alt={brand ?? 'logo'} className="lg-navbar__logo" />}
          {brand && <span className="lg-navbar__brand-text">{brand}</span>}
        </div>

        <button
          className="lg-navbar__toggle"
          aria-controls="lg-navbar-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <span className="lg-navbar__toggle-bar" />
          <span className="lg-navbar__toggle-bar" />
          <span className="lg-navbar__toggle-bar" />
        </button>

        <nav id="lg-navbar-menu" className={`lg-navbar__nav ${open ? 'lg-navbar__nav--open' : ''}`} aria-label="Main">
          <ul className="lg-navbar__list">
            {navItems.map((item, i) => (
              <li key={i} className="lg-navbar__item">
                {item.href ? (
                  <a href={item.href} target={item.target} className="lg-navbar__link" onClick={close}>
                    {item.label}
                  </a>
                ) : (
                  <button
                    className="lg-navbar__link"
                    onClick={(e) => { item.onClick?.(e); close(); }}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg-navbar__right">{rightContent}</div>
      </div>
    </header>
  );
}