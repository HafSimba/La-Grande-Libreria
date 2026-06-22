# Relazione tecnica v2

## Documento tecnico personalizzabile per prova d'esame

**Progetto:** Template full stack personalizzabile  
**Stack:** React, TypeScript, Vite, Spring Boot, Spring Data JPA, MySQL  
**Obiettivo della documentazione:** descrivere in modo chiaro lo stack tecnologico, l'architettura e le scelte progettuali adottate, mantenendo il documento pronto per essere adattato rapidamente alla traccia assegnata in sede d'esame.

> Nota di personalizzazione: in questa relazione il dominio applicativo viene indicato in modo generico come `Contatto`. Durante l'esame potra essere sostituito con il dominio richiesto dalla traccia, per esempio `Evento`, `Prodotto`, `Donazione`, `Prenotazione`, `Candidatura`, `Segnalazione` o simili.

---

## 1. Introduzione e architettura generale

Il progetto e stato realizzato come applicazione full stack separata in due parti principali: un frontend sviluppato con React e TypeScript e un backend sviluppato con Java e Spring Boot. La scelta di separare frontend e backend permette di mantenere responsabilita chiare: l'interfaccia utente si occupa della presentazione e dell'interazione, mentre il server gestisce logica applicativa, persistenza e API.

La struttura e pensata per essere riutilizzabile in sede d'esame. Il progetto non nasce per un solo caso d'uso fisso, ma come base tecnica adattabile a diverse tracce. Per questo motivo molti testi del frontend sono volutamente generici e i file contengono commenti `CUSTOM ESAME`, utili per capire rapidamente quali parti modificare.

L'architettura adottata e di tipo client/server:

- **Client React:** mostra landing page, form, contenuti informativi, login e area admin.
- **Backend Spring Boot:** espone endpoint REST per ricevere, salvare e restituire dati.
- **Database MySQL:** conserva in modo persistente i dati inviati dagli utenti.
- **Comunicazione HTTP:** il frontend invia richieste al backend tramite `fetch`.
- **Routing frontend:** React Router gestisce la navigazione tra home, login e admin.

La regola centrale del template e:

```text
campo React = chiave URLSearchParams = @RequestParam Spring = campo Entity Java
```

Questa scelta semplifica molto la personalizzazione. Se la traccia richiede un campo `titoloEvento`, quel nome deve essere usato nel form React, nel payload, nel controller Spring e nell'entity Java. In questo modo il flusso dati resta lineare e facile da spiegare.

---

## 2. Stack tecnologico e motivazione delle scelte

### Frontend

Per il frontend sono stati scelti **React**, **TypeScript** e **Vite**.

React e stato scelto perche consente di costruire l'interfaccia tramite componenti riutilizzabili. Questo e particolarmente utile in un template d'esame: sezioni come navbar, hero, card, form e footer possono essere modificate singolarmente senza riscrivere tutta la pagina.

TypeScript aggiunge un livello di controllo sui dati. Il tipo `Contatto`, per esempio, descrive la struttura dei dati ricevuti dal backend. In sede d'esame questo tipo puo essere aggiornato con i campi richiesti dalla traccia, riducendo errori tra frontend e backend.

Vite e stato scelto perche permette avvio rapido, hot reload e build semplice. In un contesto d'esame e utile perche riduce i tempi di configurazione e consente di concentrarsi sulla personalizzazione del progetto.

React Router gestisce le rotte principali:

- `/`, per la landing page;
- `/login`, per registrazione e accesso;
- `/admin`, per la visualizzazione dei dati ricevuti.

La comunicazione con il backend usa la Fetch API. Non sono state introdotte librerie esterne per le chiamate HTTP, cosi il codice resta semplice, leggibile e facilmente spiegabile.

### Backend

Per il backend sono stati scelti **Java**, **Spring Boot**, **Spring Web MVC**, **Spring Data JPA** e **Maven**.

Spring Boot permette di creare velocemente un backend REST con configurazione ridotta. Spring Web MVC viene usato per definire i controller e gli endpoint. Spring Data JPA semplifica l'interazione con il database, evitando di scrivere manualmente query SQL per le operazioni base.

