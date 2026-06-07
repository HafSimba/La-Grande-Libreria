Relazione tecnica del progetto

Introduzione

Il progetto e stato realizzato come applicazione full stack composta da un frontend sviluppato in React e TypeScript e da un backend sviluppato in Java con Spring Boot, collegato a un database MySQL.

L'obiettivo del lavoro e stato quello di costruire una piattaforma web coerente con la traccia assegnata. Il progetto comprende una landing page pubblica, un modulo per l'invio dei dati, una semplice area di accesso e una pagina admin per visualizzare le informazioni raccolte.

In sede d'esame questa introduzione potra essere aggiornata inserendo il nome reale del progetto e lo scopo specifico richiesto dalla traccia.

Progettazione UI e UX tramite Figma

La prima fase del lavoro e stata dedicata alla progettazione dell'interfaccia utente. Sono partito dall'analisi della traccia per individuare il pubblico di riferimento, le informazioni principali da comunicare e le azioni che l'utente avrebbe dovuto compiere all'interno del sito.

Ho realizzato il prototipo in Figma seguendo una struttura semplice e leggibile, organizzata per sezioni. La scelta principale e stata quella di progettare una landing page chiara, con una sezione iniziale di presentazione, contenuti informativi, elementi in evidenza e un modulo finale per l'invio dei dati richiesti.

Dal punto di vista UI e UX ho cercato di mantenere una navigazione lineare. L'utente deve capire subito lo scopo del sito, leggere le informazioni essenziali e arrivare facilmente all'azione principale. I colori, le spaziature, la disposizione delle sezioni e lo stile delle card sono stati pensati per adattarsi al tema della traccia e per rendere la consultazione semplice anche da dispositivi diversi.

Questa parte potra essere personalizzata durante l'esame aggiungendo il link al prototipo Figma e descrivendo le scelte grafiche specifiche della traccia, come palette colori, immagini, tono comunicativo, disposizione delle sezioni e motivazione delle scelte visuali.

Riproduzione del design nel frontend

Dopo la fase di prototipazione, ho riprodotto il layout in React mantenendo la stessa organizzazione prevista nel prototipo Figma. Ho suddiviso la pagina in sezioni indipendenti per rendere il codice piu ordinato, leggibile e facilmente modificabile.

La home page non contiene direttamente tutta la struttura grafica, ma assembla sezioni separate. Questo mi permette di aggiornare o rimuovere una parte della pagina senza dover modificare tutto il file principale.

Le sezioni principali utilizzate sono:

1. HeroSection, per la parte iniziale con immagine e call to action
2. InfoSection, per la descrizione del progetto
3. CardsSection, per presentare elementi informativi o funzionalita
4. ContactFormSection, per raccogliere i dati dell'utente
5. Footer, per la chiusura della pagina

Se la traccia richiede sezioni diverse, posso aggiungere un nuovo file nella cartella src/sections e importarlo nella HomePage. In questo modo il progetto resta modulare e semplice da adattare.

Flusso di navigazione

Il flusso di navigazione parte dalla pagina principale, cioe la landing page del progetto. Da qui l'utente puo leggere le informazioni principali e raggiungere le varie sezioni tramite la navbar.

Dalla landing l'utente puo compilare il form pubblico. I dati inseriti vengono inviati al backend e salvati nel database.

Ho previsto anche una pagina di login, dalla quale e possibile registrare un utente e successivamente accedere all'area admin. L'autenticazione e stata mantenuta semplice: il login riesce quando email e password corrispondono a credenziali gia presenti nel database.

Dopo il login, l'utente viene portato alla pagina admin, dove vengono mostrati in card i dati inviati tramite il form pubblico. Questa pagina ha lo scopo di permettere una consultazione rapida delle richieste o registrazioni ricevute.

Se nella traccia non sara richiesta un'area admin, questa parte potra essere rimossa dalla relazione. Se invece la pagina admin avra un nome o uno scopo diverso, bastera aggiornare la descrizione del flusso e delle pagine coinvolte.

Struttura delle pagine e delle sezioni

Ho organizzato il frontend distinguendo pagine, sezioni, componenti riutilizzabili, hook e tipi TypeScript.

Ho scelto inoltre di separare anche i file CSS in base ai componenti e alle sezioni. In questo modo ogni componente mantiene vicino il proprio stile, mentre il file index.css resta dedicato soltanto agli stili globali, come il reset iniziale, il layout base delle sezioni, il container principale, i testi comuni e i pulsanti condivisi.

Questa scelta rende il progetto piu semplice da leggere e da modificare. Se durante l'esame devo cambiare lo stile del footer, della navbar, delle card o del form, posso aprire direttamente il file CSS corrispondente senza cercare dentro un unico file troppo grande.

