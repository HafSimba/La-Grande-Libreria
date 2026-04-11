# Spinner - Guida rapida

## 1) A cosa serve
Il componente Spinner mostra un indicatore animato per comunicare che il sistema sta elaborando dati e non e bloccato.

## 2) Props principali
- `size` (opzionale): dimensione del cerchio in pixel
- `color` (opzionale): colore principale dello spinner
- `thickness` (opzionale): spessore del bordo
- `label` (opzionale): testo mostrato sotto lo spinner
- `fullscreen` (opzionale): overlay a schermo intero
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nella cartella del progetto.
2. Importa Spinner nel componente pagina.
3. Mostralo quando il dato e in caricamento.

## 4) Esempio di utilizzo
```tsx
import React, { useEffect, useState } from 'react';
import Spinner from './FrontEnd/Componenti/Spinner/componente';

export default function PaginaUtenti() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner label="Carico utenti..." fullscreen />;
  }

  return <div>Dati caricati correttamente.</div>;
}
```

## 5) Personalizzazione veloce CSS
Modifica le variabili in alto in `componente.css`:
- `--cmp-bg`
- `--cmp-text`
- `--cmp-accent`
- `--cmp-overlay`

## 6) Nota backend Java (opzionale)
Se chiami un endpoint Java, attiva `loading=true` prima della fetch e `loading=false` in `finally`, mostrando Spinner durante l'attesa.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente funziona con valori di default.
- `optionalProps` non specificate: ho mantenuto solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
