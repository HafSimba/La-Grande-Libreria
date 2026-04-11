# BurgerMenu

Assunzioni usate:
- Nessuna prop e obbligatoria: il componente usa link demo se non ne riceve.
- Il menu e pensato per navbar mobile con apertura/chiusura manuale.
- Al click su una voce il menu si chiude di default.

## 2. A cosa serve
BurgerMenu mostra una navigazione compatta per mobile, con lista link apribile tramite icona hamburger.

## 3. Props principali
- links (opzionale): lista voci di navigazione.
- title (opzionale): etichetta semantica del nav.
- initiallyOpen (opzionale): stato iniziale del menu.
- closeOnSelect (opzionale): chiude il menu dopo il click su voce.
- onSelect (opzionale): callback con href selezionato.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa BurgerMenu nel componente navbar.
2. Passa links per usare le tue voci.
3. Usa onSelect per tracciare la navigazione.

## 5. Esempio di utilizzo
```tsx
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Contatti", href: "/contatti" }
];

export default function NavbarMobile() {
  return <BurgerMenu links={links} />;
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in BurgerMenu.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Puoi recuperare le voci menu da backend Java nel componente padre con fetch e passarle alla prop links.
