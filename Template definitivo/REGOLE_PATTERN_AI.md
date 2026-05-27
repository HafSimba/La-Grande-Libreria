# Regole e pattern AI - EsempioSimulazione

## Scopo del documento

Questo documento descrive le regole da seguire per creare nuovi template full stack partendo dal modello di `EsempioSimulazione`.

Un agente AI deve usare queste istruzioni come riferimento obbligatorio quando deve generare o modificare un progetto React TypeScript + Spring Boot simile a quelli richiesti nelle tracce d'esame.

Obiettivo principale:
- mantenere codice semplice e leggibile;
- rispettare la struttura insegnata al corso;
- evitare astrazioni non necessarie;
- mantenere frontend e backend allineati;
- rendere veloce la personalizzazione in base alla traccia ricevuta.

## Stack di riferimento

Frontend:
- React
- TypeScript
- Vite
- React Router
- CSS unico globale in `src/styles.css`
- Fetch API nativa

Backend:
- Java
- Spring Boot
- Maven
- Spring Web MVC
- Spring Data JPA
- MySQL
- Lombok
- SpringDoc OpenAPI

## Principio generale

Il progetto deve rimanere didattico, diretto e facile da spiegare.

Non introdurre:
- Redux;
- Context API;
- service layer frontend complessi;
- DTO frontend/backend inutili;
- librerie UI non richieste;
- validazioni avanzate se non richieste dalla traccia;
- architetture enterprise.

Usare invece:
- componenti React semplici;
- custom hook piccoli;
- pagine route-level;
- entity JPA;
- repository JPA;
- service Spring;
- controller REST.

## Struttura frontend obbligatoria

La cartella frontend deve seguire questa forma:

```text
frontend/
  src/
    components/
    hooks/
    pages/
    types/
    main.tsx
    router.tsx
    styles.css
```

### Regole cartelle frontend

`src/components`
- Contiene componenti riutilizzabili o sezioni UI.
- Esempi: `Navbar.tsx`, `NavbarAlt.tsx`, `Hero.tsx`, `Form.tsx`, `Footer.tsx`, `Card.tsx`.
- I componenti possono ricevere props semplici.
- I componenti non devono contenere fetch diretti, tranne casi banali esplicitamente richiesti.

`src/pages`
- Contiene le pagine principali collegate al router.
- Esempi: `HomePage.tsx`, `PropostePage.tsx`.
- Le pagine assemblano componenti e hook.
- Le pagine possono passare URL agli hook.

`src/hooks`
- Contiene la logica di stato e comunicazione.
- Esempi: `useForm.ts`, `useApi.ts`.
- Un hook deve fare una cosa chiara:
  - `useForm` gestisce stato campi e submit;
  - `useApi` gestisce GET e salvataggio dati in state.

`src/types`
- Contiene i tipi TypeScript condivisi.
- Esempio: `Proposta.ts`.
- I tipi devono rappresentare i dati ricevuti o usati dal frontend.

`src/router.tsx`
- Contiene tutte le route.
- Deve usare `createBrowserRouter`.

`src/main.tsx`
- Deve montare l'app con `RouterProvider`.

`src/styles.css`
- Contiene gli stili globali.
- Per questo pattern e accettabile usare classi Bootstrap-like o CSS copiato/adattato da template.

## Pattern routing frontend

Usare sempre questo schema:

```tsx
import { createBrowserRouter } from "react-router";

import { HomePage } from "./pages/HomePage";
import { PropostePage } from "./pages/PropostePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/proposte",
    element: <PropostePage />,
  },
];

export const router = createBrowserRouter(routes);
```

Regole:
- La home sta sempre su `/`.
- La pagina lista/catalogo puo stare su `/proposte`, `/catalogo`, `/offerte`, `/eventi` o nome coerente con la traccia.
- Non mettere il router dentro `App.tsx` se il progetto usa questo pattern.
- `main.tsx` deve importare `router` e usare `RouterProvider`.

## Pattern pagina home

`HomePage.tsx` deve:
- importare `Navbar`;
- importare le sezioni principali;
- importare `Form`;
- importare `Footer`;
- assemblare la landing in ordine verticale.

Schema consigliato:

```tsx
export const HomePage = () => {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero imgSrc="..." />
      </section>

      <section id="about">
        {/* contenuto descrittivo */}
      </section>

      <section id="testimonianze">
        {/* contenuto descrittivo */}
      </section>

      <section id="form">
        <Form />
      </section>

      <Footer />
    </>
  );
};
```

