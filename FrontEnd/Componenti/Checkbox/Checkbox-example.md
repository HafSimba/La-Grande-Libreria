# Checkbox

Assunzioni usate:
- Nessuna prop e obbligatoria, quindi il componente usa opzioni demo di default.
- Le voci custom arrivano come array di stringhe.
- Il componente restituisce i valori selezionati tramite onChange.

## 2. A cosa serve
Checkbox permette di spuntare voci customizzabili e mostra quante opzioni sono state selezionate.

## 3. Props principali
- options (opzionale): elenco voci checkbox.
- title (opzionale): titolo del gruppo.
- defaultChecked (opzionale): voci gia selezionate all avvio.
- onChange (opzionale): callback con i valori selezionati.
- disabled (opzionale): disabilita tutte le checkbox.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa Checkbox nel componente pagina.
2. Passa options per personalizzare le voci.
3. Usa onChange per aggiornare lo stato nel componente padre.

## 5. Esempio di utilizzo
```tsx
import Checkbox from "./Checkbox/Checkbox";

const preferenze = ["Gialli", "Fantasy", "Biografie"];

export default function FiltriCatalogo() {
  return (
    <Checkbox
      title="Categorie preferite"
      options={preferenze}
      onChange={(values) => {
        console.log("Selezionati:", values);
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in Checkbox.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Puoi inviare i valori selezionati a un endpoint Java dal componente padre usando fetch dentro onChange.
