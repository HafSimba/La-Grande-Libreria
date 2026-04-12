# La Grande Libreria

Repository pensata come raccolta di risorse riutilizzabili per progetti web, con particolare focus su componenti FrontEnd React e template pronti all'uso.

## Come e organizzata la repository

Questa repository e una monorepo: contiene piu progetti singoli e cartelle di supporto, ognuno con il proprio scopo.

Struttura principale:

- `FrontEnd/Componenti`: libreria di componenti UI
- `FrontEnd/TemplateLanding`: esempio completo di landing page React
- `BackEnd/`: materiale backend e template
- `EsempiCompleti/`: area per esempi completi
- `tracce-custom/`: tracce di prova

## Componenti FrontEnd

In `FrontEnd/Componenti` ogni componente e organizzato in una cartella dedicata.

All'interno di ogni cartella trovi:

- file `.tsx` del componente
- file `.css` per lo stile
- file `.md` di esempio con indicazioni di implementazione in un progetto React generico

Questa struttura rende semplice:

1. consultare l'esempio di utilizzo
2. copiare/adattare il componente nel tuo progetto
3. applicare gli stili associati

## Esempio pronto: Template Landing

In `FrontEnd/TemplateLanding` e presente un progetto React completo che mostra una landing page realizzata usando i componenti del template.

E il riferimento pratico principale per capire:

- come assemblare i componenti in una pagina reale
- come organizzare la struttura di un progetto frontend
- come avviare un template in sviluppo locale

## Tutorial avvio progetti completi

In repository sono presenti piu aree, ma i progetti completi avviabili (frontend + backend) dentro EsempiCompleti sono:

- ArtigianiLocali
- EsempioSimulazione

Nota importante: entrambi i backend usano la porta 8080. Avviali uno alla volta, oppure cambia la porta in application.properties.

### Prerequisiti

- Java 21
- Node.js (consigliato LTS recente) e npm
- Maven Wrapper gia incluso nei progetti backend
- MySQL locale solo per EsempioSimulazione

### 1) ArtigianiLocali (backend Spring Boot + frontend React/Vite)

#### Avvio backend

Windows:

```powershell
cd EsempiCompleti/ArtigianiLocali/artigianibackend
.\mvnw.cmd spring-boot:run
```

macOS/Linux:

```bash
cd EsempiCompleti/ArtigianiLocali/artigianibackend
./mvnw spring-boot:run
```

Servizi utili backend:

- API base: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html
- H2 Console: http://localhost:8080/h2-console

#### Avvio frontend

```bash
cd EsempiCompleti/ArtigianiLocali/artigianifrontend
npm install
npm run dev
```

Frontend disponibile su: http://localhost:5173

Nota: il frontend usa di default il backend su http://localhost:8080 (oppure VITE_API_URL se configurata).

### 2) EsempioSimulazione (GreenTechBackEnd + frontend React/Vite)

#### Preparazione database MySQL

Prima di avviare il backend, crea il database (se non esiste):

```sql
CREATE DATABASE greentech;
```

Verifica poi i parametri in:

- EsempiCompleti/EsempioSimulazione/backend/GreenTechBackEnd/src/main/resources/application.properties

Valori attuali:

- url: jdbc:mysql://localhost:3306/greentech
- username: jdbcuser
- password: cancerkid123

Se il tuo ambiente e diverso, aggiorna questi valori.

#### Avvio backend

Windows:

```powershell
cd EsempiCompleti/EsempioSimulazione/backend/GreenTechBackEnd
.\mvnw.cmd spring-boot:run
```

macOS/Linux:

```bash
cd EsempiCompleti/EsempioSimulazione/backend/GreenTechBackEnd
./mvnw spring-boot:run
```

#### Avvio frontend

```bash
cd EsempiCompleti/EsempioSimulazione/frontend
npm install
npm run dev
```

Frontend disponibile su: http://localhost:5173

Nota: il frontend chiama il backend su http://localhost:8080 con endpoint /registrazione/*.

### 3) TemplateLanding (solo frontend)

Resta disponibile anche il template frontend standalone:

```bash
cd FrontEnd/TemplateLanding
npm install
npm run dev
```

## Collaborazione

Per mantenere la repository chiara e facile da usare:

- aggiungi nuovi componenti in cartelle dedicate dentro `FrontEnd/Componenti`
- includi sempre `.tsx`, `.css` e file `.md` di esempio 
- Oppure utilizza i prompt della cartella `.prompts` per la sezione indicata
- se aggiungi un nuovo progetto avviabile, aggiorna questo README con path e comandi di start
