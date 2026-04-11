# Tabs - Guida rapida

## 1) A cosa serve
Il componente Tabs permette di organizzare i contenuti in pannelli diversi, mostrando un pannello alla volta.

## 2) Props principali
- `items` (opzionale): array dei tab con `label` e `content`
- `defaultActiveIndex` (opzionale): indice del tab aperto all'avvio
- `onTabChange` (opzionale): callback quando cambi tab
- `ariaLabel` (opzionale): etichetta accessibilita per il tablist
- `fullWidth` (opzionale): rende i tab a larghezza uguale
- `className` (opzionale): classe CSS custom sul wrapper

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nella cartella del progetto.
2. Importa il componente dove ti serve.
3. Passa i dati dei tab tramite la prop `items`.

## 4) Esempio di utilizzo
```tsx
import React from 'react';
import Tabs from './FrontEnd/Componenti/Tabs/componente';

export default function PaginaDemo() {
  const tabs = [
    { label: 'Descrizione', content: <p>Questo e il contenuto della descrizione.</p> },
    { label: 'Dettagli', content: <p>Qui trovi i dettagli principali.</p> },
    { label: 'FAQ', content: <p>Domande frequenti e risposte.</p> },
  ];

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto' }}>
      <Tabs
        items={tabs}
        defaultActiveIndex={0}
        fullWidth
        onTabChange={(index) => console.log('Tab attivo:', index)}
      />
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
Se i contenuti arrivano dal backend Java, puoi fare una fetch nel componente pagina e poi passare i dati trasformati nella prop `items`.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente funziona anche senza props grazie ai tab di default.
- `optionalProps` non specificate: ho mantenuto solo opzioni essenziali per restare semplice.
- Nessuna libreria esterna richiesta.
