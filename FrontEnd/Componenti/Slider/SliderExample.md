# Slider - Guida rapida

## 1) A cosa serve
Il componente Slider permette di filtrare i prodotti per fascia di prezzo usando due manopole: una per il minimo e una per il massimo.

## 2) Props principali
- `min` (opzionale): valore minimo consentito
- `max` (opzionale): valore massimo consentito
- `step` (opzionale): incremento dei valori
- `defaultValue` (opzionale): coppia iniziale `[minimo, massimo]`
- `onChange` (opzionale): callback con i due valori correnti
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nella cartella del progetto.
2. Importa il componente nella pagina filtri.
3. Passa la callback `onChange` per aggiornare la lista prodotti.

## 4) Esempio di utilizzo
```tsx
import React, { useMemo, useState } from 'react';
import Slider from './FrontEnd/Componenti/Slider/componente';

type Product = { id: number; name: string; price: number };

const products: Product[] = [
  { id: 1, name: 'Libro A', price: 120 },
  { id: 2, name: 'Libro B', price: 340 },
  { id: 3, name: 'Libro C', price: 790 },
];

export default function Catalogo() {
  const [range, setRange] = useState<[number, number]>([100, 700]);

  const filtered = useMemo(() => {
    return products.filter((p) => p.price >= range[0] && p.price <= range[1]);
  }, [range]);

  return (
    <div>
      <Slider min={0} max={1000} step={10} defaultValue={[100, 700]} onChange={setRange} />

      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price} euro
          </li>
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
Puoi inviare `minPrice` e `maxPrice` come query params a un endpoint Java con fetch e aggiornare i prodotti quando il range cambia.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente usa valori default.
- `optionalProps` non specificate: mantenute solo le opzioni essenziali.
- Nessuna libreria esterna richiesta.