Il backend segue una struttura a livelli:

- **Entity**, per rappresentare le tabelle del database;
- **Repository**, per accedere ai dati;
- **Service**, per contenere la logica applicativa;
- **Controller**, per esporre gli endpoint REST.

Questa organizzazione rende il codice piu ordinato e adatto alla personalizzazione. Se la traccia cambia dominio, si puo mantenere la stessa architettura sostituendo campi, nomi e endpoint.

### Database

Il database scelto e **MySQL**, collegato al backend tramite Spring Data JPA. MySQL e una scelta adatta a un progetto d'esame perche consente di dimostrare persistenza reale dei dati e integrazione completa tra frontend, backend e database.

La configurazione usa:

```properties
spring.jpa.hibernate.ddl-auto=update
```

Questa opzione e utile in sviluppo per aggiornare automaticamente lo schema in base alle entity Java. In un progetto di produzione si valuterebbero strategie piu controllate, ma per una prova pratica consente di lavorare rapidamente.

### Documentazione API

Il backend include SpringDoc OpenAPI, che permette di consultare gli endpoint tramite Swagger UI. Questa scelta rende piu semplice testare manualmente le API e dimostrare il funzionamento del backend durante la consegna.

---

## 3. Struttura generale del progetto

Il progetto e diviso in due cartelle principali:

```text
Template definitivo/
  FrontEnd/
  backend/
```

La cartella `FrontEnd` contiene l'applicazione React. La cartella `backend` contiene l'applicazione Spring Boot.

Oltre al codice, sono presenti file di supporto alla personalizzazione:

- `RELAZIONE_TEMPLATE_ESAME.md`, relazione base precedente;
- `TUTORIAL_CUSTOMIZZAZIONE_ESAME.md`, guida pratica per modificare campi, testi ed endpoint;
- `REGOLE_PATTERN_AI.md`, regole per mantenere coerenza nella generazione del progetto;
- `noroutertutorial.md`, riferimento per una variante senza routing.

Questa organizzazione rende il template adatto sia allo sviluppo sia alla spiegazione tecnica: ogni parte ha un ruolo chiaro e puo essere aggiornata senza compromettere il resto del progetto.

---

## 4. Flusso di navigazione previsto

Il flusso di navigazione e pensato per adattarsi a molte tracce d'esame basate su un mini-portale web.

### Home page

La home page e composta da sezioni indipendenti:

- hero iniziale con titolo, sottotitolo e call to action;
- sezione informativa per descrivere il progetto;
- sezione card per servizi, vantaggi, prodotti, eventi o contenuti in evidenza;
- form pubblico per raccogliere dati dall'utente;
- sezione di visualizzazione dati provenienti dal database;
- footer con link e descrizione sintetica.

Durante l'esame, questa struttura puo essere adattata cambiando testi, immagini e ordine delle sezioni. Se la traccia richiede una sezione aggiuntiva, e sufficiente creare un nuovo file in `src/sections` e importarlo nella `HomePage`.

### Form pubblico

Il form rappresenta il punto principale di interazione tra utente e applicazione. Nel template attuale raccoglie:

- nome;
- email;
- telefono;
- messaggio.

Questi campi sono volutamente generici. A seconda della traccia possono diventare, per esempio:

- titolo evento, data, luogo, descrizione;
- nome prodotto, categoria, prezzo, descrizione;
- nome associazione, referente, email, proposta;
- nome utente, servizio richiesto, note, recapito.

Il form invia i dati al backend con una richiesta `POST`, mostrando poi un feedback di successo o errore.

### Login e area admin

Il template include una pagina login con due blocchi:

- registrazione utente;
- accesso admin.

Dopo il login corretto, l'utente viene portato alla pagina admin, dove vengono visualizzati i dati raccolti dal form. Questa area puo essere mantenuta se la traccia richiede una parte gestionale, oppure rimossa se non necessaria.

---

## 5. Struttura del frontend

Il frontend e stato organizzato distinguendo pagine, sezioni, componenti, hook e tipi.

### Pagine

Le pagine principali sono:

