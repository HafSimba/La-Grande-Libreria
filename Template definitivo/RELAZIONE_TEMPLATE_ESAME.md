# Relazione tecnica - Template progetto esame

## Nota di personalizzazione

Questo documento e una base modificabile per la relazione finale d'esame. Le parti indicate con `CUSTOM` possono essere aggiornate in base alla traccia ricevuta, al nome del progetto, ai contenuti grafici e alle funzionalita effettivamente mantenute nella consegna.

Il progetto e stato sviluppato come template full stack riutilizzabile, pensato per essere adattato rapidamente a tracce diverse mantenendo una struttura semplice e coerente tra frontend e backend.

## Flusso di navigazione

Il flusso principale del progetto parte dalla landing page disponibile alla rotta `/`.

La pagina iniziale presenta una navigazione superiore che consente di raggiungere rapidamente le sezioni principali della pagina tramite link ad ancora. Il visitatore puo consultare la sezione introduttiva, leggere i contenuti descrittivi, visualizzare le card informative e compilare il modulo di invio dati.

Nel template e presente anche una pagina dedicata alla visualizzazione dei dati ricevuti dal backend, raggiungibile tramite la rotta `/contatti`. Questa pagina usa una navbar alternativa per tornare alla home e mostra gli elementi salvati nel database.

E inoltre presente un modulo opzionale per casi d'esame piu articolati, basato su inserimento, listaggio e filtro di elementi. Nel template questo modulo e rappresentato dalla sezione `StudentiVotiSection`, che permette di inserire nominativi di studenti, materia, voto e classe, visualizzarli in lista e filtrarli per materia e classe.

CUSTOM: se la traccia richiede un dominio diverso, sostituire "contatti", "studenti", "voti", "materie" e "classi" con i nomi coerenti con il progetto, ad esempio eventi, prodotti, donazioni, proposte o prenotazioni.

## Struttura sezioni e organizzazione pagine

Il frontend e organizzato con una struttura semplice, simile al progetto di riferimento usato durante il corso.

La cartella `src/pages` contiene le pagine principali:

- `HomePage.tsx`: pagina principale della landing.
- `ContattiPage.tsx`: pagina dedicata al listaggio dei dati ricevuti dal backend.

La cartella `src/components` contiene i componenti dell'interfaccia:

- `Navbar.tsx`: navigazione principale della landing.
- `NavbarAlt.tsx`: navigazione semplificata per pagine secondarie.
- `Hero.tsx`: sezione iniziale con immagine e call to action.
- `Cards.tsx`: gruppo di card informative personalizzabili.
- `Form.tsx`: modulo base per invio dati al backend.
- `Footer.tsx`: chiusura della pagina.
- `StudentiVotiSection.tsx`: sezione opzionale completa con form, lista e filtro.

La cartella `src/hooks` contiene la logica di stato e comunicazione:

- `useForm.ts`: gestione del form base e invio POST al backend.
- `useApi.ts`: gestione di una chiamata GET per recuperare liste di dati.
- `useStudentiVoti.ts`: gestione completa del modulo opzionale con inserimento, lettura e filtro.

La cartella `src/types` contiene i tipi TypeScript:

- `Contatto.ts`: tipo usato per i dati del form base.
- `StudenteVoto.ts`: tipo usato per il modulo opzionale studenti/voti.

La navigazione e definita in `src/router.tsx`, dove sono registrate le rotte principali del progetto. Il file `src/main.tsx` monta il `RouterProvider`, seguendo il pattern React Router.

CUSTOM: durante l'esame e possibile rimuovere le sezioni non richieste togliendo l'import e il tag dalla `HomePage.tsx`. Per esempio, se non serve il modulo studenti/voti, rimuovere `<StudentiVotiSection />` e relativo import.

## Componenti interfaccia utente

L'interfaccia e stata divisa in componenti semplici e riutilizzabili.

La `Navbar` contiene i collegamenti alle sezioni della landing e alla pagina di visualizzazione dati. La `Hero` contiene il messaggio principale e una call to action che porta al form. Il componente `Cards` permette di presentare informazioni, servizi, funzionalita o elementi in evidenza. Il componente `Form` contiene input controllati collegati all'hook `useForm`.

La sezione `StudentiVotiSection` e stata costruita come blocco autonomo. Contiene:

- un form per inserire dati;
- una lista degli elementi salvati;
- un form di filtro;
- un pulsante per ricaricare tutti gli elementi.

Questa scelta consente di mantenere il codice modulare: se la traccia richiede soltanto un form semplice, la sezione opzionale puo essere esclusa; se invece richiede gestione dati piu completa, la sezione puo essere personalizzata modificando campi, label, endpoint e tipo dati.

Lo stile principale e contenuto in `src/index.css`, con classi generiche come `page-section`, `container`, `cards`, `form`, `list` e `button`, in modo da rendere l'interfaccia facilmente adattabile senza modificare la logica applicativa.

CUSTOM: aggiornare testi, label, placeholder e contenuti delle card in base alla traccia. Se serve un layout diverso, modificare prima i componenti e poi rifinire il CSS.

## Tecnologie utilizzate per frontend e backend

### Frontend

Il frontend e stato sviluppato con:

- React;
- TypeScript;
- Vite;
- React Router;
- CSS;
- Fetch API nativa.

React e TypeScript sono stati usati per creare componenti tipizzati e mantenere una struttura chiara. Vite e stato usato come ambiente di sviluppo e build. React Router gestisce la navigazione tra home e pagine secondarie. Le chiamate HTTP sono state realizzate con `fetch`, senza introdurre librerie esterne, per mantenere il codice semplice e coerente con il percorso del corso.

### Backend

Il backend e stato sviluppato con:

