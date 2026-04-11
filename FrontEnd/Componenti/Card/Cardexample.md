# Card

Assunzioni usate (input non completi):
- La Card mostra contenuto informativo con titolo e descrizione.
- Il bottone CTA e opzionale e viene mostrato solo se e presente onCtaClick.
- Lo stile base deve essere semplice e modificabile via CSS.

## 2. A cosa serve
Card e un componente UI riusabile per mostrare una scheda con immagine opzionale, testo e azione principale.

## 3. Props principali
- title (obbligatoria): titolo della card.
- description (obbligatoria): testo descrittivo.
- imageUrl (opzionale): URL immagine in alto.
- ctaLabel (opzionale): testo del bottone azione.
- onCtaClick (opzionale): callback click del bottone.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa Card nel componente dove vuoi usarla.
2. Passa almeno title e description.
3. Se vuoi un bottone, passa anche onCtaClick.

## 5. Esempio di utilizzo
```tsx
import Card from "./Card";

export default function VetrinaLibro() {
  return (
    <Card
      title="Il nome della rosa"
      description="Un romanzo storico ambientato in un monastero medievale."
      imageUrl="https://images.example.com/rosa.jpg"
      ctaLabel="Dettagli"
      onCtaClick={() => {
        console.log("Apri pagina dettaglio libro");
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali nel file Card.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

Puoi anche usare className per aggiungere regole specifiche del progetto.

## 7. Nota backend Java (opzionale, semplice)
Per mantenere Card semplice, recupera i dati nel componente padre con fetch e passa title/description/imageUrl come props.
