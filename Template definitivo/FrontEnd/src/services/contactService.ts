import { API_ENDPOINTS } from '../config/appConfig'
import type { ContactFormData } from '../types/ContactFormData'
import { postFormUrlEncoded } from './apiClient'

export type ContactSubmitResponse = ContactFormData & {
  id: number
  dataInvio: string
}

// COME PERSONALIZZARE MAPPING FE -> BE:
// - Le chiavi dell'oggetto devono essere identiche ai @RequestParam nel backend.
// - Se aggiungi un campo al form, aggiungilo qui con lo stesso nome del backend.
export async function sendContactForm(data: ContactFormData): Promise<ContactSubmitResponse> {
  return postFormUrlEncoded<ContactSubmitResponse>(API_ENDPOINTS.contatti.invia, {
    nome: data.nome,
    email: data.email,
    telefono: data.telefono,
    messaggio: data.messaggio,
  })
}
