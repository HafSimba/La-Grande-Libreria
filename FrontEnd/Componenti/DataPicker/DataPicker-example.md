# DataPicker

Assunzioni usate:
- Nessuna prop e obbligatoria, quindi il componente parte vuoto.
- Data e ora sono gestite con input nativi HTML.
- Il valore combinato viene restituito nel callback onChange.

## 2. A cosa serve
DataPicker permette di inserire data e ora in modo semplice, con anteprima del valore selezionato.

## 3. Props principali
- label (opzionale): titolo del componente.
- defaultDate (opzionale): data iniziale.
- defaultTime (opzionale): ora iniziale.
- disabled (opzionale): disabilita input data e ora.
- onChange (opzionale): callback con date, time e iso.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa DataPicker nel componente pagina.
2. Usa onChange per ricevere il valore selezionato.
3. Imposta defaultDate/defaultTime se vuoi un valore iniziale.

## 5. Esempio di utilizzo
```tsx
import DataPicker from "./DataPicker/DataPicker";

export default function FormPrenotazione() {
  return (
    <DataPicker
      defaultDate="2026-04-11"
      defaultTime="10:30"
      onChange={(value) => {
        console.log("Data:", value.date);
        console.log("Ora:", value.time);
        console.log("ISO:", value.iso);
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in DataPicker.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Dal componente padre puoi inviare value.iso a un endpoint Java con fetch per salvare data e ora selezionate.
