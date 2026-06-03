import { useEffect, useState } from 'react'
import type { StudenteVoto } from '../types/StudenteVoto'

export const useStudentiVoti = () => {
  // CUSTOM ESAME:
  // questi sono i campi del form di inserimento. Per un'altra traccia rinominali
  // e mantieni gli stessi nomi nel payload URLSearchParams e negli @RequestParam backend.
  const [nomeStudente, setNomeStudente] = useState<string>('')
  const [materia, setMateria] = useState<string>('')
  const [voto, setVoto] = useState<number>(0)
  const [classe, setClasse] = useState<string>('')

  // CUSTOM ESAME:
  // questi sono i campi di filtro della lista. Se vuoi filtrare per altri dati,
  // aggiungi qui lo state e poi aggiorna handleFiltra + endpoint backend.
  const [filtroMateria, setFiltroMateria] = useState<string>('')
  const [filtroClasse, setFiltroClasse] = useState<string>('')
  const [studentiVoti, setStudentiVoti] = useState<StudenteVoto[]>([])

  // CUSTOM ESAME:
  // carica tutti gli elementi dal database dopo un inserimento o quando premi "Mostra tutti".
  // Se cambi endpoint nel controller, cambia anche questo URL.
  const caricaTutti = async () => {
    try {
      const response = await fetch('http://localhost:8080/studenti-voti/tutti')
      if (!response.ok) throw new Error(`Errore: ${response.status}`)
      const result = await response.json()
      setStudentiVoti(result)
    } catch (err) {
      console.error('Errore nel fetch:', err)
    }
  }

  useEffect(() => {
    // CUSTOM ESAME:
    // caricamento iniziale della lista quando la sezione viene mostrata.
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/studenti-voti/tutti')
        if (!response.ok) throw new Error(`Errore: ${response.status}`)
        const result = await response.json()
        setStudentiVoti(result)
      } catch (err) {
        console.error('Errore nel fetch:', err)
      }
    }
    fetchData()
  }, [])

  const handleNomeStudente = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeStudente(e.target.value)
  }

  const handleMateria = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMateria(e.target.value)
  }

  const handleVoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuovoVoto = e.target.value === '' ? 0 : Number(e.target.value)
    setVoto(nuovoVoto)
  }

  const handleClasse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClasse(e.target.value)
  }

  const handleFiltroMateria = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroMateria(e.target.value)
  }

  const handleFiltroClasse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltroClasse(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // CUSTOM ESAME:
    // le chiavi devono combaciare con:
    // StudenteVotoController @RequestParam e campi entity StudenteVoto.java.
    const studenteVoto = new URLSearchParams({
      nomeStudente,
      materia,
      voto: String(voto),
      classe,
    })

    await fetch('http://localhost:8080/studenti-voti/inserisci', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: studenteVoto.toString(),
    })

    setNomeStudente('')
    setMateria('')
    setVoto(0)
    setClasse('')
    await caricaTutti()
  }

  const handleFiltra = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // CUSTOM ESAME:
    // qui costruisci la query del filtro. Le chiavi devono combaciare con
    // @RequestParam(required = false) nel metodo filtra del controller.
    const query = new URLSearchParams()
    if (filtroMateria.trim() !== '') query.append('materia', filtroMateria)
    if (filtroClasse.trim() !== '') query.append('classe', filtroClasse)

    try {
      const response = await fetch(`http://localhost:8080/studenti-voti/filtra?${query.toString()}`)
      if (!response.ok) throw new Error(`Errore: ${response.status}`)
      const result = await response.json()
      setStudentiVoti(result)
    } catch (err) {
      console.error('Errore nel fetch:', err)
    }
  }

  return {
    nomeStudente,
    materia,
    voto,
    classe,
    filtroMateria,
    filtroClasse,
    studentiVoti,
    handleNomeStudente,
    handleMateria,
    handleVoto,
    handleClasse,
    handleFiltroMateria,
    handleFiltroClasse,
    handleSubmit,
    handleFiltra,
    caricaTutti,
  }
}
