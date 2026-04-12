# Analisi di realizzazione - EsempioSimulazione

## Obiettivo del progetto
La cartella EsempioSimulazione contiene una applicazione full stack composta da:
- frontend React + TypeScript (Vite)
- backend Java Spring Boot con persistenza MySQL

Lo scopo funzionale implementato e la raccolta di proposte scolastiche (contest GreenTech), con:
- invio dei dati da form web
- salvataggio su database
- visualizzazione elenco proposte su pagina dedicata

Nota sul contenuto non codice:
- Documento.pdf e presente nella cartella, ma non e stato possibile estrarne testo in questa sessione per assenza del modulo di parsing PDF nell'ambiente.

## Struttura della cartella

- EsempioSimulazione/
- Documento.pdf
- backend/
  - GreenTechBackEnd/
- frontend/

Nota: nel backend e presente anche una copia annidata del progetto in GreenTechBackEnd/greentechbackend, con file sorgenti identici.

## Backend - come e stato realizzato

### Stack e build
- Linguaggio: Java 21
- Framework: Spring Boot 4.0.5
- Build tool: Maven Wrapper (mvnw)
- Persistenza: Spring Data JPA + MySQL connector
- API docs: springdoc-openapi

File chiave:
- backend/GreenTechBackEnd/pom.xml
- backend/GreenTechBackEnd/src/main/resources/application.properties

### Architettura applicativa
Il backend segue una struttura classica a livelli:

1. Entity
- Classe Registrazione con mapping JPA.
- Campi principali: nomeScuola, grado, provincia, classe, nomeDocente, email, nomeProgetto, descrizione.
- descrizione ha limite DB impostato con @Column(length = 3000).

2. Repository
- RegistrazioneRepository estende JpaRepository<Registrazione, Long>.
- Fornisce CRUD senza implementazione manuale.

3. Service
- RegistrazioneService incapsula la logica applicativa.
- Metodi:
  - registrazione(...) per creare e salvare una nuova entity
  - mostraTutti() per recuperare tutte le registrazioni

4. Controller REST
- RegistrazioneController espone endpoint sotto /registrazione.
- CORS abilitato per frontend locale su http://localhost:5173.
- Endpoint:
  - POST /registrazione/registra (salvataggio)
  - GET /registrazione/mostratutti (lista completa)

### Configurazione dati
application.properties definisce:
- spring.jpa.hibernate.ddl-auto=update
- datasource MySQL su localhost:3306/greentech
- username e password DB dichiarate nel file

### Test
Presente solo test base di bootstrap contesto:
- GreentechbackendApplicationTests.contextLoads()

## Frontend - come e stato realizzato

### Stack e toolchain
- React 19 + TypeScript
- Bundler/dev server: Vite 8
- Routing: react-router (API browser router)
- Lint: ESLint con preset JS/TS + React Hooks

File chiave:
- frontend/package.json
- frontend/vite.config.ts
- frontend/src/main.tsx
- frontend/src/router.tsx

### Organizzazione frontend

1. Entry point
- main.tsx monta RouterProvider sul nodo root.

2. Routing
- Rotta / -> HomePage
- Rotta /proposte -> PropostePage

3. Pagine
- HomePage
  - Navbar
  - Hero
  - sezioni contenuto statico (missione, tecnologie, testimonianze)
  - Form di registrazione
  - Footer
- PropostePage
  - NavbarAlt
  - fetch dati backend
  - rendering elenco proposte
  - Footer

4. Componenti
- Navbar / NavbarAlt per navigazione
- Hero per sezione principale
- Form per raccolta dati utente
- Footer
- Card (presente ma non usata nella pagina proposte)

5. Hook custom
- useForm
  - gestisce stato controllato dei campi
  - su submit invia POST a /registrazione/registra
  - payload inviato come application/x-www-form-urlencoded
- useApi
  - esegue fetch GET su URL passato
  - salva risultato in state e lo ritorna al chiamante

### Stile UI
- styles.css contiene un tema Bootstrap/Freelancer esteso
- Card.css contiene stile locale per Card
- La maggior parte del layout usa classi Bootstrap-like (container, row, col, navbar, ecc.)

## Flusso end-to-end implementato

1. Utente apre HomePage.
2. Compila il modulo di registrazione.
3. Form invia POST verso backend locale (porta 8080).
4. Backend crea entity Registrazione e salva su MySQL.
5. Utente apre pagina Proposte.
6. Frontend invia GET /registrazione/mostratutti.
7. Backend restituisce lista JSON.
8. Frontend renderizza le proposte in pagina.

## Come avviare il progetto (locale)

### Backend
- Posizionarsi in backend/GreenTechBackEnd
- Avvio con Maven Wrapper: mvnw spring-boot:run (Windows: mvnw.cmd spring-boot:run)
- Verificare connessione MySQL e database greentech

### Frontend
- Posizionarsi in frontend
- Installare dipendenze: npm install oppure pnpm install
- Avvio sviluppo: npm run dev (o pnpm dev)
- Frontend disponibile su porta Vite (tipicamente 5173)

## Osservazioni tecniche rilevate

1. Duplicazione progetto backend
- Esistono due copie dei sorgenti backend:
  - GreenTechBackEnd/src/...
  - GreenTechBackEnd/greentechbackend/src/...
- I file principali confrontati risultano identici.

2. File di build versionati
- Sono presenti directory target/ nel repository backend (artefatti compilati).

3. Configurazioni hardcoded
- URL backend nel frontend hardcoded su localhost:8080.
- CORS backend hardcoded su localhost:5173.
- Credenziali DB in chiaro in application.properties.

4. Qualita codice e robustezza
- Test backend minimi (solo context load).
- Gestione errori frontend limitata (console.error nel fetch).
- Validazione backend essenziale (size su descrizione).

5. Allineamento tipi frontend
- useApi usa il tipo Proposta ma non lo importa esplicitamente nel file hook.

## Conclusione
Il progetto e stato realizzato come una soluzione didattica full stack semplice e lineare, con separazione frontend/backend chiara e integrazione REST funzionante per il caso d'uso principale (registrazione e visualizzazione proposte). La base e buona per esercitazione, mentre per un uso production andrebbero rafforzati sicurezza, configurazione, test e struttura repository.