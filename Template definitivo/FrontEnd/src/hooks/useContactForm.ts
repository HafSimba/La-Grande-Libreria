import { useMemo, useState } from 'react'
import { contactFormContent } from '../content/contactFormContent'
import { sendContactForm } from '../services/contactService'
import type { ContactFormData } from '../types/ContactFormData'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialFormData: ContactFormData = {
  nome: '',
  email: '',
  telefono: '',
  messaggio: '',
}

// COME PERSONALIZZARE COMPORTAMENTO FORM:
// - Per cambiare validazioni client aggiorna validateForm.
// - Per cambiare messaggi di stato aggiorna contactFormContent in src/content.
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [feedbackMessage, setFeedbackMessage] = useState<string>('')

  const isSubmitting = useMemo(() => status === 'submitting', [status])

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
      setFeedbackMessage('')
    }
  }

  const validateForm = () => {
    const isEmailValid = /\S+@\S+\.\S+/.test(formData.email)
    const hasAllRequired =
      formData.nome.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.telefono.trim() !== '' &&
      formData.messaggio.trim() !== ''

    return hasAllRequired && isEmailValid
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      setFeedbackMessage('Compila tutti i campi con dati validi.')
      return
    }

    try {
      setStatus('submitting')
      setFeedbackMessage('')
      await sendContactForm(formData)
      setStatus('success')
      setFeedbackMessage(contactFormContent.successMessage)
      setFormData(initialFormData)
    } catch (error) {
      setStatus('error')
      const fallbackMessage = contactFormContent.errorMessage
      setFeedbackMessage(error instanceof Error ? `${fallbackMessage} (${error.message})` : fallbackMessage)
    }
  }

  return {
    formData,
    status,
    isSubmitting,
    feedbackMessage,
    handleChange,
    handleSubmit,
  }
}