Le pagine principali sono:

1. HomePage.tsx, che assembla la landing page
2. LoginPage.tsx, che contiene registrazione e login
3. AdminPage.tsx, che mostra i dati inseriti dagli utenti

Le sezioni si trovano nella cartella src/sections:

1. HeroSection.tsx
2. InfoSection.tsx
3. CardsSection.tsx
4. ContactFormSection.tsx
5. AdminContattiSection.tsx

I componenti riutilizzabili si trovano nella cartella src/components. Tra questi ci sono:

1. Navbar
2. NavbarAlt
3. Hero
4. Cards
5. Form
6. LoginForm
7. Footer

La logica di stato e comunicazione con il backend e stata spostata negli hook:

1. useForm, per il form pubblico
2. useApi, per leggere liste dal backend
3. useLogin, per registrazione e login

Questa organizzazione permette di mantenere i componenti piu puliti. Il componente si occupa della parte visiva, mentre l'hook gestisce stato, eventi e chiamate HTTP.

Componenti dell'interfaccia utente

La Navbar e stata sviluppata per permettere all'utente di raggiungere le sezioni principali della pagina e la login page. La Hero rappresenta la prima area visibile della landing e contiene il messaggio principale del progetto.

La sezione informativa descrive lo scopo dell'applicazione, mentre le card sono state pensate per mostrare punti di forza, servizi, eventi, prodotti o contenuti in evidenza in base alla traccia.

Il componente Form contiene i campi controllati per l'invio dei dati. Ogni input e collegato allo stato dell'hook useForm, cosi da mantenere separata la logica dalla struttura HTML.

Il componente LoginForm contiene due blocchi: uno per registrare un utente e uno per effettuare l'accesso. Anche in questo caso la logica e stata isolata in un hook dedicato.

Nella pagina admin, la sezione AdminContattiSection recupera i dati dal backend e li mostra sotto forma di card. Questa scelta rende la visualizzazione semplice e facilmente adattabile ad altri tipi di dati.

In sede d'esame sara possibile aggiornare nomi e descrizioni dei componenti in base alle sezioni realmente usate nella consegna finale.

Tecnologie utilizzate

Frontend

Per il frontend ho utilizzato React, TypeScript, Vite, React Router, CSS e Fetch API.

Ho scelto React per costruire l'interfaccia tramite componenti riutilizzabili. TypeScript mi ha permesso di definire tipi per i dati ricevuti dal backend, riducendo errori nella gestione delle informazioni. Vite e stato usato per creare e avviare velocemente il progetto frontend. React Router gestisce la navigazione tra home, login e admin.

Le chiamate HTTP sono state realizzate con fetch, senza librerie esterne, per mantenere il codice semplice e coerente con quanto svolto durante il corso.

Backend

Per il backend ho utilizzato Java, Spring Boot, Spring Web MVC, Spring Data JPA, Maven, MySQL, Lombok e SpringDoc OpenAPI.

Spring Boot mi ha permesso di creare rapidamente un backend REST. Spring Web MVC e stato usato per definire i controller e gli endpoint. Spring Data JPA gestisce il salvataggio e la lettura dei dati dal database MySQL. Lombok e stato utilizzato per ridurre il codice ripetitivo nelle entity. SpringDoc OpenAPI permette di consultare gli endpoint tramite Swagger UI.

Sviluppo frontend

Nello sviluppo frontend ho iniziato configurando il routing dell'applicazione. Nel file router.tsx ho definito le rotte principali:

1. la pagina home, per la landing page
2. la pagina login, per registrazione e accesso
3. la pagina admin, per visualizzare i dati salvati

Successivamente ho sviluppato la home page, suddividendola in sezioni dedicate. Ho mantenuto HomePage.tsx come file di assemblaggio, evitando di inserire tutta la struttura della landing in un unico file. Questa scelta rende il codice piu ordinato e piu semplice da personalizzare.

Per quanto riguarda lo stile, inizialmente le regole CSS potevano essere raccolte in un unico file globale. Ho poi preferito organizzare meglio il progetto creando un file CSS dedicato per ogni componente principale. Per esempio, lo stile del footer si trova nel file Footer.css, quello delle card nel file Cards.css, quello del form nel file Form.css e quello della hero nel file Hero.css.

Il file index.css rimane comunque presente, ma viene usato solo per le regole comuni a tutta l'applicazione. Questa divisione segue la stessa logica usata per i componenti React: ogni parte del progetto ha un compito preciso e puo essere modificata senza influenzare inutilmente il resto dell'interfaccia.

