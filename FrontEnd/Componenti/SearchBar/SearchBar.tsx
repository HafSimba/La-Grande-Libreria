import React, { FormEvent, useState } from 'react';
import './componente.css';

export interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  defaultValue?: string;
  onSearch?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export default function SearchBar({
  placeholder = 'Cerca un prodotto...',
  buttonLabel = 'Cerca',
  defaultValue = '',
  onSearch,
  disabled = false,
  className = '',
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  const clearSearch = () => {
    setQuery('');
    onSearch?.('');
  };

  return (
    <form className={`cmp-searchbar ${className}`.trim()} onSubmit={handleSubmit} role="search" aria-label="Ricerca catalogo">
      <label htmlFor="cmp-search-input" className="cmp-searchbar-label">
        Cerca prodotti
      </label>

      <div className="cmp-searchbar-field">
        <input
          id="cmp-search-input"
          type="text"
          className="cmp-searchbar-input"
          placeholder={placeholder}
          value={query}
          disabled={disabled}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.length > 0 && !disabled && (
          <button type="button" className="cmp-searchbar-clear" onClick={clearSearch} aria-label="Pulisci ricerca">
            x
          </button>
        )}
      </div>

      <button type="submit" className="cmp-searchbar-btn" disabled={disabled}>
        {buttonLabel}
      </button>
    </form>
  );
}
