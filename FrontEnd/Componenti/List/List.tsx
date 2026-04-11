import React from 'react';
import './componente.css';

type ListItem = {
  id: string | number;
  title: string;
  price: number;
  image?: string;
  description?: string;
};

export interface ListProps {
  items?: ListItem[];
  view?: 'grid' | 'list';
  currency?: string;
  onItemClick?: (item: ListItem) => void;
  emptyText?: string;
  className?: string;
}

export default function List({
  items = [],
  view = 'grid',
  currency = 'EUR',
  onItemClick,
  emptyText = 'Nessun prodotto disponibile.',
  className = '',
}: ListProps) {
  if (!items.length) {
    return <p className={`cmp-list-empty ${className}`.trim()}>{emptyText}</p>;
  }

  return (
    <section className={`cmp-list ${view === 'list' ? 'is-list' : 'is-grid'} ${className}`.trim()}>
      {items.map((item) => (
        <article key={item.id} className="cmp-list-card" onClick={() => onItemClick?.(item)}>
          <div className="cmp-list-media">
            {item.image ? (
              <img src={item.image} alt={item.title} className="cmp-list-image" />
            ) : (
              <div className="cmp-list-placeholder">No image</div>
            )}
          </div>

          <div className="cmp-list-body">
            <h3 className="cmp-list-title">{item.title}</h3>
            {item.description && <p className="cmp-list-description">{item.description}</p>}
            <p className="cmp-list-price">
              {new Intl.NumberFormat('it-IT', {
                style: 'currency',
                currency,
              }).format(item.price)}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
