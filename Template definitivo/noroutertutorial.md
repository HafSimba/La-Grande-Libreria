Tutorial: trasformare il template in una landing page senza React Router

Obiettivo

Questo tutorial spiega come modificare il template attuale nel caso in cui la traccia d'esame richieda soltanto una landing page, senza pagine separate, senza login, senza area admin e senza React Router.

L'obiettivo e ottenere un frontend piu semplice, dove il file main.tsx carica direttamente HomePage.tsx.


Step 1: modificare main.tsx

File da modificare:

src/main.tsx

Attualmente il progetto usa RouterProvider e importa router.tsx.

Per una landing page singola bisogna rimuovere React Router dal punto di ingresso dell'app e renderizzare direttamente HomePage.

Sostituire il contenuto di main.tsx con:

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './pages/HomePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)

Risultato:

L'app non usa piu router.tsx e apre direttamente la landing page.


Step 2: rimuovere router.tsx

File da eliminare o ignorare:

src/router.tsx

Questo file serve solo quando il progetto ha piu pagine, per esempio:

1. Home
2. Login
3. Admin

Se la traccia richiede solo una landing page, router.tsx non serve piu.


Step 3: pulire Navbar.tsx

File da modificare:

src/components/Navbar.tsx

La navbar attuale contiene anche la logica per andare alla pagina login tramite useNavigate.

In una landing page senza React Router, la navbar deve usare solo link interni alla pagina, per esempio:

1. #hero
2. #chi-siamo
3. #servizi
4. #form
5. #dati-database, solo se tieni la sezione che mostra dati dal database

Rimuovere questa importazione:

import { useNavigate } from 'react-router'

Rimuovere questa logica:

const navigate = useNavigate()

const handleLogin = () => {
    navigate('/login')
}

Rimuovere anche il link Login:

<li>
    <a className="landing-navbar__link" onClick={handleLogin}>
        Login
    </a>
</li>

Risultato:

La navbar resta semplice e naviga soltanto tra sezioni della stessa pagina.


Step 4: eliminare la pagina LoginPage

File da eliminare o ignorare:

src/pages/LoginPage.tsx

Questa pagina serve solo se la traccia richiede registrazione utente o accesso admin.

Se la traccia richiede soltanto una landing page pubblica, LoginPage.tsx non serve.


Step 5: eliminare la pagina AdminPage

File da eliminare o ignorare:

src/pages/AdminPage.tsx

Questa pagina serve solo se vuoi visualizzare i dati inseriti dal form in un'area admin separata.

Se la traccia richiede solo una landing page, AdminPage.tsx non serve.

Attenzione:

Se invece la traccia richiede di mostrare i dati inseriti direttamente nella landing, puoi eliminare AdminPage ma tenere DatabaseCardsSection.


Step 6: eliminare NavbarAlt

File da eliminare o ignorare:

src/components/NavbarAlt.tsx
src/components/NavbarAlt.css

NavbarAlt viene usata nelle pagine interne, come login e admin.

Se non esistono pagine interne, questo componente non serve piu.


Step 7: eliminare LoginForm e useLogin

File da eliminare o ignorare:

src/components/LoginForm.tsx
src/hooks/useLogin.ts

Questi file servono per registrazione e login.

Se la traccia non richiede autenticazione, possono essere rimossi.


Step 8: decidere se tenere il form pubblico

File coinvolti:

src/sections/ContactFormSection.tsx
src/components/Form.tsx
src/components/Form.css
src/hooks/useForm.ts

Se la landing deve solo presentare contenuti statici, puoi rimuovere ContactFormSection da HomePage.

In HomePage.tsx rimuovere:

import { ContactFormSection } from '../sections/ContactFormSection'

e rimuovere:

<ContactFormSection />

Se invece la traccia richiede un form pubblico collegato al backend, devi tenere questi file.


Step 9: decidere se tenere le card generate dal database

File coinvolti:

src/sections/DatabaseCardsSection.tsx
src/components/DatabaseCards.tsx
src/hooks/useApi.ts
src/types/Contatto.ts

Se la traccia richiede soltanto una landing statica, rimuovere DatabaseCardsSection da HomePage.

In HomePage.tsx rimuovere:

import { DatabaseCardsSection } from '../sections/DatabaseCardsSection'

e rimuovere:

<DatabaseCardsSection />

Se invece la traccia richiede di mostrare nella landing i dati salvati nel database, puoi tenere questa sezione anche senza React Router.

In questo caso il flusso resta:

1. Form invia i dati al backend
2. Backend salva i dati nel database
3. DatabaseCardsSection legge i dati con useApi
4. DatabaseCards mostra i dati in card


Step 10: sistemare HomePage.tsx

File da modificare:

src/pages/HomePage.tsx

HomePage deve rimanere il file che assembla la landing.

Esempio di landing semplice con form:

<>
  <Navbar />
  <HeroSection />
  <InfoSection />
  <CardsSection />
  <ContactFormSection />
  <Footer />
</>

Esempio di landing statica senza form:

<>
  <Navbar />
  <HeroSection />
  <InfoSection />
  <CardsSection />
  <Footer />
</>

Esempio di landing con form e dati dal database:

<>
  <Navbar />
  <HeroSection />
  <InfoSection />
  <CardsSection />
  <ContactFormSection />
  <DatabaseCardsSection />
  <Footer />
</>


Step 11: backend

Se la landing e completamente statica, il backend puo non essere usato.

In questo caso puoi ignorare la cartella backend.

Se invece la landing contiene un form, devi tenere i file backend collegati a Contatto:

backend/Contatto.java
backend/ContattoRepository.java
backend/ContattoService.java
backend/rest/ContattoController.java

Se la traccia non richiede login o utenti, puoi ignorare o rimuovere:

backend/Utente.java
backend/UtenteRepository.java
backend/UtenteService.java
backend/rest/UtenteController.java


Step 12: controllare package.json

File da controllare:

package.json

Se vuoi rimuovere completamente React Router dal progetto, puoi togliere la dipendenza react-router solo dopo aver eliminato tutti gli import collegati.

Comando possibile:

npm uninstall react-router

Questa operazione non e obbligatoria durante l'esame.

Se hai poco tempo, puoi lasciare la dipendenza installata anche se non viene usata.


Step 13: eseguire i controlli

Dopo le modifiche, aprire il terminale nella cartella FrontEnd:

cd "Template definitivo/FrontEnd"

Eseguire:

npm run lint

Poi:

npm run build

Se entrambi passano, la landing senza React Router e pronta.


Riepilogo rapido

Per togliere React Router devi:

1. Modificare main.tsx e renderizzare direttamente HomePage
2. Rimuovere router.tsx
3. Pulire Navbar.tsx da useNavigate e Login
4. Rimuovere LoginPage e AdminPage
5. Rimuovere NavbarAlt
6. Rimuovere LoginForm e useLogin
7. Decidere se tenere form e database cards
8. Controllare HomePage
9. Lanciare npm run lint e npm run build


Nota per l'esame

La scelta dipende dalla traccia:

1. Landing statica: tieni solo sezioni visuali e footer.
2. Landing con form: tieni ContactFormSection, Form, useForm e backend Contatto.
3. Landing con form e listaggio dati: tieni anche DatabaseCardsSection, DatabaseCards, useApi e Contatto.ts.
4. Progetto con login/admin: mantieni React Router, LoginPage, AdminPage, NavbarAlt, LoginForm e useLogin.
