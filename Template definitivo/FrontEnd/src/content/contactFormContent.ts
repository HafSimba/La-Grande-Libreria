import type { ContactFormData } from '../types/ContactFormData'

export type ContactFieldConfig = {
  name: keyof ContactFormData
  label: string
  placeholder: string
  required: boolean
  component: 'input' | 'textarea'
  type?: 'text' | 'email' | 'tel'
}

// COME PERSONALIZZARE TESTI FORM:
// - Cambia title, subtitle, buttonLabel, successMessage e errorMessage.
// - Per rinominare campi o placeholder modifica contactFormFields.
export const contactFormContent = {
  title: 'cambia questo testo',
  subtitle: 'cambia questo testo',
  buttonLabel: 'Invia richiesta',
  buttonSendingLabel: 'Invio in corso...',
  successMessage: 'Messaggio inviato correttamente.',
  errorMessage: 'Si e verificato un errore durante l invio.',
}

export const contactFormFields: ContactFieldConfig[] = [
  {
    name: 'nome',
    label: 'Nome',
    placeholder: 'cambia questo testo',
    required: true,
    component: 'input',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'cambia questo testo',
    required: true,
    component: 'input',
    type: 'email',
  },
  {
    name: 'telefono',
    label: 'Telefono',
    placeholder: 'cambia questo testo',
    required: true,
    component: 'input',
    type: 'tel',
  },
  {
    name: 'messaggio',
    label: 'Messaggio',
    placeholder: 'cambia questo testo',
    required: true,
    component: 'textarea',
  },
]
