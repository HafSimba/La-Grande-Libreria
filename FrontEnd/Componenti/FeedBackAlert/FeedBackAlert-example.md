# FeedBackAlert

Assunzioni usate:
- Nessuna prop e obbligatoria, quindi il componente mostra un messaggio di errore default.
- Il trigger avviene dal componente padre impostando isVisible su true.
- Il bottone Chiudi nasconde localmente l alert.

## 2. A cosa serve
FeedBackAlert e un piccolo componente che si attiva quando un operazione di un altro componente non va a buon fine.

## 3. Props principali
- isVisible (opzionale): mostra o nasconde l alert.
- title (opzionale): titolo del messaggio.
- message (opzionale): descrizione dell errore.
- variant (opzionale): tipo visuale error o warning.
- dismissible (opzionale): mostra bottone Chiudi.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa FeedBackAlert nel componente che esegue operazioni.
2. In caso di errore imposta isVisible su true.
3. Personalizza title e message in base al caso d uso.

## 5. Esempio di utilizzo
```tsx
import { useState } from "react";
import FeedBackAlert from "./FeedBackAlert/FeedBackAlert";

export default function SalvataggioProfilo() {
  const [hasError, setHasError] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setHasError(true)}>
        Simula errore
      </button>

      <FeedBackAlert
        isVisible={hasError}
        title="Errore di salvataggio"
        message="Non e stato possibile salvare i dati."
      />
    </div>
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in FeedBackAlert.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Dopo una fetch fallita verso backend Java, imposta lo stato errore nel componente padre e mostra FeedBackAlert con messaggio personalizzato.
