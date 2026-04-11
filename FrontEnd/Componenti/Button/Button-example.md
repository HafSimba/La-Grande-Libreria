# Button

Assunzioni usate:
- requiredProps e optionalProps sono vuote, quindi il componente usa default semplici.
- La navigazione avviene con la prop href quando presente.
- onClick resta opzionale per azioni locali lato UI.

## 2. A cosa serve
Button e un componente generico per navigazione o azioni base in una UI React + TypeScript.

## 3. Props principali
- label (opzionale): testo del bottone.
- href (opzionale): link di navigazione.
- onClick (opzionale): callback al click.
- variant (opzionale): stile visivo tra primary, secondary, ghost.
- disabled (opzionale): disabilita interazione.
- className (opzionale): classe CSS aggiuntiva.

## 4. Come integrare
1. Importa Button nel componente dove vuoi usarlo.
2. Passa href se il bottone deve navigare.
3. Usa onClick per azioni locali quando non usi href.

## 5. Esempio di utilizzo
```tsx
import Button from "./Button/Button";

export default function NavigazioneRapida() {
  return (
    <div>
      <Button label="Vai al catalogo" href="/catalogo" />
      <Button
        label="Apri menu"
        variant="secondary"
        onClick={() => {
          console.log("Azione locale");
        }}
      />
    </div>
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in Button.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Se il link arriva dal backend Java, recuperalo nel componente padre con fetch e passalo alla prop href.
