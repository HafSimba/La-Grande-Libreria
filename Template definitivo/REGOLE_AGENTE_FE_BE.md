# Regole Agente FE-BE (React TS + Spring Boot)

## Scopo
Questo documento definisce le regole obbligatorie per un agente che deve lavorare su:
- Frontend: `EsempiCompleti/EsempioSimulazione/frontend`
- Backend: `EsempiCompleti/EsempioSimulazione/backend/GreenTechBackEnd`

L'agente deve seguire in modo rigido il pattern gia presente nel progetto, mantenendo la compatibilita della comunicazione frontend-backend.

## Pattern attuale identificato

### Frontend (React + TypeScript)
Struttura sorgente attuale:
- `src/components`: componenti UI (es. `Form.tsx`, `Navbar.tsx`, `Footer.tsx`)
- `src/pages`: pagine route-level (es. `HomePage.tsx`, `PropostePage.tsx`)
- `src/hooks`: logica di integrazione e stato (es. `useApi.ts`, `useForm.ts`)
- `src/types`: tipi TypeScript condivisi lato frontend (es. `Proposta.ts`)
- `src/router.tsx`: definizione route
- `src/main.tsx`: bootstrap app

Pattern di comunicazione FE:
- GET dati via hook `useApi(url)` con `fetch`
- POST form via hook `useForm()` con `fetch`
- Payload POST in formato `application/x-www-form-urlencoded` tramite `URLSearchParams`
- URL backend hardcoded su `http://localhost:8080`

### Backend (Java + Spring Boot)
Pattern a layer:
- `rest/RegistrazioneController.java`: endpoint REST + CORS + mapping parametri
- `backend/RegistrazioneService.java`: logica applicativa
- `backend/RegistrazioneRepository.java`: persistenza JPA
- `backend/Registrazione.java`: entity JPA
- `application.properties`: configurazione datasource
- `pom.xml`: dipendenze e plugin build

## Contratto di comunicazione FE-BE verificato

### Endpoint POST
- URL: `POST /registrazione/registra`
- Content-Type richiesto dal backend: `application/x-www-form-urlencoded`
- Parametri richiesti (RequestParam):
  - `nomeScuola`
  - `grado`
  - `provincia`
  - `classe`
  - `nomeDocente`
  - `email`
  - `nomeProgetto`
  - `descrizione` (max 3000)
- Risposta: oggetto `Registrazione` JSON

### Endpoint GET
- URL: `GET /registrazione/mostratutti`
- Risposta: lista JSON di `Registrazione`

### CORS
- Origine consentita nel controller: `http://localhost:5173`
- Coerenza con frontend Vite: OK

## Dipendenze backend da rispettare (pom.xml)
L'agente deve mantenere e rispettare queste dipendenze (salvo richiesta esplicita di migrazione):
- `spring-boot-starter-data-jpa`
- `spring-boot-starter-webmvc`
- `springdoc-openapi-starter-webmvc-ui`
- `spring-boot-devtools` (runtime)
- `mysql-connector-j` (runtime)
- `lombok`
- test starter JPA/WebMVC

## Regole rigide per l'agente (OBBLIGATORIE)

### 1) Regole di struttura frontend
1. Tutti i componenti riusabili UI devono stare in `src/components`.
2. Tutte le pagine devono stare in `src/pages`.
3. Tutta la logica di chiamata API/stato form deve stare in `src/hooks`.
4. Tutti i tipi TS condivisi tra componenti/hooks/pagine devono stare in `src/types`.
5. Nessuna pagina deve contenere logica API complessa inline: usare hook dedicati.
6. Nessun componente presentazionale deve fare fetch diretto se la logica puo stare in hook.

### 2) Regole di comunicazione frontend-backend
1. Per endpoint che usano `@RequestParam`, inviare dati con `URLSearchParams` e `Content-Type: application/x-www-form-urlencoded`.
2. I nomi dei campi inviati dal frontend devono essere identici ai nomi dei parametri backend.
3. Non cambiare path endpoint (`/registrazione/registra`, `/registrazione/mostratutti`) senza aggiornare entrambi i lati.
4. Ogni modifica al payload backend impone aggiornamento dei tipi TS in `src/types`.
5. Gestire sempre `response.ok` e casi di errore lato frontend.

### 3) Regole backend Spring
1. Gli endpoint REST devono rimanere in package `rest`.
2. La logica applicativa deve rimanere in service (`backend/*Service.java`).
3. Accesso DB solo via repository JPA (`backend/*Repository.java`).
4. Entity JPA in package `backend` con annotazioni corrette (`@Entity`, `@Id`, ecc.).
5. Validazioni input lato backend sempre esplicite (es. `@Size` su campi testuali).

### 4) Regole di consistenza tra layer
1. Ogni nuova feature dati deve toccare in ordine:
   - Entity/Repository
   - Service
   - Controller
   - Hook frontend
   - Type frontend
   - Pagina/Componente UI
