import React, { useState } from 'react';
import './tabs.css';

export interface TabsProps {
  items?: { label: string; content: React.ReactNode }[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  ariaLabel?: string;
  fullWidth?: boolean;
  className?: string;
}

export default function Tabs({
  items = [
    { label: 'Tab 1', content: 'Contenuto Tab 1' },
    { label: 'Tab 2', content: 'Contenuto Tab 2' },
    { label: 'Tab 3', content: 'Contenuto Tab 3' },
  ],
  defaultActiveIndex = 0,
  onTabChange,
  ariaLabel = 'Tabs navigazione contenuti',
  fullWidth = false,
  className = '',
}: TabsProps) {
  const safeIndex = Math.min(Math.max(defaultActiveIndex, 0), items.length - 1);
  const [activeIndex, setActiveIndex] = useState(safeIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onTabChange?.(index);
  };

  if (!items.length) {
    return null;
  }

  return (
    <section className={`cmp-tabs ${className}`.trim()}>
      <div className="cmp-tabs-list" role="tablist" aria-label={ariaLabel}>
        {items.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              id={`cmp-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`cmp-panel-${index}`}
              tabIndex={isActive ? 0 : -1}
              className={`cmp-tab ${isActive ? 'is-active' : ''} ${fullWidth ? 'is-full' : ''}`.trim()}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <article
        id={`cmp-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`cmp-tab-${activeIndex}`}
        className="cmp-tab-panel"
      >
        {items[activeIndex]?.content}
      </article>
    </section>
  );
}