- Java;
- Spring Boot;
- Maven;
- Spring Web MVC;
- Spring Data JPA;
- MySQL;
- Lombok;
- SpringDoc OpenAPI.

Spring Web MVC espone gli endpoint REST. Spring Data JPA gestisce la persistenza su database. MySQL e il database previsto dalla configurazione. Lombok riduce il codice ripetitivo nelle entity. SpringDoc permette di consultare e testare gli endpoint tramite Swagger UI.

## Descrizione attivita svolte

### Sviluppo frontend

Il frontend e stato organizzato secondo una struttura a cartelle semplice: `components`, `pages`, `hooks` e `types`.

In `main.tsx` e stato configurato il montaggio dell'applicazione tramite `RouterProvider`. In `router.tsx` sono state definite le rotte principali: la home `/` e la pagina secondaria `/contatti`.

La `HomePage` assembla le sezioni principali della landing: navbar, hero, sezione descrittiva, card informative, form e footer. Ogni sezione e stata costruita tramite componenti separati, cosi da poter essere rimossa o modificata rapidamente in base alla traccia.

Il form base e stato sviluppato con campi controllati. La logica di stato e invio e contenuta in `useForm.ts`, dove ogni campo ha il proprio `useState` e il proprio handler. Al submit, i dati vengono trasformati in `URLSearchParams` e inviati al backend con content type `application/x-www-form-urlencoded`.

Per la lettura dei dati e stato creato `useApi.ts`, un hook che effettua una richiesta GET e salva il risultato in uno stato React. La pagina `ContattiPage` usa questo hook per mostrare gli elementi salvati.

E stata poi aggiunta una sezione opzionale `StudentiVotiSection`, pensata per tracce che richiedono sia inserimento dati sia visualizzazione degli elementi salvati nel database. La logica della sezione e isolata in `useStudentiVoti.ts`, mentre il tipo dati e definito in `StudenteVoto.ts`.

CUSTOM: dopo aver ricevuto la traccia, aggiornare i nomi dei campi, i testi visualizzati e gli endpoint nei file frontend interessati.

### Sviluppo backend

Il backend e stato organizzato secondo il pattern a livelli:

- entity;
- repository;
- service;
- controller REST.

Per il modulo base sono presenti:

- `Contatto.java`;
- `ContattoRepository.java`;
- `ContattoService.java`;
- `ContattoController.java`.

L'entity rappresenta i dati da salvare. Il repository estende `JpaRepository` e fornisce le operazioni base di persistenza. Il service crea l'oggetto e lo salva tramite repository. Il controller espone gli endpoint REST per l'inserimento e la lettura dei dati.

Per il modulo opzionale studenti/voti sono stati creati file separati:

- `StudenteVoto.java`;
- `StudenteVotoRepository.java`;
- `StudenteVotoService.java`;
- `StudenteVotoController.java`.

Questi file permettono di gestire un caso piu completo: inserimento dati, lettura completa e filtro. Il controller espone endpoint separati sotto `/studenti-voti`, mantenendo indipendente questo modulo dal form base.

Gli endpoint POST ricevono dati tramite `@RequestParam`, in coerenza con l'invio frontend tramite `URLSearchParams`. Gli endpoint GET restituiscono liste JSON che vengono poi lette dal frontend.

CUSTOM: se la traccia richiede un dominio diverso, duplicare o rinominare il modulo piu simile, aggiornando entity, repository, service, controller, tipo frontend, hook e componente UI.

## Istruzioni per avviare il progetto

### Avvio backend

Aprire un terminale nella cartella:

```powershell
cd "Template definitivo/backend"
```

Avviare il backend:

```powershell
.\mvnw.cmd spring-boot:run
```

In alternativa, se il Maven Wrapper non parte nell'ambiente locale, usare Maven installato o il Maven gia disponibile nella cache del wrapper.

Il backend viene avviato su:

```text
http://localhost:8080
```

Swagger UI e disponibile su:

```text
http://localhost:8080/swagger-ui.html
```

### Avvio frontend

Aprire un terminale nella cartella:

```powershell
cd "Template definitivo/FrontEnd"
```

Installare le dipendenze se necessario:

```powershell
npm install
```

Avviare il frontend:

```powershell
npm run dev
```

Il frontend Vite viene avviato normalmente su:

```text
http://localhost:5173
```

## Indicazioni per testare il servizio

Per testare il modulo base:

1. Avviare backend e frontend.
2. Aprire `http://localhost:5173`.
3. Compilare il form presente nella landing.
4. Inviare i dati.
5. Aprire la pagina `/contatti`.
6. Verificare che i dati inseriti vengano mostrati nella lista.

Endpoint coinvolti:

```text
POST http://localhost:8080/contatti/invia
GET  http://localhost:8080/contatti/tutti
```

Per testare il modulo opzionale studenti/voti:

1. Aprire la home.
2. Raggiungere la sezione studenti/voti.
3. Inserire nome studente, materia, voto e classe.
4. Verificare che il nuovo elemento venga aggiunto alla lista.
5. Usare i campi filtro per cercare per materia o classe.
6. Premere "Mostra tutti" per ricaricare l'elenco completo.

Endpoint coinvolti:

```text
POST http://localhost:8080/studenti-voti/inserisci
GET  http://localhost:8080/studenti-voti/tutti
GET  http://localhost:8080/studenti-voti/filtra?materia=...&classe=...
```

Verifiche tecniche consigliate:

Frontend:

```powershell
npm run build
npm run lint
```

Backend:

```powershell
.\mvnw.cmd test
```

CUSTOM: nella relazione finale indicare solo gli endpoint e i moduli effettivamente mantenuti nella consegna. Se una sezione opzionale viene rimossa, eliminare anche il relativo paragrafo dalla relazione.