- `HomePage.tsx`, che assembla la landing page;
- `LoginPage.tsx`, che contiene registrazione e accesso;
- `AdminPage.tsx`, che mostra i dati ricevuti.

La configurazione delle rotte si trova in `router.tsx`.

### Sezioni

Le sezioni si trovano in `src/sections`:

- `HeroSection.tsx`;
- `InfoSection.tsx`;
- `CardsSection.tsx`;
- `ContactFormSection.tsx`;
- `DatabaseCardsSection.tsx`;
- `AdminContattiSection.tsx`.

Questa divisione e utile perche la `HomePage` resta un file di assemblaggio. In sede d'esame, per aggiungere o togliere parti della pagina, basta intervenire sugli import e sui tag delle sezioni.

### Componenti

I componenti principali si trovano in `src/components`:

- `Navbar`;
- `NavbarAlt`;
- `Hero`;
- `Cards`;
- `DatabaseCards`;
- `Form`;
- `LoginForm`;
- `Footer`.

Ogni componente ha una responsabilita specifica. Questa scelta segue il principio di separazione delle responsabilita e rende il progetto piu leggibile.

### Hook

La logica e stata spostata in hook dedicati:

- `useForm`, per stato del form, submit e feedback;
- `useApi`, per leggere dati dal backend;
- `useLogin`, per registrazione, login e redirect.

Questo permette di evitare componenti troppo lunghi. Il componente resta concentrato sulla parte visiva, mentre l'hook gestisce stato ed eventi.

### Tipi TypeScript

Il file `src/types/Contatto.ts` definisce la struttura dei dati ricevuti dal backend. Durante l'esame va aggiornato ogni volta che cambiano i campi dell'entity Java o i dati mostrati nelle card.

---

## 6. Struttura del backend

Il backend segue un'organizzazione semplice ma completa.

### Modulo dati principali

Il dominio generico e `Contatto`. I file principali sono:

- `Contatto.java`;
- `ContattoRepository.java`;
- `ContattoService.java`;
- `ContattoController.java`.

L'entity contiene:

- `id`;
- `nome`;
- `email`;
- `telefono`;
- `messaggio`.

Questi campi rappresentano una base neutra. In base alla traccia possono essere sostituiti con campi piu coerenti. La cosa importante e mantenere allineati:

- input del form;
- payload inviato dal frontend;
- parametri del controller;
- costruttore e campi dell'entity;
- tipo TypeScript usato dal frontend.

Gli endpoint attuali sono:

```text
POST /contatti/invia
GET  /contatti/tutti
```

Il primo endpoint salva un nuovo record. Il secondo restituisce tutti i dati salvati.

### Modulo utenti

Il progetto include anche un modulo `Utente`, composto da:

- `Utente.java`;
- `UtenteRepository.java`;
- `UtenteService.java`;
- `UtenteController.java`.

Gli endpoint sono:

```text
POST /utenti/registra
POST /utenti/login
```

Il login e volutamente semplice: se email e password corrispondono a un utente salvato nel database, il backend restituisce l'utente; altrimenti restituisce `null`.

Questa scelta e adatta al template perche consente di dimostrare un flusso completo senza introdurre complessita eccessiva come token JWT, sessioni o cifratura password. In una versione professionale si dovrebbero introdurre password cifrate, gestione ruoli e protezione delle rotte.

---

## 7. Comunicazione frontend-backend

La comunicazione avviene tramite richieste HTTP.

Il form pubblico invia dati con:

```ts
new URLSearchParams({
  nome,
  email,
  telefono,
  messaggio,
})
```

Il backend riceve gli stessi nomi tramite:

```java
@RequestParam String nome
@RequestParam String email
@RequestParam String telefono
@RequestParam String messaggio
```

Questa corrispondenza diretta rende il template facile da adattare. Se in sede d'esame il campo `messaggio` diventa `descrizione`, bisogna rinominarlo sia nel frontend sia nel backend.

La lettura dei dati avviene con l'hook `useApi`, che riceve un URL e restituisce un array di dati. Questo hook puo essere riutilizzato per leggere liste diverse: eventi, prodotti, iscrizioni, prenotazioni o richieste.

Il backend abilita CORS per:

```text
http://localhost:5173
```