Regole:
- La home puo contenere testo statico direttamente nella pagina.
- Le sezioni richieste dalla traccia devono essere visibili e ordinate.
- La CTA deve portare al form con link ad ancora, per esempio `href="#form"`.
- Non serve creare una cartella `sections` se il pattern del progetto usa `components`.

## Pattern pagina lista dati

La pagina lista deve:
- usare una navbar alternativa se serve;
- chiamare `useApi`;
- tipizzare il risultato;
- fare `map` dei dati;
- mostrare almeno i campi richiesti dalla traccia.

Schema:

```tsx
import { useApi } from "../hooks/useApi";
import type { Proposta } from "../types/Proposta";

export const PropostePage = () => {
  const proposte: Proposta[] = useApi(
    "http://localhost:8080/registrazione/mostratutti",
  );

  return (
    <>
      {proposte.map((proposta) => (
        <p className="lead">
          {proposta.nomeProgetto} {proposta.descrizione}
        </p>
      ))}
    </>
  );
};
```

Regole:
- L'URL GET puo essere hardcoded nella pagina, come nel progetto di riferimento.
- `useApi` riceve l'URL come parametro.
- La pagina non deve implementare direttamente `useEffect` e `fetch`.
- Se si usa `.map`, aggiungere una `key` quando possibile, preferibilmente `id` se presente.

## Pattern hook GET - useApi

Usare un hook dedicato per leggere dati dal backend.

Schema obbligatorio:

```tsx
import { useEffect, useState } from "react";
import type { Proposta } from "../types/Proposta";

export const useApi = (url: string) => {
  const [data, setData] = useState<Proposta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Errore: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Errore nel fetch:", err);
      }
    };
    fetchData();
  }, [url]);

  return data;
};
```

Regole:
- `useApi` deve stare in `src/hooks/useApi.ts`.
- Deve usare `useEffect` per caricare dati al mount.
- Deve salvare i dati in uno state array.
- Deve controllare `response.ok`.
- Deve gestire errori con `console.error`.
- Non aggiungere loading/error state se non richiesto.

## Pattern hook POST form - useForm

Il form deve essere gestito da un hook dedicato.

Il pattern del corso usa:
- uno `useState` per ogni campo;
- un handler per ogni campo;
- un `handleSubmit`;
- invio con `URLSearchParams`;
- `Content-Type: application/x-www-form-urlencoded`;
- endpoint hardcoded nel fetch.

Schema:

```tsx
import { useState } from "react";

export const useForm = () => {
  const [campoUno, setCampoUno] = useState<string>("");
  const [campoDue, setCampoDue] = useState<string>("");

  const handleCampoUno = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampoUno(e.target.value);
  };

  const handleCampoDue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampoDue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = new URLSearchParams({
      campoUno,
      campoDue,
    });

    await fetch("http://localhost:8080/percorso/endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });
  };

  return {
    campoUno,
    campoDue,
    handleCampoUno,
    handleCampoDue,
    handleSubmit,
  };
};
```

Regole:
- `useForm` deve stare in `src/hooks/useForm.ts`.
- Il nome degli state deve combaciare con il significato dei campi.
- Ogni input del form deve avere il suo valore controllato.
- Ogni handler deve ricevere `React.ChangeEvent<HTMLInputElement>`.
- Per campi numerici usare `Number(e.target.value)`.
- Se il campo numerico e vuoto, usare fallback semplice come `0`.
- Il payload deve usare chiavi identiche agli `@RequestParam` backend.
- Non inviare JSON se il controller usa `@RequestParam`.
- Non usare Axios.

## Pattern componente Form

`Form.tsx` deve:
- importare `useForm`;
- destrutturare valori e handler;
- usare `onSubmit={handleSubmit}`;
- collegare ogni input a `value` e `onChange`;
- usare classi CSS semplici o Bootstrap-like.

Schema:

```tsx
import { useForm } from "../hooks/useForm";

export const Form = () => {
  const {
    handleSubmit,
    campoUno,
    handleCampoUno,
    campoDue,
    handleCampoDue,
  } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <input value={campoUno} onChange={handleCampoUno} />
      <input value={campoDue} onChange={handleCampoDue} />
      <input type="submit" value="Manda" />
    </form>
  );
};
```

Regole:
- Il componente form non deve conoscere dettagli JPA o database.
- Il componente form non deve costruire `URLSearchParams`.
- Il componente form deve solo collegare UI e hook.
- I testi delle label possono essere scritti direttamente nel componente, come nel riferimento.

## Pattern tipi frontend

Creare un tipo per i dati letti dal backend.

Esempio:

```ts
export type Proposta = {
  nomeProgetto: string;
  descrizione: string;
  nomeScuola: string;
};
```

