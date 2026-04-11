# AvatarLogo

Assunzioni usate:
- Nessuna prop e obbligatoria: il componente usa valori di default.
- Se manca src, viene mostrato il fallback con iniziali dell utente.
- La callback onClick e opzionale e rende il logo interattivo.

## 2. A cosa serve
AvatarLogo mostra il logo utente con immagine profilo o fallback testuale quando l immagine non e disponibile.

## 3. Props principali
- src (opzionale): URL immagine avatar.
- alt (opzionale): testo alternativo dell immagine.
- name (opzionale): nome usato per creare le iniziali fallback.
- size (opzionale): dimensione tra sm, md, lg.
- className (opzionale): classe CSS extra.
- onClick (opzionale): azione al click sul logo.

## 4. Come integrare
1. Importa AvatarLogo nel file dove vuoi usarlo.
2. Passa src se hai un immagine utente.
3. Se non passi src, usa name per avere iniziali nel fallback.

## 5. Esempio di utilizzo
```tsx
import AvatarLogo from "./AvatarLogo/AvatarLogo";

export default function HeaderUser() {
  return (
    <AvatarLogo
      src="https://images.example.com/user-01.jpg"
      alt="Profilo di Mario Rossi"
      name="Mario Rossi"
      size="md"
      onClick={() => {
        console.log("Apri profilo utente");
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Nel file AvatarLogo.css puoi modificare rapidamente:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Recupera URL avatar lato componente padre con fetch verso endpoint Java e passa il valore ricevuto alla prop src.
