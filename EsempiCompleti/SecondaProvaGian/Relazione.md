### ALLEGATO TECNICO

- Flusso di navigazione:
    Il progetto consiste nello sviluppo di una LandingPage che mostra in ordine di scroll le seguenti sezioni :
            - home presentazione con immagine di background 
            - Elenco eventi proposti dalla comunity con titolo e card che contengono i dettagli dell'evento (titolo evento, categoria, descrizione, autore e contatti organizzatori)
            - SuggerimentoEvento , una sezione dedicata al form per inviare la propria proposta di evento culturale.

    Lo scroll è aiutato da una navbar sticky che permette in qualsiasi sezione di poter scrollare rapidamente nella sezione desiderata.



- Struttura sezioni e organizzazione pagine
    - HeroSection iniziale: la sezione iniziale è una semplice hero section che mostra in background una foto significativa che richiama il senso del sito (ovvero quello di organizzare eventi) e un titolo suggestivo per lo scopo del sito
    - ElencoEventiSection: sezione situata subito sotto la principale che mostra 3 esempi di eventi organizzati dalla comunity del comune. vengono mostrate in un carosello automatico piacevole da guardare nel quale vengono indicati tutti i dettagli degli esempi mostrati 
    - Propposta eventi section: una sezione nella quale un cittadino puo proporre tramite un form un evento 


- componenti interfaccia utente

    Navbar per la navigazione nella pagina
    Footer he fornisce le indicazioni basilari per i contatti


- Tecnologie utlizzate per Frontend e Backend
    -FrontEnd: Vite ,React typescript, React Router per navigazione 
    -Backend: Java 21 Springboot 4.0.5,maven project, con dipendenze: Spring Web, Spring Data JPA per comunicazione database, MySQL driver, SpringBootDevTools, Lombok, SPringDoc OpenAPI


- Architettura prevista lato client/server



- Scelte grafiche accessibilità e responsive design

    Ho scelto un sito 

- Descrizione attività svolte
    -Sviluppo figma (link:  https://www.figma.com/design/l3J1ywT8ySFkE8ZcsnwTfN/seconda-simulazione-esame?node-id=12-35&t=eR9uiIjVuEmvsH2s-1)
        - Realizzato il figma seguendo le regole del design a componenti.
            Ho realizzato prima di tutto il blank del sito usando come misura 1920px x 1080px scegliendo come colore principale di sfondo un colore dark. 
            ho realizzato poi i componenti di layout come navbar e footer per prima cosa, dove nei quali seguendo la richiesta della traccia ho creato la navbar con le voci per la navigazione su ogni sezione richiesta piu la pagina degli admin.
            Successivamente ho sviluppato sezione per sezione.
            Hero: sezione semplice con immagine bg a tutto schermo con testo centrato alla pagina
            LeVostreProposte: sezione con un carosello con delle card che mostrano delle proposte
            Sezione Form: sezione con form che richiede all'utente Titolo, categoria, descrizione, autore, email  inerenti all'evento.
            In fine ho fatto il design della pagina login dell'admin e la pagina della dashboard admin dove vengono semplicemente visualizzate le card degli eventi inviati tramite form.

            il design del sito è totalmente responsive applicato con autolayout e organizzazione a componenti.
    -sviluppo front end
        - Sono partito a sviluppare con lo stesso ordine del figma.
        Ho inizializzato con il comando npm create vite@latest dove ho selezionato come framework React con typescript + compilatore.
        dopo aver inizializzato il progetto ho iniziato a sviluppare i componenti e le sezioni.
        inizialmente ho sviluppato la navbar della landing page da lato client, creando i link alle sezioni.
        successivamente ho creato il footer con mockup (non è funzionale)
        creata la sezione hero
        creata la sezione delle proposte
        creata la sezione del form.
        il form è collegato al backend tramite fetch alla porta localhost:8080 come richiesto dalla traccia.

    -sviluppo backend:
        sono partito inizializzando il progetto backend con javaspringboot maven e java 21.
        ho creato il model event con i campi richiesti dal form.
        ho sviluppato l'eventcontroller
        con le API per inserire leggere e modificare gli eventi da mostrare nella pagina admin.
        ho sviluppato anche il controller dell'admin
        ho impostato dalle application properties la config per il database h2 in memory per evitare di fare dump di database e evitare eventuali errori e con un database mysql. 
        ho aggiunto la config per Openapi con springdoc per documentare e provare endpoint
        infine ho testato il backedn con testi maven e collegandolo al frontend.


- istruzioni per avviare il progetto
    - FrontEnd: Spostarsi nella cartella del progetto FrontEnd
                cd Simulazione
                npm run dev 
    -BackEnd: Spostarsi nella cartella del progetto BackEnd ed eseguire nella powershell o nella bash:
                cd culturalmerge
                .\mvnw.cmd spring-boot:run
            


- indicazioni per testare i servizi
    -   per testare i servizi, entrare nella sezione del form e provare ad inviare riempendo tutti i campi una proposta di evento. nel caso di successo verrà inviato un feedback visivo di successo, altrimenti risulterà un errore riportato da un feedback visivo "failed to fetch" 
    -   per testare il servizio del controllo lato admin, entrare nella pagina di admin preceduta dalla propria login, loggare con nome : admin e password admin, una volta autenticato (attenzione verificare di aver runnato il backend correttamente) si entrerà nella dashboard admin dove saranno visibili nelle card tutti i form inviati dal lato client.  in caso non siano stati inviati form, non verrà visualizzato nulla, nel caso invece in cui non è stata stabilita correttamente la connessione risulterà uno stato di errore visivo.


# risposta alle domande:

1) UI/UX e progettazione
Per la progettazione della UI ho seguito un approccio prima su figma e poi sviluppo a componenti nel front end.
Ho organizzato la landing in sezioni chiare (hero, proposte eventi, form) in modo che il flusso fosse semplice da capire anche al primo accesso.
Per usabilità ho usato una navbar sticky cosi l utente puo sempre tornare subito alla sezione che gli serve senza perdersi nello scroll.
Per chiarezza visiva ho cercato di mantenere separazione netta tra le sezioni, testi leggibili e card con informazioni ordinate.
Per accessibilità e responsive ho impostato il layout in modo adattabile a schermi diversi, mantenendo struttura e contenuti leggibili anche da mobile.

2) Comunicazione front-end/back-end
Lo scambio dati avviene dal front end React verso il backend Spring Boot tramite chiamate fetch agli endpoint REST.
Ho usato principalmente questi metodi HTTP: GET per leggere gli eventi, POST per inserire nuovi eventi e per la login admin, PUT per aggiornare eventi e DELETE per eliminare eventi.
Il backend risponde con status e dati JSON, e nel front end in base alla risposta mostro feedback all utente: se la richiesta va a buon fine mostro conferma di successo, se fallisce mostro stato di errore (ad esempio failed to fetch).
In questo modo l utente ha sempre un riscontro immediato su quello che ha fatto.