Regole:
- Il tipo deve stare in `src/types`.
- Il tipo deve contenere almeno i campi usati dalla pagina lista.
- Se il backend restituisce `id`, includerlo se serve per `key`.
- Non creare tipi troppo complessi se non servono.

## Contratto frontend-backend

Il contratto tra frontend e backend e la parte piu importante.

Nel progetto di riferimento:

POST:
- frontend: `fetch("http://localhost:8080/registrazione/registra")`
- backend: `@PostMapping("/registra")`
- controller base: `@RequestMapping("/registrazione")`
- content type: `application/x-www-form-urlencoded`
- backend riceve con `@RequestParam`

GET:
- frontend: `fetch("http://localhost:8080/registrazione/mostratutti")`
- backend: `@GetMapping("/mostratutti")`
- ritorna lista JSON

Regola obbligatoria:
ogni chiave del `URLSearchParams` deve avere lo stesso nome del parametro `@RequestParam`.

Esempio corretto:

```tsx
const payload = new URLSearchParams({
  nomeScuola,
  grado: String(grado),
  provincia,
});
```

```java
@PostMapping("/registra")
public Registrazione registra(
    @RequestParam String nomeScuola,
    @RequestParam Integer grado,
    @RequestParam String provincia) {
  ...
}
```

Esempio sbagliato:

```tsx
const payload = new URLSearchParams({
  schoolName: nomeScuola,
});
```

```java
@RequestParam String nomeScuola
```

Questo non funziona perche `schoolName` e `nomeScuola` sono nomi diversi.

## Struttura backend obbligatoria

La cartella backend deve seguire il pattern:

```text
backend/
  src/
    main/
      java/
        <base-package>/
          Application.java
          backend/
            NomeEntity.java
            NomeRepository.java
            NomeService.java
          rest/
            NomeController.java
      resources/
        application.properties
```

Nel progetto di riferimento:

```text
ttf/greentech/
  GreentechbackendApplication.java
  backend/
    Registrazione.java
    RegistrazioneRepository.java
    RegistrazioneService.java
  rest/
    RegistrazioneController.java
```

Regole:
- Entity, repository e service stanno nel package `backend`.
- Controller REST sta nel package `rest`.
- La classe application sta nel package padre.
- Non mettere controller e repository nella stessa cartella.
- Non mettere logica di salvataggio nel controller.

## Pattern entity JPA

L'entity deve:
- avere `@Entity`;
- avere `@Id`;
- avere `@GeneratedValue(strategy = GenerationType.IDENTITY)`;
- usare Lombok con `@Data`, `@AllArgsConstructor`, `@NoArgsConstructor`;
- avere un costruttore personalizzato senza `id`;
- contenere i campi richiesti dalla traccia.

Schema:

```java
package nomeprogetto.backend;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Registrazione {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nomeScuola, provincia, classe, nomeDocente, email, nomeProgetto;
  private Integer grado;

  @Column(length = 3000)
  private String descrizione;

  public Registrazione(String nomeScuola, Integer grado, String provincia, String classe,
      String nomeDocente, String email, String nomeProgetto, String descrizione) {
    this.nomeScuola = nomeScuola;
    this.grado = grado;
    this.provincia = provincia;
    this.classe = classe;
    this.nomeDocente = nomeDocente;
    this.email = email;
    this.nomeProgetto = nomeProgetto;
    this.descrizione = descrizione;
  }
}
```

Regole:
- Non scrivere getter e setter manuali se si usa Lombok `@Data`.
- Usare `String` per campi testuali.
- Usare `Integer` per numeri interi.
- Usare `@Column(length = 3000)` su descrizioni lunghe.
- Il costruttore custom deve contenere tutti i campi inseriti dal form, tranne `id`.

## Pattern repository

Il repository deve estendere `JpaRepository<Entity, Long>`.

Schema:

```java
package nomeprogetto.backend;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrazioneRepository extends JpaRepository<Registrazione, Long> {

}
```

Regole:
- Non implementare manualmente CRUD base.
- Non aggiungere query se non richieste.
- Tenere il file molto corto.

## Pattern service

Il service deve:
- avere `@Service`;
- usare `@Autowired` sul repository;
- creare l'entity;
- salvare con repository;
- esporre metodo per leggere tutti i dati.

Schema:

```java
package nomeprogetto.backend;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrazioneService {

  @Autowired
  private RegistrazioneRepository rp;

  public Registrazione registrazione(String nomeScuola, Integer grado, String provincia,
      String classe, String nomeDocente, String email, String nomeProgetto, String descrizione) {
    Registrazione r = new Registrazione(nomeScuola, grado, provincia, classe,
        nomeDocente, email, nomeProgetto, descrizione);
    return rp.save(r);
  }

  public List<Registrazione> mostraTutti() {
    return rp.findAll();
  }
}
```