Questo permette al frontend Vite di comunicare con il server Spring Boot in locale.

---

## 8. Scelte grafiche, accessibilita e responsive design

La grafica del template e volutamente neutra. L'obiettivo non e imporre uno stile definitivo, ma offrire una base ordinata da personalizzare velocemente.

Le scelte principali sono:

- layout a sezioni verticali;
- container centrale con larghezza massima;
- hero iniziale con immagine e call to action;
- card responsive;
- form compatto e leggibile;
- palette chiara azzurro/blu;
- bottoni coerenti tramite classe condivisa `.button`;
- file CSS separati per componente.

Il responsive design e gestito con media query. Le card passano da tre colonne su desktop a una colonna su mobile. La navbar va a capo sotto una certa larghezza per evitare sovrapposizioni.

Sono presenti accorgimenti di accessibilita di base:

- label associate agli input;
- campi obbligatori;
- type specifici per email e telefono;
- attributi `alt` sulle immagini;
- `aria-label` per navigazione e brand;
- focus visibile sui link della navbar;
- feedback testuale dopo l'invio del form.

In sede d'esame, questa sezione va personalizzata descrivendo le scelte grafiche effettive della traccia: colori, immagini, tono comunicativo, disposizione delle sezioni e motivazione delle scelte visuali.

---

## 9. Personalizzazione in sede d'esame

Questa e la parte piu importante del template: il progetto e pensato per essere trasformato rapidamente in base alla traccia consegnata.

### 1. Individuare il dominio

Prima di modificare il codice bisogna capire cosa chiede la traccia.

Esempi:

- eventi culturali -> `Evento`;
- prodotti artigianali -> `Prodotto`;
- donazioni alimentari -> `Donazione`;
- proposte scolastiche -> `Proposta`;
- richieste di contatto -> `Contatto`;
- candidature -> `Candidatura`.

Se il tempo e poco, si puo mantenere il nome `Contatto` e personalizzare solo campi, testi e sezioni. Se invece si vuole rendere il progetto piu coerente, si puo rinominare anche il dominio.

### 2. Personalizzare la landing page

File principali:

- `Hero.tsx`;
- `InfoSection.tsx`;
- `Cards.tsx`;
- `CardsSection.tsx`;
- `Footer.tsx`;
- file CSS associati.

Qui vanno cambiati:

- titolo;
- sottotitolo;
- call to action;
- testi informativi;
- card;
- immagini;
- link footer;
- palette e stile grafico.

### 3. Personalizzare il form

File principali:

- `Form.tsx`;
- `useForm.ts`;
- `Contatto.ts`;
- `Contatto.java`;
- `ContattoService.java`;
- `ContattoController.java`.

Per ogni nuovo campo bisogna aggiornare tutto il flusso. Per esempio, se la traccia richiede `luogoEvento`, il campo deve comparire:

- nello state React;
- nell'input del form;
- nel payload `URLSearchParams`;
- nel tipo TypeScript;
- nell'entity Java;
- nel service;
- nel controller come `@RequestParam`.

### 4. Personalizzare endpoint e database

Se si cambia il dominio da `Contatto` a `Evento`, si puo anche cambiare l'endpoint:

```text
/contatti/invia -> /eventi/invia
/contatti/tutti -> /eventi/tutti
```

In questo caso bisogna aggiornare sia il controller backend sia gli URL usati nel frontend.

Il nome del database si modifica in:

```text
backend/src/main/resources/application.properties
```

### 5. Personalizzare area admin

La pagina admin va adattata ai dati realmente richiesti dalla traccia. Se il progetto riguarda eventi, le card admin dovrebbero mostrare titolo, data, luogo e descrizione. Se riguarda prodotti, potrebbero mostrare nome, categoria, prezzo e descrizione.

File principali:

- `AdminPage.tsx`;
- `AdminContattiSection.tsx`;
- `DatabaseCards.tsx`;
- `Contatto.ts`.

---

## 10. Istruzioni per avviare il progetto

### Prerequisiti

- Node.js;
- npm;
- Java 17;
- MySQL;
- Maven wrapper incluso nel backend.

### Avvio backend

