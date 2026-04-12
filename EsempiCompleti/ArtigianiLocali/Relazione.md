# Relazione tecnica - ArtigianiLocali

## 1) Obiettivo della prova
Realizzare un applicativo full stack monorepo con:
- Frontend React a componenti con landing e catalogo
- Backend Spring Boot con REST e persistenza
- Inserimento prodotto da form con invio al backend
- Visualizzazione catalogo dinamico

La soluzione e stata implementata seguendo la traccia d'esame in Traccia_Prova_ArtigianiLocali.md e mantenendo il pattern backend usato nel progetto esempio analizzato (Entity + Repository + Service + Controller).

## 2) Struttura monorepo usata

Cartella di lavoro:
- EsempiCompleti/ArtigianiLocali

Moduli:
- artigianibackend
- artigianifrontend

Documento di analisi e passi operativi:
- Relazione.md (questo file)

## 3) Tutorial passo-passo backend

### Passo 3.1 - Verifica base backend inizializzato
Ho verificato che il progetto backend fosse gia creato con Maven Wrapper e dipendenze Spring.

### Passo 3.2 - Allineamento dipendenze e runtime
Nel pom.xml ho:
- impostato java.version a 21
- aggiunto spring-boot-starter-validation per validazioni lato API
- aggiunto H2 runtime per database in-memory
- mantenuto le dipendenze gia presenti (JPA, Web MVC, SpringDoc, Lombok, DevTools, MySQL)

Motivo: rispettare la richiesta di uso rapido con DB in-memory senza perdere predisposizione a futuri scenari MySQL.

### Passo 3.3 - Configurazione H2 in-memory
In application.properties ho configurato:
- datasource H2 in-memory
- ddl-auto=update
- show-sql=true per debug
- console H2 abilitata su /h2-console
- swagger su /swagger-ui.html

Motivo: avere persistenza immediata e ambiente testabile in pochi secondi.

### Passo 3.4 - Modellazione dominio
Ho creato entity JPA:
- ProdottoArtigianale

Campi implementati (tutti obbligatori):
- nomeArtigianoImpresa
- categoriaProdotto
- titoloProdotto
- descrizioneProdotto
- prezzo
- immaginiLink
- contattoReferenteNome
- contattoReferenteEmail

Campo tecnico aggiunto:
- creatoIl (timestamp automatico con @PrePersist)

Nota descrizione:
- la traccia indica limite max 3000 parole
- nel service ho aggiunto validazione esplicita conteggio parole

### Passo 3.5 - Repository
Ho creato:
- ProdottoArtigianaleRepository

Metodi principali:
- findAllByOrderByCreatoIlDesc
- findCategorieDistinte

Motivo: recuperare catalogo ordinato e categorie dinamiche per il frontend.

### Passo 3.6 - Service applicativo
Ho creato:
- ProdottoArtigianaleService

Responsabilita:
- validazione descrizione max 3000 parole
- creazione e salvataggio prodotto
- mapping verso DTO di risposta
- lettura catalogo e categorie

Motivo: isolare la business logic dal controller e mantenere codice estendibile.

### Passo 3.7 - API REST
Ho completato:
- RegistrazioneController

Endpoint realizzati:
- POST /api/prodotti
- GET /api/prodotti
- GET /api/prodotti/categorie

Dettagli:
- CORS abilitato per http://localhost:5173
- validazione richiesta con @Valid
- response POST con status 201 CREATED

### Passo 3.8 - DTO request/response
Ho aggiunto:
- ProdottoRequest (input validato)
- ProdottoResponse (output verso frontend)

Motivo: evitare esposizione diretta della entity e rendere il contratto API chiaro.

## 4) Tutorial passo-passo frontend

### Passo 4.1 - Verifica base frontend inizializzato
Il modulo frontend era un template Vite standard; ho sostituito il contenuto con una implementazione dedicata alla traccia.

### Passo 4.2 - Architettura a componenti
Ho creato struttura pulita:
- components
- hooks
- services
- types

Motivo: separare UI, stato, chiamate HTTP e modelli dati.

