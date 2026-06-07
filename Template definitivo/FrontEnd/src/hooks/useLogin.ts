import { useState } from 'react'
import { useNavigate } from 'react-router'

export const useLogin = () => {
  // CUSTOM ESAME:
  // form registrazione utente. I nomi qui devono combaciare con gli @RequestParam
  // di UtenteController.registra.
  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // CUSTOM ESAME:
  // form login. Il backend controlla se email/password sono presenti nel database.
  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPassword, setLoginPassword] = useState<string>('')
  const [feedback, setFeedback] = useState<string>('')
  const navigate = useNavigate()

  const handleNome = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value)
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLoginEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginEmail(e.target.value)
  }

  const handleLoginPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginPassword(e.target.value)
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const utente = new URLSearchParams({
      nome,
      email,
      password,
    })

    await fetch('http://localhost:8080/utenti/registra', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: utente.toString(),
    })

    setFeedback('Utente registrato. Ora puoi accedere.')
    setNome('')
    setEmail('')
    setPassword('')
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const credenziali = new URLSearchParams({
      email: loginEmail,
      password: loginPassword,
    })

    const response = await fetch('http://localhost:8080/utenti/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: credenziali.toString(),
    })

    const result = await response.json()

    if (result !== null) {
      navigate('/admin')
      return
    }

    setFeedback('Credenziali non valide.')
  }

  return {
    nome,
    email,
    password,
    loginEmail,
    loginPassword,
    feedback,
    handleNome,
    handleEmail,
    handlePassword,
    handleLoginEmail,
    handleLoginPassword,
    handleRegister,
    handleLogin,
  }
}
