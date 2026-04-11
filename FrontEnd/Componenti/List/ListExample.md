# List - Guida rapida

## 1) A cosa serve
Il componente List prende dati prodotti grezzi e li visualizza in una griglia o in un elenco ordinato, pronti da consultare e acquistare.

## 2) Props principali
- `items` (opzionale): array prodotti con `id`, `title`, `price`, opzionali `image` e `description`
- `view` (opzionale): layout `grid` o `list`
- `currency` (opzionale): valuta usata nella formattazione prezzo
- `onItemClick` (opzionale): callback al click su prodotto
- `emptyText` (opzionale): testo se non ci sono prodotti
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nel progetto.
2. Importa List nella pagina catalogo.
3. Trasforma i dati API nel formato richiesto e passali a `items`.

## 4) Esempio di utilizzo
```tsx
import React, { useMemo } from 'react';
import List from './FrontEnd/Componenti/List/componente';

const apiData = [
  { product_id: 1, name: 'Libro A', amount: 14.9, image_url: '/a.jpg' },
  { product_id: 2, name: 'Libro B', amount: 21.0, image_url: '/b.jpg' },
];

export default function Catalogo() {
  const items = useMemo(() => {
    return apiData.map((p) => ({
      id: p.product_id,
      title: p.name,
      price: p.amount,
      image: p.image_url,
    }));
  }, []);

  return (
    <List
      items={items}
      view="grid"
      onItemClick={(item) => console.log('Selezionato:', item.id)}
    />
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
Se i dati arrivano da backend Java, fai fetch nella pagina padre e mappa la risposta nel formato `items` prima di passarlo a List.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: `items` e opzionale con fallback vuoto.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
