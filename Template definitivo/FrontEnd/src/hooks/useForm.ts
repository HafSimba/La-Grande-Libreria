import { useState } from 'react'

export const useForm = () => {
  // CUSTOM ESAME:
  // crea uno state per ogni campo richiesto dalla traccia.
  // Il nome dello state deve combaciare con la chiave inviata nel payload e con @RequestParam backend.
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [telefono, setTelefono] = useState<string>('')
  const [messaggio, setMessaggio] = useState<string>('')

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

    // CUSTOM ESAME:
    // cambia questo endpoint solo se cambi anche @RequestMapping e @PostMapping nel backend.
    await fetch('http://localhost:8080/contatti/invia', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: contatto.toString(),
    })
  }

  return {
    nome,
    email,
    telefono,
    messaggio,
    handleNome,
    handleEmail,
    handleTelefono,
    handleMessaggio,
    handleSubmit,
  }
}