Regole:
- Il service contiene la logica applicativa minima.
- Il controller chiama il service.
- Il service chiama il repository.
- Non fare `repository.save` direttamente nel controller.
- I nomi possono essere semplici, anche abbreviati, se coerenti con lo stile del progetto.

## Pattern controller REST

Il controller deve:
- stare nel package `rest`;
- avere `@RestController`;
- avere `@CrossOrigin(origins = "http://localhost:5173")`;
- avere `@RequestMapping`;
- avere un `@PostMapping` per inserire;
- avere un `@GetMapping` per leggere tutti;
- ricevere dati con `@RequestParam`;
- chiamare il service.

Schema:

```java
package nomeprogetto.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.constraints.Size;
import nomeprogetto.backend.Registrazione;
import nomeprogetto.backend.RegistrazioneService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/registrazione")
public class RegistrazioneController {

  @Autowired
  private RegistrazioneService rs;

  @PostMapping("/registra")
  public Registrazione registra(
      @RequestParam String nomeScuola,
      @RequestParam Integer grado,
      @RequestParam String provincia,
      @RequestParam String classe,
      @RequestParam String nomeDocente,
      @RequestParam String email,
      @RequestParam String nomeProgetto,
      @RequestParam @Size(max = 3000, message = "Limite di 3000 caratteri") String descrizione) {
    return rs.registrazione(nomeScuola, grado, provincia, classe,
        nomeDocente, email, nomeProgetto, descrizione);
  }

  @GetMapping("/mostratutti")
  public List<Registrazione> mostratutti() {
    return rs.mostraTutti();
  }
}
```

Regole:
- Non usare `@RequestBody` se il frontend invia `URLSearchParams`.
- Non usare DTO se non richiesto.
- Il metodo POST ritorna l'entity salvata.
- Il metodo GET ritorna `List<Entity>`.
- Applicare `@Size(max = 3000)` sulle descrizioni lunghe.
- Il CORS deve permettere `http://localhost:5173`, porta standard Vite.

## Pattern application.properties

Configurazione minima:

```properties
spring.application.name=nomeprogetto
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/nome_database
spring.datasource.username=jdbcuser
spring.datasource.password=password
```

Regole:
- Usare `ddl-auto=update` per creare/aggiornare tabelle durante l'esame.
- Il nome database deve essere coerente con il progetto.
- Se la traccia richiede MySQL, usare MySQL.
- Non complicare con profili multipli se non richiesto.

## Pattern pom.xml

Le dipendenze base devono includere:
- `spring-boot-starter-data-jpa`;
- `spring-boot-starter-webmvc`;
- `springdoc-openapi-starter-webmvc-ui`;
- `spring-boot-devtools`;
- `mysql-connector-j`;
- `lombok`;
- dipendenze test Spring.

Regole:
- Non rimuovere JPA.
- Non rimuovere Web MVC.
- Non rimuovere MySQL connector se la consegna chiede MySQL.
- Usare Maven Wrapper per avvio e test.

## Ordine obbligatorio di implementazione

Quando si adatta il template a una nuova traccia, procedere in questo ordine:

1. Leggere la traccia e identificare i campi del form.
2. Decidere nome progetto, nome entity e nome endpoint.
3. Backend: creare/modificare entity con i campi richiesti.
4. Backend: creare/modificare repository.
5. Backend: creare/modificare service.
6. Backend: creare/modificare controller con `@RequestParam`.
7. Backend: controllare `application.properties`.
8. Frontend: creare/modificare tipo in `src/types`.
9. Frontend: creare/modificare `useForm`.
10. Frontend: creare/modificare `Form.tsx`.
11. Frontend: creare/modificare `useApi`.
12. Frontend: creare/modificare pagina lista.
13. Frontend: aggiornare navbar e route.
14. Frontend: aggiornare testi/sezioni della landing.
15. Verificare che i nomi payload combacino con `@RequestParam`.
16. Eseguire build/test.

## Regole di adattamento da traccia

Per ogni traccia bisogna mappare:

Nome dominio:
- GreenTech -> Registrazione
- ArtigianiLocali -> Prodotto
- CulturaConnect -> Evento
- Food4All -> Donazione

Campi form:
- ogni campo obbligatorio della traccia deve esistere nel frontend;
- ogni campo frontend deve esistere nel backend;
- ogni campo backend deve essere valorizzato dal form.

