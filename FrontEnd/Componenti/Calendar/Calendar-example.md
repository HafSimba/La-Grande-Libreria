# Calendar

Assunzioni usate:
- Nessuna prop e obbligatoria: il calendario usa la data corrente come default.
- L intervallo anni predefinito e 2000-2100.
- La data selezionata viene restituita in formato YYYY-MM-DD.

## 2. A cosa serve
Calendar mostra una griglia con anno, mesi e giorni per selezionare una data in modo semplice.

## 3. Props principali
- initialDate (opzionale): data iniziale del calendario.
- minYear (opzionale): anno minimo selezionabile.
- maxYear (opzionale): anno massimo selezionabile.
- locale (opzionale): locale per i nomi dei mesi.
- onDateSelect (opzionale): callback quando scegli un giorno.
- className (opzionale): classe CSS aggiuntiva.

## 4. Come integrare
1. Importa Calendar nel componente dove ti serve.
2. Usalo senza props per comportamento base.
3. Passa onDateSelect per ricevere la data scelta.

## 5. Esempio di utilizzo
```tsx
import Calendar from "./Calendar/Calendar";

export default function Prenotazione() {
  return (
    <Calendar
      initialDate="2026-04-11"
      minYear={2020}
      maxYear={2030}
      onDateSelect={(value) => {
        console.log("Data scelta:", value);
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in Calendar.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Puoi inviare la data selezionata a un endpoint Java dal componente padre usando fetch nel callback onDateSelect.
