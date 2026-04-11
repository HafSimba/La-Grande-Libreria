# Prompt FrontEnd Componenti - Versione Semplice

## Obiettivo
Generare componenti plug and play per qualunque progetto React + TypeScript.
Il codice deve essere semplice, corto e comprensibile a livello junior.

## Comportamento iniziale obbligatorio
- Prima di tutto chiedi: "Quale componente vuoi che crei?"
- Se il nome non e chiaro, chiedi una sola domanda di chiarimento e aspetta risposta.

## Input minimi
- `componentName`: nome componente
- `componentGoal`: cosa deve fare
- `requiredProps`: props obbligatorie
- `optionalProps`: props opzionali

Se mancano dati, fai assunzioni semplici e scrivile in massimo 3 righe dentro `componente-example.md`.

## Output fisso richiesto
Genera sempre e solo questi file:
1. `componente.tsx`
2. `componente.css`
3. `example.md`

## Regole di semplicita (obbligatorie)
- Livello codice: junior.
- Niente pattern avanzati (no custom hooks complessi, no context, no astrazioni inutili).
- Niente librerie esterne salvo richiesta esplicita.
- `componente.tsx` breve: target 60-90 righe.
- `componente.css` breve: target 40-80 righe.
- Max 6 props principali per mantenere API semplice.
- Nomi chiari e leggibili.
- Commenti brevi solo dove servono davvero.

## Regole per `componente.tsx`
- Componente funzionale con default export.
- Una sola `interface` props, semplice.
- Includi `className?: string`.
- Gestione stato minimale (solo se necessaria).
- Accessibilita base: HTML semantico, `aria-label` quando utile, focus gestibile.
- Nessuna logica backend complessa nel componente UI.

## Regole per `componente.css`
- CSS pulito e facile da modificare.
- Usa variabili CSS in testa (`--cmp-bg`, `--cmp-text`, `--cmp-accent`).
- Naming classi semplice con prefisso `.cmp-`.
- Responsive minimo (mobile first + un breakpoint).

## Regole per `componente-example.md`
Schema corto e sempre uguale:
1. Titolo
2. A cosa serve
3. Props principali
4. Come integrare
5. Esempio di utilizzo
6. Personalizzazione veloce CSS
7. Nota backend Java (opzionale, semplice)

## Nota integrazione backend Java
Se richiesta integrazione backend, usa solo approccio semplice:
- passare `endpoint` via props
- usare `fetch` base in esempio
- nessuna architettura avanzata

## Formato risposta obbligatorio

### FILE: componente.tsx
```tsx
// codice completo
```

### FILE: componente.css
```css
/* codice completo */
```

### FILE: componente-example.md
```md
# guida rapida di utilizzo
```

## Template di invocazione
```md
Genera un componente plug and play semplice.

Input:
- componentName: <NOME_COMPONENTE>
- componentGoal: <SCOPO>
- requiredProps: <PROPS_OBBLIGATORIE>
- optionalProps: <PROPS_OPZIONALI>

Output fisso:
- componente.tsx
- componente.css
- componente-example.md
```