### Passo 4.3 - Tipi condivisi frontend
In src/types/prodotto.ts:
- ProdottoPayload
- Prodotto

Motivo: tipizzazione forte del form e del catalogo.

### Passo 4.4 - Layer API
In src/services/prodottiApi.ts:
- caricaCatalogo
- caricaCategorie
- inserisciProdotto

Motivo: centralizzare le fetch ed evitare logica HTTP nei componenti.

### Passo 4.5 - Hook custom stato catalogo
In src/hooks/useCatalogo.ts:
- caricamento iniziale catalogo + categorie
- gestione loading/errore
- aggiornamento catalogo dopo inserimento prodotto

Motivo: mantenere App.tsx corto e orientato alla composizione.

### Passo 4.6 - Sezioni richieste dalla traccia
Ho implementato le sezioni in componenti distinti:

1. HeroSection
- Hero introduttiva
- CTA verso modulo e catalogo

2. ChiSiamoSection
- Presentazione rete e sostenibilita

3. VetrinaSection
- Prodotti in evidenza (top 3, con fallback statico)

4. CategorieSection
- Categorie dinamiche dal backend (con fallback)

5. TestimonianzeSection
- Storie artigiani

6. InserimentoProdottoSection
- Form completo campi obbligatori
- submit asincrono

7. CatalogoSection
- Mostra titolo, descrizione breve, prezzo e contatto venditore

### Passo 4.7 - Modal feedback invio
Ho aggiunto FeedbackModal per notificare l'utente dopo invio avvenuto con successo.

### Passo 4.8 - Stile responsive e customizzabile
Ho riscritto:
- src/index.css (token globali, tipografia, tema)
- src/App.css (layout, sezioni, card, form, modal)

Scelte:
- design coerente con tema artigianato/sostenibilita
- codice CSS leggibile e con classi semantiche
- comportamento responsive mobile/desktop

## 5) Integrazione frontend-backend

Flusso implementato:
1. Utente clicca CTA e apre il modulo
2. Compila campi obbligatori
3. Frontend invia JSON al POST /api/prodotti
4. Backend valida e salva su H2
5. Frontend mostra popup di conferma
6. Catalogo e categorie si aggiornano a schermo

## 6) Verifica funzionale eseguita

Backend:
- comando: mvnw.cmd -q test
- esito: test contextLoads superato
- evidenza: tabella prodotti_artigianali creata in H2

Frontend:
- comando: npm run build
- esito: build TypeScript/Vite completata con successo

## 7) Avvio rapido locale

Backend:
1. Aprire terminale in artigianibackend
2. Eseguire: mvnw.cmd spring-boot:run
3. URL utili:
	- API: http://localhost:8080/api/prodotti
	- Swagger: http://localhost:8080/swagger-ui.html
	- H2 console: http://localhost:8080/h2-console

Frontend:
1. Aprire terminale in artigianifrontend
2. Eseguire: npm run dev
3. Aprire URL Vite (tipicamente http://localhost:5173)

## 8) Mappa requisiti traccia -> implementazione

Landing con sezioni richieste:
- HERO INTRODUTTIVA: SI
- CHI SIAMO: SI
- VETRINA PRODOTTI: SI
- CATEGORIE: SI
- TESTIMONIANZE: SI
- MODULO INSERIMENTO PRODOTTO: SI
- CATALOGO con titolo/descrizione breve/prezzo/contatto: SI

Integrazione backend:
- invio dati form al servizio REST: SI
- popup/modal conferma invio: SI
- persistenza su DB: SI (H2 in-memory per uso rapido)

## 9) Note per future customizzazioni

1. Per passare da H2 a MySQL:
- sostituire datasource in application.properties
- mantenere invariato il codice applicativo

2. Per estendere il form:
- aggiungere campo in ProdottoPayload
- estendere ProdottoRequest/Entity/Service
- aggiungere input nel componente InserimentoProdottoSection

3. Per filtri avanzati catalogo:
- aggiungere endpoint dedicati in repository/service/controller
- introdurre stato filtro nel frontend