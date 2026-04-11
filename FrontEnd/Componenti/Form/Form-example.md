# Form

Assunzioni usate:
- Nessuna prop e obbligatoria, quindi il componente usa etichette e valori di default.
- I 2 campi obbligatori sono Nome ed Email con controllo base.
- Il campo Messaggio resta opzionale e puo essere nascosto.

## 2. A cosa serve
Form permette all utente di compilare piu voci, con due campi obbligatori validati prima dell invio.

## 3. Props principali
- title (opzionale): titolo del form.
- submitLabel (opzionale): testo del bottone invio.
- showMessageField (opzionale): mostra o nasconde il campo messaggio.
- initialValues (opzionale): valori iniziali dei campi.
- onSubmit (opzionale): callback con i valori validati.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa Form nel componente pagina.
2. Gestisci onSubmit nel componente padre.
3. Passa initialValues se devi precompilare il form.

## 5. Esempio di utilizzo
```tsx
import Form from "./Form/Form";

export default function ContattiPage() {
  return (
    <Form
      title="Richiedi informazioni"
      submitLabel="Invia richiesta"
      onSubmit={(values) => {
        console.log("Dati validati:", values);
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in Form.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Dopo onSubmit puoi inviare i dati a un endpoint Java con fetch nel componente padre.