Se la traccia chiede una lista/catalogo:
- aggiungere pagina dedicata;
- aggiungere route;
- usare `useApi`;
- mostrare i campi minimi richiesti.

Se la traccia chiede popup/modal:
- si puo aggiungere stato nel form o alert semplice;
- non introdurre librerie esterne solo per il popup.

## Checklist contratto API

Prima di concludere, verificare:

- Il POST frontend punta allo stesso path del controller.
- Il GET frontend punta allo stesso path del controller.
- Il backend usa `@RequestMapping` coerente.
- Il backend usa `@PostMapping` coerente.
- Il backend usa `@GetMapping` coerente.
- Il frontend invia `Content-Type: application/x-www-form-urlencoded`.
- Il frontend usa `URLSearchParams`.
- Ogni chiave del payload esiste come `@RequestParam`.
- Ogni `@RequestParam` esiste nel payload.
- I campi numerici vengono convertiti in stringa nel payload.
- CORS consente `http://localhost:5173`.

## Checklist frontend

- `main.tsx` usa `RouterProvider`.
- `router.tsx` contiene tutte le route.
- `HomePage.tsx` assembla navbar, sezioni, form e footer.
- `Form.tsx` importa `useForm`.
- `useForm.ts` contiene stato, handler e POST.
- `useApi.ts` contiene GET con `useEffect`.
- `types` contiene il tipo usato dalla pagina lista.
- Gli input sono controllati con `value` e `onChange`.
- Il submit usa `e.preventDefault()`.
- La pagina lista usa `.map`.
- La navbar permette navigazione alle sezioni e alla pagina lista.

## Checklist backend

- Entity annotata con `@Entity`.
- Entity ha `id` con `@GeneratedValue`.
- Entity usa Lombok.
- Repository estende `JpaRepository`.
- Service usa repository e salva entity.
- Controller usa service.
- Controller espone POST e GET.
- Controller usa `@RequestParam`.
- Controller usa `@CrossOrigin`.
- `application.properties` contiene datasource e `ddl-auto=update`.
- Il progetto compila con Maven.

## Quality gate finale

Eseguire, quando possibile:

Frontend:

```bash
npm run build
```

Backend:

```bash
./mvnw test
```

Su Windows:

```powershell
.\mvnw.cmd test
```

Verifica manuale consigliata:
1. Avviare backend su `http://localhost:8080`.
2. Avviare frontend su `http://localhost:5173`.
3. Compilare il form.
4. Inviare i dati.
5. Aprire la pagina lista.
6. Controllare che i dati inviati siano visibili.
7. Controllare Swagger su `http://localhost:8080/swagger-ui.html`.

## Errori da evitare

Non fare:
- frontend che invia JSON mentre backend usa `@RequestParam`;
- nomi payload diversi dai parametri backend;
- fetch dentro componenti grandi quando esiste un hook;
- controller che salva direttamente nel repository;
- entity senza costruttore custom;
- route non registrate;
- pagina lista senza tipo TypeScript;
- CORS mancante;
- endpoint frontend e backend non allineati;
- codice troppo astratto rispetto al modello del corso.

## Prompt consigliato per agente AI

Usare questo prompt quando si vuole generare un nuovo template:

```text
Lavora seguendo rigidamente il pattern di EsempioSimulazione.

Frontend:
- React TypeScript con Vite.
- Cartelle obbligatorie: components, hooks, pages, types.
- Routing in src/router.tsx con createBrowserRouter.
- main.tsx monta RouterProvider.
- HomePage assembla landing, navbar, sezioni, form e footer.
- Form.tsx usa useForm.
- useForm gestisce uno useState per ogni campo, un handler per ogni campo e submit con fetch.
- useApi gestisce GET con useEffect e ritorna un array tipizzato.
- Invio POST sempre con URLSearchParams e Content-Type application/x-www-form-urlencoded.

Backend:
- Spring Boot con package padre, sottopackage backend e rest.
- Entity, Repository e Service nel package backend.
- Controller nel package rest.
- Entity con @Entity, Lombok, id Long autogenerato e costruttore senza id.
- Repository estende JpaRepository<Entity, Long>.
- Service crea entity, salva con repository e restituisce findAll.
- Controller espone POST con @RequestParam e GET lista.
- CORS su http://localhost:5173.
- application.properties con MySQL e spring.jpa.hibernate.ddl-auto=update.

Regola fondamentale:
Le chiavi del payload frontend devono combaciare esattamente con i nomi degli @RequestParam backend.

Non introdurre architetture piu complesse del necessario.
Il codice deve essere semplice, didattico e coerente con il corso.
```

