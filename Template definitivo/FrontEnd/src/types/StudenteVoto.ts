// CUSTOM ESAME:
// questo tipo rappresenta i dati restituiti dal backend per la lista.
// Se rinomini StudenteVoto in Evento/Prodotto/Donazione, aggiorna anche questo file
// e i campi usati in StudentiVotiSection.tsx.
export type StudenteVoto = {
  id: number
  nomeStudente: string
  materia: string
  voto: number
  classe: string
}
