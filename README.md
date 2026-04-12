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

## Avvio dei progetti nella monorepo

Poiche la repository contiene progetti separati, per avviarne uno devi prima entrare nella cartella del progetto specifico.

Flusso generale:

1. spostati nella cartella del progetto
2. installa le dipendenze
3. avvia il server di sviluppo

Esempio attuale (valido ora):

```bash
cd FrontEnd/TemplateLanding
npm install
npm run dev
```

Nota: al momento il flusso di avvio e documentato per `TemplateLanding`. In seguito verranno aggiunti altri template/progetti con relative istruzioni.

## Collaborazione

Per mantenere la repository chiara e facile da usare:

- aggiungi nuovi componenti in cartelle dedicate dentro `FrontEnd/Componenti`
- includi sempre `.tsx`, `.css` e file `.md` di esempio 
- Oppure utilizza i prompt della cartella `.prompts` per la sezione indicata
- se aggiungi un nuovo progetto avviabile, aggiorna questo README con path e comandi di start
