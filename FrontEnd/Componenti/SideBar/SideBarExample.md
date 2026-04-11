# SideBar - Guida rapida

## 1) A cosa serve
Il componente SideBar occupa una porzione verticale della pagina e contiene collegamenti utili per navigare tra le sezioni principali.

## 2) Props principali
- `title` (opzionale): titolo mostrato in alto
- `items` (opzionale): lista voci menu con `label`, `href` o `onClick`
- `position` (opzionale): posizione della sidebar (`left` o `right`)
- `collapsed` (opzionale): modalita compatta
- `width` (opzionale): larghezza in pixel
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nel progetto.
2. Importa SideBar nella pagina layout.
3. Passa la lista voci menu tramite `items`.

## 4) Esempio di utilizzo
```tsx
import React from 'react';
import SideBar from './FrontEnd/Componenti/SideBar/componente';

export default function LayoutPagina() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar
        title="Pannello"
        width={280}
        items={[
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Prodotti', href: '/prodotti' },
          { label: 'Ordini', href: '/ordini' },
          { label: 'Logout', onClick: () => alert('Logout') },
        ]}
      />

      <main style={{ padding: '1rem', flex: 1 }}>
        Contenuto principale della pagina
      </main>
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
Se il menu arriva da backend Java, fai fetch nella pagina padre e passa le voci ottenute nella prop `items`.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente include un menu di default.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
