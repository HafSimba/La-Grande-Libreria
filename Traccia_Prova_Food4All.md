Fondazione ITS Technologies Talent Factory

Denominazione

percorso
 ITS:
Tecnico Superiore per la progettazione e lo sviluppo di soluzioni Cloud per il Web e Mobile
(Web & Mobile Software Developer with Cloud Technologies)

Figura nazionale di riferimento:
Tecnico superiore per i metodi e le tecnologie per lo sviluppo di sistemi software

BIENNIO  2022/2024
PROVA TEORICO-PRATICA

Formulata secondo quanto disciplinato dall'art. 1, comma 1, lettera a) delle Linee guida emanate con decreto di concerto attuativo dell’art. 1, comma 47, lett. a), della legge n. 107/2015

Nome e Cognome Corsista: _____________________
Data: _____________________
Tempo a disposizione: 6 ore

***************************

Denominazione della prova:
Realizzazione di una piattaforma per la riduzione dello spreco alimentare e la connessione tra donatori e enti benefici

SITUAZIONE:

L'organizzazione "Food4All" promuove la creazione di una piattaforma web per raccogliere offerte di eccedenze alimentari da parte di ristoranti, supermercati e produttori locali e metterle in contatto con enti benefici, mense e scuole. Il portale dovrà consentire l'inserimento di segnalazioni di donazione (tipologia alimento, quantità stimata, data di disponibilità, luogo di ritiro, contatti) e la visualizzazione delle offerte disponibili.

ALLEGATO TECNICO (fino a 6 punti)

Pianificate i contenuti e descrivete ogni vostro intervento su un foglio di testo da allegare alla prova come analisi progettuale in cui descrivete le vostre scelte.

---

PARTE 1 Front-end: realizzazione front-end della landing page: fino a 22 punti

Punteggi:

Caso A

Prototipazione di un nuovo template in Figma: fino a 4 punti
Realizzazione della Landing in HTML/CSS/Bootstrap (o altro framework): fino a 14 punti
Integrazione del progetto in React: + 4 punti

Caso B

Prototipazione di un nuovo template in Figma: fino a 4 punti
Realizzazione del progetto con React: fino a 18 punti

Caso C

Realizzazione del progetto modificando e personalizzando il template generico messo a disposizione: fino a 12 punti
Integrazione del progetto in React: + 4 punti

---

Parte 1/A

Le sezioni richieste per la composizione della landing devono essere:

- HERO INTRODUTTIVA: Sezione con immagini e Call to Action per donatori e beneficiari
- COME FUNZIONA: Spiegazione del processo di donazione e ritiro
- OFFERTE IN EVIDENZA: Elenco delle donazioni disponibili
- MAPPA/LOCALIZZAZIONE: Indicazione delle offerte per area geografica
- TESTIMONIANZE: Organizzazioni che già partecipano
- MODULO DI SEGNALAZIONE DONAZIONE: Form per inserire un'offerta (in pagina o dedicata)
- LISTA OFFERTE: Mostrare per ciascuna offerta titolo, descrizione, quantità stimata e contatto

---

PARTE 2: integrazione Back-end (fino a 12 punti)
La call-to-action conduce il donatore al form di segnalazione.
In allegato è disponibile un progetto di Back-end semilavorato realizzato in Spring Boot per raccogliere dalla pagina i seguenti dati:

- Nome attività donatrice
- Tipologia alimento
- Quantità stimata
- Data di disponibilità
- Luogo di ritiro (indirizzo/coordinate)
- Referente e contatto (nome e email)
- Note e link media

Tutti i campi sono obbligatori. Il progetto contiene un servizio REST che permette di inviare i dati.
Il progetto è funzionante, ma privo di persistenza: le richieste vengono al momento stampate a console.

I file disponibili sono:
- 'Food4All_Backend.zip' il sorgente del progetto di Back-end
- 'Food4All_Backend.jar' il Back-end compilato e pronto ad essere eseguito (usare JDK 21):

  java -jar Food4All_Backend.jar

Il server rende disponibile la UI di test dei servizi all'indirizzo: http://localhost:8080/swagger-ui.html

Il candidato dovrà:
1. Modificare il Front-end affinché i dati del form di segnalazione vengano inviati all'apposito servizio REST del Back-end e che l'utente venga avvisato con un popup/modal dell'avvenuta segnalazione.
2. Integrare il progetto di Back-end con Spring JPA in modo che le segnalazioni vengano salvate in una tabella su database MySQL.

Tecnologie richieste e consentite: Figma per prototipazione, HTML/CSS/Bootstrap (o altro CSS framework), React per integrazione dinamica, Java (Spring Boot) per il back-end, Spring JPA, MySQL come DB. Usare JDK 21.

---

Prodotti da consegnare:

Il candidato dovrà consegnare una cartella riportante il proprio cognome e nome con all'interno:
- Una cartella contenente la versione statica del portale oppure dinamica se interfacciata con il Back-end.
- Il progetto di Back-end modificato in formato zip importabile in Eclipse.
- Un file PDF contenente una breve relazione che descriva le attività svolte, le scelte progettuali e le azioni per verificare il corretto funzionamento di quanto prodotto.

---

Formato della cartella:

- La cartella dovrà essere nominata nel seguente formato: 'Nome_Cognome'
- La cartella dovrà contenere il file di testo con la pianificazione del lavoro e tutti i file necessari per completare il progetto.

---

Ora consegna finale:
________________________________________

Cognome Nome studente:
________________________________________

Firma studente:
________________________________________

---

Materiale fornito:
- Un Template Front-end
- Il testo della prova
- Cartella File Back-end (Food4All_Backend.zip)
