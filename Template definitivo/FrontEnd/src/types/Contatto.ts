// CUSTOM ESAME:
// questo tipo deve rappresentare i dati restituiti dal GET backend.
// Aggiornalo quando cambi campi nell'entity Java o quando la pagina lista mostra dati diversi.
export type Contatto = {
  id: number
  nome: string
  email: string
  telefono: string
  messaggio: string
}