Entrare nella cartella:

```text
Template definitivo/backend
```

Eseguire:

```powershell
.\mvnw.cmd spring-boot:run
```

Il backend sara disponibile su:

```text
http://localhost:8080
```

Swagger UI sara consultabile da:

```text
http://localhost:8080/swagger-ui.html
```

oppure:

```text
http://localhost:8080/swagger-ui/index.html
```

### Avvio frontend

Entrare nella cartella:

```text
Template definitivo/FrontEnd
```

Installare le dipendenze se necessario:

```bash
npm install
```

Avviare il progetto:

```bash
npm run dev
```

Il frontend sara normalmente disponibile su:

```text
http://localhost:5173
```

---

## 11. Indicazioni per testare il progetto

Il test manuale consigliato e:

1. Avviare MySQL.
2. Avviare il backend.
3. Avviare il frontend.
4. Aprire la home page.
5. Compilare il form.
6. Verificare il messaggio di feedback.
7. Controllare che il dato appaia nella sezione dei dati salvati.
8. Aprire la pagina login.
9. Registrare un utente.
10. Effettuare il login.
11. Verificare il redirect alla pagina admin.
12. Controllare che la pagina admin mostri i dati inseriti.

Endpoint principali del template:

```text
POST /contatti/invia
GET  /contatti/tutti
POST /utenti/registra
POST /utenti/login
```

Verifiche tecniche frontend:

```bash
npm run build
npm run lint
```

Verifiche tecniche backend:

```powershell
.\mvnw.cmd test
```

Nel backend sono presenti test per il caricamento del contesto Spring e per il flusso di registrazione/login dell'utente.

---

## 12. Attivita svolte

Le attivita principali sono state:

1. Creazione frontend React con TypeScript e Vite.
2. Configurazione routing con React Router.
3. Suddivisione della home in sezioni riutilizzabili.
4. Creazione componenti UI per navbar, hero, card, form, login e footer.
5. Separazione della logica frontend in custom hook.
6. Implementazione form controllato con feedback.
7. Collegamento del form al backend tramite `fetch`.
8. Creazione hook generico per lettura dati dal backend.
9. Visualizzazione dati in card nella home e nella pagina admin.
10. Creazione backend Spring Boot.
11. Definizione entity, repository, service e controller.
12. Configurazione database MySQL.
13. Configurazione CORS per sviluppo locale.
14. Inserimento documentazione e commenti per la personalizzazione d'esame.

---

## 13. Come adattare questa relazione alla traccia finale

In sede d'esame questa relazione non va riscritta da zero. Va aggiornata nei punti in cui il template diventa progetto specifico.

Parti da modificare:

- titolo del progetto;
- descrizione del dominio;
- obiettivo della piattaforma;
- campi del form;
- endpoint se rinominati;
- nome database;
- scelte grafiche reali;
- sezioni effettivamente presenti nella landing;
- eventuali funzionalita aggiunte o rimosse;
- test specifici eseguiti.

Parti che possono restare quasi uguali:

- spiegazione dello stack tecnologico;
- architettura client/server;
- motivazione della separazione frontend/backend;
- struttura a componenti React;
- struttura a livelli Spring Boot;
- logica di comunicazione HTTP;
- istruzioni generali di avvio;
- metodo di personalizzazione.

Questo rende il documento adatto a essere usato come base solida: racconta bene le scelte tecniche, ma lascia spazio al dominio reale che verra indicato nella traccia.

---

## 14. Note finali

Il progetto e stato costruito con l'obiettivo di essere chiaro, modulare e modificabile. La scelta di usare React a componenti, hook dedicati, TypeScript, Spring Boot a livelli e MySQL consente di coprire un flusso full stack completo senza rendere il codice troppo complesso.

La documentazione e stata impostata per spiegare non solo cosa fa il progetto, ma anche perche e stato organizzato in questo modo. In sede d'esame sara sufficiente collegare questa struttura alla traccia ricevuta, sostituendo dominio, testi, campi, endpoint e scelte grafiche specifiche.

In questo modo la relazione resta tecnica, ma anche pronta alla customizzazione richiesta da una prova pratica.
