Tutorial rapido — Template Landing
=================================

Questa guida mostra i passaggi per inizializzare il progetto, pulire i file base e integrare i componenti (Navbar, HeroSection, Footer) all'interno del template `TemplateLanding`.

Prerequisiti
------------
- Node.js installato (consigliato: LTS recente)
- npm disponibile

1) Creare il progetto (solo se parti da zero)
------------------------------------------
Per creare un nuovo progetto Vite + React:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

Nel nostro template `TemplateLanding` questo passaggio e gia stato fatto.

2) Pulire `App.tsx`
--------------------
Mantieni `App.tsx` minimale: elimina markup specifico del template d'esempio e lascia solo lo scheletro.

Esempio consigliato (`src/App.tsx`):

```tsx
import React from 'react'
import './App.css' // opzionale

function App() {
  return (
    <>
    </>
  )
}

export default App
```

3) Pulire `App.css`
-------------------
Lascia solo reset e regole base utili al layout globale. Ecco un esempio minimo da usare come base (`src/App.css`):

```css
/* App global styles — minimale e pulito */
* { box-sizing: border-box; }
html, body, #root { height: 100%; }
body { margin: 0; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #111827; background: #ffffff; }
#main-content { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; height: auto; display: block; }
@media (max-width: 768px) { #main-content { padding: 1.5rem; } }
```

4) Aggiungere componenti (es. `Navbar`)
---------------------------------------
Puoi copiare i componenti da `FrontEnd/Componenti` nella cartella del progetto `TemplateLanding/src/components` oppure importarli direttamente se preferisci una struttura condivisa.

Assicurati che i file TSX e CSS usino nomi coerenti (es. `Navbar.tsx` importa `Navbar.css`, non `componente.css`).

Esempio di import in `App.tsx`:

```tsx
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content"></main>
    </>
  )
}

export default App
```

5) Aggiungere il `Footer`
-------------------------
Importa e monta il `Footer` dopo il `main`:

```tsx
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content"></main>
      <Footer />
    </>
  )
}
```

6) Inserire sezioni del body (es. `HeroSection`)
-----------------------------------------------
Verifica che il componente `HeroSection` abbia l'`export default` singolo e importi il CSS corretto (es. `HeroSection.css`). Nel repository abbiamo corretto due problemi comuni:

- `HeroSection.tsx` importava `componente.css` invece del file reale `HeroSection.css`
- c'era un `export default` duplicato che generava errore

Import e uso in `App.tsx`:

```tsx
import HeroSection from './sections/HeroSection/HeroSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  )
}
```

Consigli pratici e debugging
----------------------------
- Se vedi errori di import CSS, controlla il nome del file e il percorso relativi.
- Errori di `export` spesso indicano duplicati o sintassi sbagliata nel file (rimuovi export ripetuti).
- Se il dev server non parte: esegui `npm install` e poi `npm run dev` nella cartella giusta (`FrontEnd/TemplateLanding`).

Comandi utili per il progetto `TemplateLanding`:

```bash
cd FrontEnd/TemplateLanding
npm install
npm run dev
```

Se vuoi, posso:
- avviare il dev server e controllare i log per altri errori;
- copiare automaticamente i componenti da `FrontEnd/Componenti` in `TemplateLanding/src/components` e correggere i riferimenti CSS.

Fine del tutorial — se vuoi che riscriva in formato markdown con più esempi o che applichi copiaincolla automatico, dimmi quale opzione preferisci.

1) inizializzazione con npm create vite@latest
2) pulizia del progetto base di App.tsx , deve avere questo aspetto iniziale:
import React from 'react'
import './App.css' // opzionale

function App() {
  return (
    <>
    </>
  )
}

export default App

- il css invece deve essere pulito fino ad essere:

/* App global styles — minimale e pulito */
* {
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #111827;
  background: #ffffff;
}

/* Layout principale */
#main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Helper */
a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Piccoli utilitari usati nel template */
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
}

/* Media defaults */
@media (max-width: 768px) {
  #main-content {
    padding: 1.5rem;
  }
}


3) inserimento dei componenti. esempio navbar:
prendi i file tsx e css dalla cartella FrontEnd\Componenti e inseriscili nella cartella components del progetto react.

poi importali dentro il file App.tsx nel seguente modo:
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content"></main>
    </>
  )
}

export default App

4) inserimento del Footer 
inserisci il tag <Footer />
nell'ordine corretto.
esempio: 
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content"></main>
      <Footer />
    </>
  )
}

export default App

5) inseriampo le sezioni del body e i contenuti:
partiamo da hero section 

assicurati gli import corretti all'interno del file componente 
per esempio in questo vi era il css riferito in malomodo.

dopo di che inseriscilo come le altre sezioni precedenti nel file App.tsx  

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'
import './sections/HeroSection/HeroSection'
import HeroSection from './sections/HeroSection/HeroSection'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  )
}

export default App



