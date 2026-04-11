# SearchBar - Guida rapida

## 1) A cosa serve
Il componente SearchBar e il ponte tra utente e catalogo: raccoglie una ricerca testuale e permette di filtrare i prodotti in modo rapido.

## 2) Props principali
- `placeholder` (opzionale): testo suggerito nell'input
- `buttonLabel` (opzionale): testo del bottone cerca
- `defaultValue` (opzionale): valore iniziale della ricerca
- `onSearch` (opzionale): callback inviata al submit o al reset
- `disabled` (opzionale): disabilita input e bottone
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nel progetto.
2. Importa SearchBar nella pagina catalogo.
3. Usa `onSearch` per filtrare prodotti lato frontend o chiamare backend.

## 4) Esempio di utilizzo
```tsx
import React, { useMemo, useState } from 'react';
import SearchBar from './FrontEnd/Componenti/SearchBar/componente';

type Product = { id: number; name: string };

const products: Product[] = [
  { id: 1, name: 'Libro React' },
  { id: 2, name: 'Guida TypeScript' },
  { id: 3, name: 'Design UI Base' },
];

export default function Catalogo() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={setQuery} placeholder="Cerca nel catalogo..." />

      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 5) Personalizzazione veloce CSS
Modifica le variabili in alto in `componente.css`:
- `--cmp-bg`
- `--cmp-text`
- `--cmp-accent`
- `--cmp-border`

## 6) Nota backend Java (opzionale)
In `onSearch`, invia la query a un endpoint Java (es. `/api/products?search=...`) e aggiorna la lista con la risposta.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: componente utilizzabile anche senza props.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
