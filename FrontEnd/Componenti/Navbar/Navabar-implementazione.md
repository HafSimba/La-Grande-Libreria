import React from 'react';
import Navbar, { NavItem } from './FrontEnd/Componenti/Navbar';

const items: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Catalogo', href: '/catalogo' },
  { label: 'Contatti', href: '/contatti' },
];

export default function AppHeader() {
  return (
    <Navbar
      brand="La Grande Libreria"
      brandLogo="/logo.svg"
      navItems={items}
      rightContent={
        <>
          <a href="/login" className="btn">Login</a>
        </>
      }
      sticky
    />
  );
}