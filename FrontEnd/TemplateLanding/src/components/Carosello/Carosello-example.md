# Carosello

Assunzioni usate:
- Nessuna prop e obbligatoria, quindi il componente usa slide demo di default.
- Il carosello mostra sempre una slide per volta.
- In viewMode card compare anche testo con bottone Apri.

## 2. A cosa serve
Carosello mostra contenuti a scorrimento e puo visualizzare sia immagini sia card con titolo e descrizione.

## 3. Props principali
- items (opzionale): elenco slide con immagine e testo.
- viewMode (opzionale): image o card.
- initialIndex (opzionale): slide iniziale.
- showDots (opzionale): mostra indicatori delle slide.
- onItemClick (opzionale): callback click dell elemento attivo.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa Carosello nel componente host.
2. Passa items se vuoi dati personalizzati.
3. Imposta viewMode="card" per mostrare anche testo e bottone.

## 5. Esempio di utilizzo
```tsx
import Carosello from "./Carosello/Carosello";

const slides = [
  {
    id: "s1",
    imageUrl: "https://picsum.photos/900/500?random=51",
    title: "Libri del mese",
    description: "Scelte della redazione"
  },
  {
    id: "s2",
    imageUrl: "https://picsum.photos/900/500?random=52",
    title: "Classici",
    description: "I grandi autori"
  }
];

export default function HomeHero() {
  return (
    <Carosello
      items={slides}
      viewMode="card"
      onItemClick={(item) => {
        console.log("Hai cliccato:", item.title);
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in Carosello.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Puoi recuperare le slide dal backend Java con fetch nel componente padre e poi passarle alla prop items.
