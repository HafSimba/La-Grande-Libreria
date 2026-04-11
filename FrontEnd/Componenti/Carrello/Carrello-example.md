# Carrello

Assunzioni usate:
- Non ci sono props obbligatorie, quindi il componente usa un catalogo demo di default.
- Ogni click su Aggiungi incrementa il conteggio dell elemento.
- Il totale mostra quanti articoli sono stati aggiunti al carrello.

## 2. A cosa serve
Carrello e un componente semplice che indica quanti item sono stati aggiunti durante la navigazione o selezione prodotti.

## 3. Props principali
- products (opzionale): elenco prodotti da mostrare.
- title (opzionale): titolo del box carrello.
- emptyText (opzionale): testo quando non ci sono elementi aggiunti.
- showTotal (opzionale): mostra o nasconde il totale.
- onAdd (opzionale): callback quando si aggiunge un item.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa Carrello nel componente pagina.
2. Passa products se hai un elenco personalizzato.
3. Usa onAdd per sincronizzare altre parti della UI.

## 5. Esempio di utilizzo
```tsx
import Carrello from "./Carrello/Carrello";

const prodotti = [
  { id: "b1", name: "Il Piccolo Principe" },
  { id: "b2", name: "1984" },
  { id: "b3", name: "Moby Dick" }
];

export default function ListaLibri() {
  return (
    <Carrello
      products={prodotti}
      onAdd={(item) => {
        console.log("Aggiunto:", item.name);
      }}
    />
  );
}
```

## 6. Personalizzazione veloce CSS
Variabili principali nel file Carrello.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Se i prodotti arrivano da backend Java, recuperali nel componente padre con fetch e passali alla prop products.
