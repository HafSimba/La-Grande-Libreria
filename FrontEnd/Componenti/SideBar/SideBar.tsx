import React from 'react';
import './componente.css';

type SideBarItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

export interface SideBarProps {
  title?: string;
  items?: SideBarItem[];
  position?: 'left' | 'right';
  collapsed?: boolean;
  width?: number;
  className?: string;
}

export default function SideBar({
  title = 'Menu',
  items = [
    { label: 'Home', href: '/' },
    { label: 'Catalogo', href: '/catalogo' },
    { label: 'Contatti', href: '/contatti' },
  ],
  position = 'left',
  collapsed = false,
  width = 260,
  className = '',
}: SideBarProps) {
  const style: React.CSSProperties = {
    width: collapsed ? 72 : width,
  };

  return (
    <aside
      className={`cmp-sidebar cmp-sidebar--${position} ${collapsed ? 'is-collapsed' : ''} ${className}`.trim()}
      style={style}
      aria-label="Menu laterale"
    >
      <div className="cmp-sidebar-header">
        <span className="cmp-sidebar-title">{title}</span>
      </div>

      <nav className="cmp-sidebar-nav" aria-label="Navigazione principale">
        <ul className="cmp-sidebar-list">
          {items.map((item, index) => (
            <li key={index} className="cmp-sidebar-item">
              {item.href ? (
                <a className="cmp-sidebar-link" href={item.href}>
                  {collapsed ? item.label.charAt(0) : item.label}
                </a>
              ) : (
                <button type="button" className="cmp-sidebar-link" onClick={item.onClick}>
                  {collapsed ? item.label.charAt(0) : item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
