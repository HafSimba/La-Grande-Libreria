# Navbar - Guida rapida

## 1) A cosa serve
Il componente Navbar e la "bussola" del sito: rimane quasi sempre fisso in alto e serve a dare all'utente un punto di riferimento costante per spostarsi tra le macro-aree del sito.

## 2) Props principali
- `brand` (opzionale): nome o logo testo della brand
- `brandImage` (opzionale): URL immagine logo
- `links` (opzionale): array di link con `label` e `href`
- `sticky` (opzionale): se vera, la navbar rimane fissa in alto durante lo scroll
- `rightContent` (opzionale): elemento React a destra (login, carrello, etc)
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nel progetto.
2. Importa Navbar nel layout principale.
3. Passa brand, links e opzionalmente rightContent.

## 4) Esempio di utilizzo
```tsx
import React from 'react';
import Navbar from './FrontEnd/Componenti/Navbar/componente';

export default function Layout() {
  return (
    <>
      <Navbar
        brand="La Grande Libreria"
        brandImage="/logo.svg"
        sticky
        links={[
          { label: 'Home', href: '/' },
          { label: 'Catalogo', href: '/catalogo' },
          { label: 'Chi Siamo', href: '/chi-siamo' },
          { label: 'Contatti', href: '/contatti' },
        ]}
        rightContent={
          <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Login
          </a>
        }
      />

      <main style={{ padding: '2rem' }}>
        Contenuto principale della pagina
      </main>
    </>
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
Se i link vengono da backend Java, fai fetch nella pagina padre e passa i dati nella prop `links`.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente include link di default.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
