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
- `FrontEnd/src/pages/HomePage.tsx`
- `FrontEnd/src/components/Hero.tsx`
- `FrontEnd/src/components/Cards.tsx`
- `FrontEnd/src/components/Footer.tsx`

Cambia:
- titolo hero;
- sottotitolo;
- sezioni richieste dalla traccia;
- testi delle card;
- testo footer.

Non partire dal CSS: prima sistema contenuti e sezioni richieste.

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
- `FrontEnd/src/pages/ContattiPage.tsx`
- `FrontEnd/src/types/Contatto.ts`
- `FrontEnd/src/hooks/useApi.ts`

Aggiorna il tipo TypeScript con i campi che arrivano dal backend.
Poi cambia il rendering della lista per mostrare i dati richiesti dalla traccia.

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

## Modulo opzionale studenti/voti

Il modulo `StudentiVotiSection` serve per tracce in cui devi inserire dati, mostrarli dal database e filtrarli. Per usarlo tieni in `HomePage.tsx` l'import e il tag `<StudentiVotiSection />`; per rimuoverlo elimina quel tag/import e, se non serve proprio, cancella anche `components/StudentiVotiSection.tsx`, `hooks/useStudentiVoti.ts`, `types/StudenteVoto.ts` e i file backend `StudenteVoto*`.

Per customizzarlo cambia i campi nello stesso ordine: input in `StudentiVotiSection.tsx`, state/payload in `useStudentiVoti.ts`, tipo TS in `StudenteVoto.ts`, entity/service/controller Java nei file `StudenteVoto*`. Le chiavi del `URLSearchParams` devono restare identiche agli `@RequestParam`.