2. Nessun campo nuovo deve esistere solo su un lato (frontend o backend).
3. Dopo modifica endpoint, verificare sempre CORS, URL, metodo HTTP e Content-Type.

### 5) Regole di quality gate
Prima di chiudere un task l'agente deve verificare:
1. Build frontend senza errori TypeScript.
2. Build backend Maven senza errori compilazione.
3. Endpoint chiamati dal frontend corrispondono ai mapping backend.
4. Parametri inviati dal form corrispondono 1:1 ai `@RequestParam`.
5. Nessuna regressione nella struttura cartelle (`components`, `pages`, `hooks`, `types`).

### 6) Regole obbligatorie di codice personalizzabile (template universale)
Queste regole hanno priorita alta: il codice deve poter essere riusato e adattato rapidamente per qualsiasi sito.

1. Testi e contenuti devono essere centralizzati in file dedicati (es. `src/content/siteContent.ts`) e non sparsi nei componenti.
2. Colori, tipografia, spaziature, radius e ombre devono essere definiti come design tokens (es. variabili CSS in `src/styles/theme.css`).
3. I componenti devono essere guidati da props tipizzate e default sensati; evitare valori hardcoded non necessari.
4. Le pagine devono assemblare componenti configurabili, non contenere logica visuale ripetuta.
5. Ogni sezione grafica importante deve poter essere attivata/disattivata da configurazione (es. flag in `src/config/siteConfig.ts`).
6. I dati di input (form) devono essere definiti da schema/configurazione (campi, label, placeholder, validazioni) per poter cambiare modulo senza riscrivere il componente.
7. Comunicazione backend sempre mediata da un layer unico (es. `src/services/apiClient.ts` + `src/services/endpoints.ts`) con `BASE_URL` centralizzata.
8. Il mapping tra dati frontend e payload backend deve essere esplicito e facilmente rintracciabile in funzioni dedicate (es. `toBackendPayload`).
9. Niente numeri o stringhe magiche in stile/layout/API: usare costanti nominate.
10. Ogni nuova feature deve essere pensata in ottica multi-progetto: facile rinomina brand, cambio palette, cambio contenuti, cambio endpoint.

### 7) Regole obbligatorie di commentazione e guida alla personalizzazione
L'agente deve commentare il codice in modo utile, breve e orientato a chi personalizzera il template.

1. In ogni file strategico (config, tema, componenti base, servizi API) inserire un commento iniziale `COME PERSONALIZZARE`.
2. I commenti devono spiegare almeno:
  - come cambiare testi e contenuti,
  - come cambiare colori e apparenza,
  - come aggiungere/rimuovere campi di input,
  - come collegare o cambiare endpoint backend.
3. I commenti non devono descrivere l'ovvio riga per riga: devono essere istruzioni pratiche di modifica.
4. Quando un componente espone props importanti, documentare il significato delle props con breve commento vicino al tipo.
5. Per le chiamate API, documentare contratto minimo: metodo, endpoint, formato payload, forma risposta attesa.

### 8) Checklist aggiuntiva prima della consegna
1. Cambiare un testo principale deve richiedere modifica in un solo file di contenuti.
2. Cambiare palette/base style deve richiedere modifica in un solo file tema.
3. Cambiare `BASE_URL` backend deve richiedere modifica in un solo punto.
4. Aggiungere un campo form standard deve richiedere solo aggiornamento schema/config + mapping payload.
5. Tutti i punti sopra devono essere documentati da commenti `COME PERSONALIZZARE`.

## Prompt operativo consigliato per l'agente
Usare questo testo come base:

"Lavora seguendo rigidamente il pattern di EsempioSimulazione.
Frontend React TS: componenti in src/components, pagine in src/pages, hook in src/hooks, tipi in src/types.
Backend Spring Boot: controller in rest, service/repository/entity in backend.
Mantieni la comunicazione FE-BE compatibile con endpoint /registrazione/registra (POST form-urlencoded) e /registrazione/mostratutti (GET).
I nomi dei campi frontend devono combaciare con i @RequestParam backend.
Ogni modifica a endpoint o payload deve essere allineata su entrambi i lati e validata con build.
In piu, genera codice modulare, facilmente modificabile e commentato (`COME PERSONALIZZARE`) per testi, colori, apparenza estetica, inserimento dati e comunicazione backend.
Centralizza contenuti, tema e configurazioni API in punti unici per rendere il template riusabile in qualsiasi contesto." 

## Nota importante sul repository backend
Nel backend esiste anche una copia annidata in `backend/GreenTechBackEnd/greentechbackend`.
Per evitare inconsistenze, usare come riferimento principale il progetto root:
- `backend/GreenTechBackEnd/pom.xml`
- `backend/GreenTechBackEnd/src/...`

Se si aggiorna uno dei due progetti, verificare esplicitamente quale e quello usato in esecuzione.