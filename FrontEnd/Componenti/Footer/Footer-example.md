# Footer

Assunzioni usate:
- Nessuna prop e obbligatoria, quindi il footer mostra contenuti demo di default.
- I link sono voci generiche con href placeholder.
- Le icone social sono etichette testuali brevi dentro bottoni circolari.

## 2. A cosa serve
Footer raccoglie informazioni generiche, link utili e pulsanti social in fondo alla pagina.

## 3. Props principali
- brandName (opzionale): nome brand mostrato nel footer.
- description (opzionale): testo descrittivo breve.
- links (opzionale): lista link generici.
- socialLinks (opzionale): lista link social con icona testuale.
- year (opzionale): anno copyright.
- className (opzionale): classe CSS extra.

## 4. Come integrare
1. Importa Footer nel layout principale.
2. Personalizza testi e link tramite props.
3. Usa socialLinks per i pulsanti social del progetto.

## 5. Esempio di utilizzo
```tsx
import Footer from "./Footer/Footer";

const links = [
  { label: "FAQ", href: "/faq" },
  { label: "Termini", href: "/termini" },
  { label: "Assistenza", href: "/assistenza" }
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "f" },
  { label: "Instagram", href: "https://instagram.com", icon: "ig" }
];

export default function Layout() {
  return <Footer links={links} socialLinks={socials} />;
}
```

## 6. Personalizzazione veloce CSS
Variabili principali in Footer.css:
- --cmp-bg
- --cmp-text
- --cmp-accent

## 7. Nota backend Java (opzionale, semplice)
Puoi recuperare link e dati footer da un endpoint Java nel componente padre e passarli via props al Footer.
