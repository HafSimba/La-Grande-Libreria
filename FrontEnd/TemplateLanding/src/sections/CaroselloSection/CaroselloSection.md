CaroselloSection — Guida rapida
================================

Questa guida mostra come creare una section che utilizza il componente `Carosello` già presente nel progetto. Include esempi di codice da incollare direttamente nel file `CaroselloSection.tsx`, suggerimenti per gli asset e per lo stile, e opzioni per il comportamento (autoplay, responsive, lazy load).

Prerequisiti
------------
- Avere il componente `Carosello` disponibile in `src/components/Carosello/Carosello` o percorso equivalente.
- Eventuali immagini da mostrare nella cartella `src/assets` o URL esterni.

1) Struttura minima file
------------------------
Posiziona il file in `src/sections/CaroselloSection/CaroselloSection.tsx` e crea il relativo `CaroselloSection.css`.

Esempio di scheletro (TypeScript):

```tsx
import React from 'react'
import Carosello from '../../components/Carosello/Carosello'
import './CaroselloSection.css'

// Shape usata nella section (minimal)
interface Slide { src: string; alt?: string; caption?: string }

export interface CaroselloSectionProps { slides?: Slide[] }

// Nota: il componente `Carosello` si aspetta oggetti con campi
// `{ imageUrl, title?, description? }`. Qui mappiamo la shape usata
// nella section ({ src, alt, caption }) alla shape richiesta.
export default function CaroselloSection({ slides = [] }: CaroselloSectionProps) {
	const itemsForCarosello = slides.map(s => ({
		imageUrl: s.src,
		title: s.caption ?? s.alt,
		description: s.caption ?? undefined,
	}))

	return (
		<section id="carosello" className="cmp-carosello-section" aria-label="Carosello prodotti">
			<div className="container">
				{/* Passa gli items mappati. Il componente supporta anche autoplay, interval e pauseOnHover */}
				<Carosello items={itemsForCarosello} autoplay={false} pauseOnHover interval={4000} />
			</div>
		</section>
	)
}
```

2) Preparare i dati (slides)
----------------------------
Puoi passare le slide come prop oppure importare immagini locali:

```tsx
import img1 from '../../assets/prod1.jpg'
import img2 from '../../assets/prod2.jpg'

const slides = [
	{ src: img1, alt: 'Prodotto 1', caption: 'Il nostro best seller' },
	{ src: img2, alt: 'Prodotto 2', caption: 'Nuove offerte' },
]

// poi <CaroselloSection slides={slides} /> in App.tsx
```

3) API del componente `Carosello`
--------------------------------
Adatta questi nomi alle props reali del tuo componente `Carosello`. Esempi comuni di props:

- `items` o `slides`: array di oggetti { src, alt, caption }
- `autoplay`: boolean
- `interval`: numero, ms tra slide
- `showDots` / `showArrows`: boolean
- `visible`: numero di elementi visibili (responsive)

Esempio di utilizzo con opzioni:

```tsx
<Carosello items={slides} autoplay interval={4000} showDots showArrows />
```

4) Stile base `CaroselloSection.css`
------------------------------------
Esempio minimale:

```css
.cmp-carosello-section { padding: 2rem 0; background: transparent; }
.cmp-carosello-section .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
.cmp-carosello-slide img { display:block; width:100%; height:auto; border-radius:8px; }
@media (max-width:768px) { .cmp-carosello-section { padding: 1.5rem 0 } }
```

5) Lazy loading e performance
-----------------------------
- Se il carosello contiene molte immagini, attiva `loading="lazy"` sugli `img` interni o usa intersezione `IntersectionObserver` per caricare solo le slide visibili.
- Se il componente supporta il lazy loading via prop, passa `lazy`.

6) Accessibilità
-----------------
- Ogni immagine deve avere `alt` descrittivo.
- Aggiungi `aria-label` alla `section` e `aria-controls`/`aria-live` se necessario per stati dinamici.

7) Esempio completo (inserimento in `App.tsx`)
-----------------------------------------------
```tsx
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CaroselloSection from './sections/CaroselloSection/CaroselloSection'
import Footer from './components/Footer/Footer'

const slides = [
	{ src: '/assets/prod1.jpg', alt: 'Prodotto 1' },
	{ src: '/assets/prod2.jpg', alt: 'Prodotto 2' },
]

function App() {
	return (
		<>
			<Navbar />
			<main id="main-content">
				<CaroselloSection slides={slides} />
			</main>
			<Footer />
		</>
	)
}

export default App
```

8) Debug rapido
---------------
- Se le immagini non appaiono: controlla i percorsi (relative vs absolute) e che le immagini siano incluse nella cartella `src/assets` o `public`.
- Se i controlli del carosello non funzionano: apri la console e verifica eventuali errori o props mancanti.

9) Note avanzate
----------------
- Per layout complessi, passa un render function alle slide: `renderItem: (item) => <CustomCard item={item} />`.
- Per integrazione con dati remoti, fai fetch nella pagina padre e passa i risultati via prop.

Se vuoi, creo il file `CaroselloSection.tsx` con lo scheletro e un `CaroselloSection.css` di base, poi importo automaticamente le immagini di esempio. Dimmi se preferisci che usi immagini locali (`src/assets`) o URL esterni.

