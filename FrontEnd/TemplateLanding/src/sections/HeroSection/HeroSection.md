# HeroSection - Guida rapida

## 1) A cosa serve
Il componente HeroSection e la sezione principale above the fold: appare subito nella parte alta della pagina senza bisogno di scroll e guida l'utente verso l'azione principale.

## 2) Props principali
- `title` (opzionale): titolo principale
- `subtitle` (opzionale): testo descrittivo sotto al titolo
- `ctaLabel` (opzionale): testo bottone call to action
- `ctaHref` (opzionale): link della call to action
- `backgroundImage` (opzionale): URL immagine di sfondo
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nel progetto.
2. Importa HeroSection nella home o nella pagina principale.
3. Personalizza titolo, sottotitolo e CTA in base alla campagna.

## 4) Esempio di utilizzo
```tsx
import React from 'react';
import HeroSection from './FrontEnd/Componenti/HeroSection/componente';

export default function HomePage() {
  return (
    <HeroSection
      title="La Grande Libreria"
      subtitle="Trova i tuoi prossimi libri preferiti tra novita, classici e offerte."
      ctaLabel="Vai al catalogo"
      ctaHref="/catalogo"
      backgroundImage="/images/hero-books.jpg"
    />
  );
}
```

## 5) Personalizzazione veloce CSS
Modifica le variabili in alto in `componente.css`:
- `--cmp-bg`
- `--cmp-text`
- `--cmp-accent`
- `--cmp-overlay`

## 6) Nota backend Java (opzionale)
Se contenuti hero arrivano da backend Java, fai fetch nella pagina padre e passa i valori ricevuti come props.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente funziona con valori default.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
