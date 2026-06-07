# Tutorial customizzazione esame

Questo template e pensato per essere modificato velocemente in base alla traccia ricevuta.

La regola principale e semplice:

```text
campi form React = chiavi URLSearchParams = @RequestParam backend = campi entity Java
```

Se questi nomi non combaciano, frontend e backend non comunicano correttamente.

## 1. Leggi la traccia e trova il dominio

Prima identifica cosa devi salvare.

Esempi:
- eventi culturali -> `Evento`
- prodotti artigianali -> `Prodotto`
- donazioni alimentari -> `Donazione`
- proposte scolastiche -> `Proposta`

Nel template attuale il dominio si chiama `Contatto`.
Durante l'esame puoi lasciarlo cosi se hai poco tempo, oppure rinominarlo per essere piu coerente con la traccia.

## 2. Cambia i testi della landing

File principali:
- `FrontEnd/src/components/Hero.tsx`
- `FrontEnd/src/components/Cards.tsx`
- `FrontEnd/src/components/Footer.tsx`
- `FrontEnd/src/sections/HeroSection.tsx`
- `FrontEnd/src/sections/InfoSection.tsx`
- `FrontEnd/src/sections/CardsSection.tsx`
- `FrontEnd/src/sections/ContactFormSection.tsx`

Cambia:
- titolo hero;
- sottotitolo;
- sezioni richieste dalla traccia;
- testi delle card;
- testo footer.

Non partire dal CSS: prima sistema contenuti e sezioni richieste.

## 2.1. Aggiungi o rimuovi sezioni

La `HomePage.tsx` deve solo assemblare sezioni.

Per rimuovere una sezione:
1. elimina il tag da `HomePage.tsx`;
2. elimina l'import in alto;
3. se non serve piu, cancella il file relativo in `src/sections`.

Per aggiungere una sezione:
1. crea un nuovo file in `src/sections`, per esempio `CatalogoSection.tsx`;
2. importa la sezione in `HomePage.tsx`;
3. inserisci il tag nella posizione desiderata.

## 3. Cambia il form frontend

File:
- `FrontEnd/src/components/Form.tsx`
- `FrontEnd/src/hooks/useForm.ts`

Per ogni nuovo campo:

1. in `useForm.ts` crea lo state:

```ts
const [titoloEvento, setTitoloEvento] = useState<string>('')
```

2. crea l'handler:

```ts
const handleTitoloEvento = (e: React.ChangeEvent<HTMLInputElement>) => {
  setTitoloEvento(e.target.value)
}
```

3. aggiungi il campo nel payload:

```ts
const contatto = new URLSearchParams({
  titoloEvento,
})
```

4. ritorna valore e handler:

```ts
return {
  titoloEvento,
  handleTitoloEvento,
}
```

5. in `Form.tsx` aggiungi l'input collegato a `value` e `onChange`.

## 4. Cambia il backend

File:
- `backend/src/main/java/backend/Contatto.java`
- `backend/src/main/java/backend/ContattoService.java`
- `backend/src/main/java/backend/rest/ContattoController.java`

Per ogni campo nuovo:

1. aggiungi il campo nell'entity:

```java
private String titoloEvento;
```

2. aggiungilo nel costruttore senza `id`;
3. aggiungilo nel metodo del service;
4. aggiungilo come `@RequestParam` nel controller;
5. controlla che il nome sia identico al payload React.

Esempio:

```java
@RequestParam String titoloEvento
```

deve combaciare con:

```ts
new URLSearchParams({
  titoloEvento,
})
```

## 5. Cambia gli endpoint solo se serve

Frontend POST:

```ts
fetch('http://localhost:8080/contatti/invia')
```

Backend:

```java
@RequestMapping("/contatti")
@PostMapping("/invia")
```

Se vuoi usare `/eventi/invia`, cambia entrambi.

Per la lista:

```ts
useApi('http://localhost:8080/contatti/tutti')
```

deve combaciare con:

```java
@RequestMapping("/contatti")
@GetMapping("/tutti")
```

## 6. Aggiorna la pagina lista

File:
- `FrontEnd/src/pages/AdminPage.tsx`
- `FrontEnd/src/sections/AdminContattiSection.tsx`
- `FrontEnd/src/types/Contatto.ts`
- `FrontEnd/src/hooks/useApi.ts`

Aggiorna il tipo TypeScript con i campi che arrivano dal backend.
Poi cambia il rendering delle card admin per mostrare i dati richiesti dalla traccia.

Esempio:

```tsx
<p>Titolo: {contatto.titoloEvento}</p>
<p>Luogo: {contatto.luogo}</p>
```

## 7. Cambia database

File:
- `backend/src/main/resources/application.properties`

Cambia il nome database:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/nome_database
```

Poi crea il database in MySQL:

```sql
CREATE DATABASE nome_database;
```

## 8. Verifica finale

Frontend:

```bash
npm run build
```

Backend:

```powershell
.\mvnw.cmd test
```

Test manuale:
1. avvia backend;
2. avvia frontend;
3. compila il form;
4. invia;
5. apri la pagina lista;
6. verifica che il dato inviato venga mostrato.

## Checklist veloce da esame

- Ho cambiato i testi della landing.
- Ho inserito tutte le sezioni richieste.
- Il form contiene tutti i campi obbligatori.
- Ogni campo del form e in `useForm.ts`.
- Ogni chiave `URLSearchParams` esiste nel controller come `@RequestParam`.
- Ogni `@RequestParam` viene passato al service.
- Ogni campo viene salvato nell'entity.
- La pagina lista mostra i dati richiesti.
- Frontend e backend usano gli stessi endpoint.
- Build frontend e test backend passano.

## Login e pagina admin

Il template contiene una login page semplice:

- `FrontEnd/src/pages/LoginPage.tsx`
- `FrontEnd/src/components/LoginForm.tsx`
- `FrontEnd/src/hooks/useLogin.ts`
- backend `Utente.java`, `UtenteRepository.java`, `UtenteService.java`, `UtenteController.java`

La registrazione salva un utente nel database. Il login passa solo se email e password combaciano con una riga salvata. Per rimuovere login/admin elimina le route `/login` e `/admin` da `router.tsx`, il link dalla navbar, i file frontend login/admin e i file backend `Utente*`.

La pagina admin mostra i dati inseriti dal form pubblico:

- `FrontEnd/src/pages/AdminPage.tsx`
- `FrontEnd/src/sections/AdminContattiSection.tsx`

Per cambiare le card admin aggiorna `AdminContattiSection.tsx` dopo aver cambiato campi in `Contatto.ts`, `Form.tsx`, `useForm.ts` e nei file backend `Contatto*`.