Il form pubblico e stato sviluppato come componente controllato. Per ogni campo ho creato uno stato e un handler nell'hook useForm. Al submit, i dati vengono inseriti in un oggetto URLSearchParams e inviati al backend con metodo POST e content type application/x-www-form-urlencoded.

Per leggere i dati salvati ho creato l'hook useApi, che riceve un URL, esegue una chiamata GET e salva il risultato in uno stato React. Questo hook viene usato nella sezione admin per mostrare le card con i dati ricevuti dal form.

Infine ho creato la pagina login. La registrazione invia nome, email e password al backend. Il login invia email e password e, se il backend restituisce un utente valido, il frontend reindirizza alla pagina admin.

Sviluppo backend

Il backend e stato strutturato seguendo un'organizzazione a livelli:

1. entity
2. repository
3. service
4. controller

Ho creato una prima entity per rappresentare i dati inviati dal form pubblico. Questa entity viene salvata nel database tramite un repository JPA. La logica di creazione e salvataggio e contenuta nel service, mentre il controller espone gli endpoint REST.

Per il form pubblico sono stati realizzati endpoint per inserire un nuovo dato e leggere tutti i dati salvati.

Ho poi creato un secondo modulo dedicato agli utenti. L'entity Utente contiene nome, email e password. Il repository permette di cercare un utente in base a email e password. Il service contiene la logica di registrazione e login, mentre il controller espone gli endpoint dedicati alla registrazione e all'accesso.

Ho mantenuto il metodo di comunicazione semplice. Il frontend invia i dati con URLSearchParams e il backend li riceve tramite RequestParam. In questo modo i nomi dei campi restano chiari e devono combaciare tra frontend e backend.

Se la traccia richiedera un dominio diverso, sara possibile rinominare le entity e aggiornare i campi in frontend e backend mantenendo lo stesso schema: entity, repository, service e controller.

Struttura dati e comunicazione frontend backend

La comunicazione tra frontend e backend avviene tramite richieste HTTP.

Per l'invio dei dati dal form pubblico viene usata una richiesta POST verso l'endpoint dei contatti. Per leggere i dati salvati e mostrarli nella pagina admin viene usata una richiesta GET verso l'endpoint che restituisce l'elenco dei contatti.

Per la gestione utenti vengono usate due richieste POST: una per registrare un nuovo utente e una per effettuare il login.

Il backend restituisce oggetti JSON, che il frontend legge e mostra nelle card.

La regola principale che ho seguito e stata mantenere allineati i nomi dei campi lungo tutto il flusso, partendo dagli input React, passando per i parametri inviati al backend, fino ai campi delle entity.

Questa scelta rende piu semplice modificare il progetto in base alla traccia, perche ogni campo mantiene lo stesso nome nei vari livelli dell'applicazione.

Istruzioni per avviare il progetto

Backend

Per avviare il backend apro un terminale nella cartella backend del progetto e lancio il comando di avvio Maven previsto dal progetto.

Il backend viene eseguito su http://localhost:8080.

La documentazione Swagger UI e disponibile su http://localhost:8080/swagger-ui.html.

Frontend

Per avviare il frontend apro un terminale nella cartella FrontEnd del progetto.

Se necessario installo le dipendenze con npm install.

Successivamente avvio il progetto con npm run dev.

Il frontend viene eseguito normalmente su http://localhost:5173.

Indicazioni per testare il servizio

Per verificare il corretto funzionamento del progetto ho seguito questo flusso:

1. Avvio il backend
2. Avvio il frontend
3. Apro la landing page
4. Compilo il form pubblico e invio i dati
5. Apro la pagina login
6. Registro un utente
7. Effettuo il login con le credenziali appena registrate
8. Verifico che venga aperta la pagina admin
9. Controllo che nella pagina admin siano presenti le card con i dati inseriti dal form

Per una verifica tecnica del frontend uso i comandi npm run build e npm run lint.

Per una verifica tecnica del backend uso il comando Maven dedicato ai test.

Nella relazione finale sara opportuno lasciare soltanto i test e gli endpoint realmente utilizzati nella consegna.

Conclusione

Il progetto e stato sviluppato con l'obiettivo di mantenere una struttura chiara, semplice da spiegare e facilmente modificabile. Ho separato le responsabilita tra frontend e backend, mantenendo componenti, hook, pagine e sezioni distinti.

La scelta di usare un backend a livelli e un frontend a componenti mi permette di adattare il progetto rapidamente a tracce diverse, modificando campi, testi, sezioni ed endpoint senza dover riscrivere tutta l'applicazione.

In sede d'esame questa conclusione potra essere completata aggiungendo eventuali funzionalita specifiche richieste dalla traccia e una breve valutazione personale del lavoro svolto.
