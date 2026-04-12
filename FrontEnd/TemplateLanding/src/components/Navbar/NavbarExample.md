# Navbar - Guida rapida

## 1) A cosa serve
Il componente Navbar e la "bussola" del sito: rimane quasi sempre fisso in alto e serve a dare all'utente un punto di riferimento costante per spostarsi tra le macro-aree del sito.

## 2) Props principali
- `brand` (opzionale): nome o logo testo della brand
- `brandImage` (opzionale): URL immagine logo
- `links` (opzionale): array di link con `label` e `href`
- `sticky` (opzionale): se vera, la navbar rimane fissa in alto durante lo scroll
- `rightContent` (opzionale): elemento React a destra (login, carrello, etc)
- `className` (opzionale): classe CSS custom

## 3) Come integrare
1. Copia `componente.tsx` e `componente.css` nel progetto.
2. Importa Navbar nel layout principale.
3. Passa brand, links e opzionalmente rightContent.

## 4) Esempio di utilizzo
```tsx
import React from 'react';
import Navbar from './FrontEnd/Componenti/Navbar/componente';

export default function Layout() {
  return (
    <>
      <Navbar
        brand="La Grande Libreria"
        brandImage="/logo.svg"
        sticky
        links={[
          { label: 'Home', href: '/' },
          { label: 'Catalogo', href: '/catalogo' },
          { label: 'Chi Siamo', href: '/chi-siamo' },
          { label: 'Contatti', href: '/contatti' },
        ]}
        rightContent={
          <a href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            Login
          </a>
        }
      />

      <main style={{ padding: '2rem' }}>
        Contenuto principale della pagina
      </main>
    </>
  );
}
```

## 5) Personalizzazione veloce CSS
Modifica le variabili in alto in `componente.css`:
- `--cmp-bg`
- `--cmp-text`
- `--cmp-accent`
- `--cmp-border`

## 6) Nota backend Java (opzionale)
Se i link vengono da backend Java, fai fetch nella pagina padre e passa i dati nella prop `links`.

## Assunzioni (dati mancanti)
- `requiredProps` non specificate: il componente include link di default.
- `optionalProps` non specificate: mantenute solo opzioni essenziali.
- Nessuna libreria esterna richiesta.

## 7) Navigazione verso sezioni della stessa pagina (anchor navigation)

Se vuoi che, cliccando su una voce di navigazione, la pagina si sposti alla sezione corrispondente (es. #hero, #catalogo), segui questi passaggi:

- Assegna un `id` agli elementi/alle sezioni target nel tuo layout, ad esempio in `App.tsx` o nei singoli componenti:

```tsx
// in App.tsx
<main id="main-content">
  <section id="hero">...</section>
  <section id="catalogo">...</section>
  <section id="contatti">...</section>
</main>
```

- Nei link passati a `Navbar` usa anchor href che puntano a questi id:

```ts
links={[
  { label: 'Home', href: '#hero' },
  { label: 'Catalogo', href: '#catalogo' },
  { label: 'Contatti', href: '#contatti' },
]}
```

- Metodo semplice (CSS): abilita lo smooth scrolling globale aggiungendo in `App.css`:

```css
html { scroll-behavior: smooth; }
```

- Metodo JS (più controllo, utile se vuoi chiudere menu mobile prima di scroll): modifica la callback `onClick` del link in `Navbar.tsx` per intercettare gli href che iniziano con `#` e usare `scrollIntoView`:

```tsx
// Implementato direttamente in `Navbar.tsx` (gestione anchor e chiusura menu mobile)
<a
  href={link.href}
  className="cmp-navbar-link"
  onClick={(e) => {
    // chiudi il menu mobile sempre
    setMobileOpen(false);
    // se è un anchor locale, gestiamo lo scroll in-page
    if (link.href && link.href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(link.href) as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }}
>
  {link.label}
</a>
```

- Nota su SPA / React Router: se usi React Router o un router client-side, la navigazione tramite `href="#id"` funziona solo se non viene gestita dal router. In caso di router, passa gli anchor handler nella pagina padre o utilizza `useNavigate()` e `scrollIntoView` dopo il cambio di route.

### Controlli e debug

- Se il click ricarica la pagina, assicurati che l'href inizi con `#` e non punti a una route esistente.
- Se lo smooth scroll non funziona, verifica che non ci siano elementi con `scroll-behavior` sovrascritti o che il contenitore scrollabile non sia diverso da `document.documentElement`.

Con queste semplici modifiche, la `Navbar` diventerà uno strumento di navigazione fluido all'interno della pagina.
