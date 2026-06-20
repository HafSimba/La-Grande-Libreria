import { useState } from 'react'

type FeedbackType = 'success' | 'error'

export const useForm = () => {
  // CUSTOM ESAME:
  // crea uno state per ogni campo richiesto dalla traccia.
  // Il nome dello state deve combaciare con la chiave inviata nel payload e con @RequestParam backend.
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')
  const [messaggio, setMessaggio] = useState<string>('')

  // CUSTOM ESAME:
  // feedback mostra all'utente se l'invio e andato a buon fine.
  // Cambia i testi dentro handleSubmit in base all'azione richiesta dalla traccia.
  const [feedback, setFeedback] = useState<string>('')
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('success')

  const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value)
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelefono(e.target.value)
  }

  const handleMessaggio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessaggio(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // CUSTOM ESAME:
    // le chiavi qui sotto devono essere identiche ai nomi degli @RequestParam nel controller Spring.
    // Se cambi "messaggio" in "descrizione", devi cambiarlo anche nel backend.
    const contatto = new URLSearchParams({
      nome,
      email,
      telefono,
      messaggio,
    })

    try {
      // CUSTOM ESAME:
      // cambia questo endpoint solo se cambi anche @RequestMapping e @PostMapping nel backend.
      const response = await fetch('http://localhost:8080/contatti/invia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: contatto.toString(),
      })

      if (!response.ok) {
        setFeedbackType('error')
        setFeedback('Invio non riuscito. Controlla i dati e riprova.')
        return
      }

      setFeedbackType('success')
      setFeedback('Dati inviati correttamente.')
      setNome('')
      setEmail('')
      setTelefono('')
      setMessaggio('')
    } catch {
      setFeedbackType('error')
      setFeedback('Servizio non disponibile. Riprova piu tardi.')
    }
  }

  return {
    nome,
    email,
    telefono,
    messaggio,
    feedback,
    feedbackType,
    handleNome,
    handleEmail,
    handleTelefono,
    handleMessaggio,
    handleSubmit,
  }
}
