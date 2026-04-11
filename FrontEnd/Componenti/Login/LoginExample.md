# Login - Guida rapida

## 1) A cosa serve
Il componente Login raccoglie email e password e invia le credenziali al server per verificare l'accesso utente.

## 2) Props principali
- `title` (opzionale): titolo del modulo
- `submitLabel` (opzionale): testo del bottone invio
- `loading` (opzionale): stato di caricamento durante la richiesta
- `errorMessage` (opzionale): messaggio errore visibile nel form
- `onSubmit` (opzionale): callback con `{ email, password }`
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nella cartella del progetto.
2. Importa Login nella pagina di autenticazione.
3. Usa `onSubmit` per chiamare il backend.

## 4) Esempio di utilizzo
```tsx
import React, { useState } from 'react';
import Login from './FrontEnd/Componenti/Login/componente';

export default function PaginaLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (data: { email: string; password: string }) => {
    setLoading(true);
    setError('');

    try {
      // esempio base, sostituisci con la tua API
      const ok = data.email === 'demo@email.com' && data.password === '123456';
      if (!ok) {
        throw new Error('Credenziali non valide');
      }
      alert('Login effettuato');
    } catch (e) {
      setError('Email o password errate');
    } finally {
      setLoading(false);
    }
  };

  return <Login onSubmit={handleLogin} loading={loading} errorMessage={error} />;
}
```

## 5) Personalizzazione veloce CSS
Modifica le variabili in alto in `componente.css`:
- `--cmp-bg`
- `--cmp-text`
- `--cmp-accent`
- `--cmp-border`

## 6) Nota backend Java (opzionale)
In `onSubmit`, fai una fetch POST a un endpoint Java (es. `/api/login`) inviando email e password nel body JSON.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente funziona con configurazione base.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.
