import { API_BASE_URL } from '../config/appConfig'

// COME PERSONALIZZARE COMUNICAZIONE BACKEND:
// - Se il backend richiede token/autenticazione, aggiungi gli header qui.
// - Se vuoi cambiare formato payload, modifica questa funzione insieme al controller backend.
export async function postFormUrlEncoded<T>(path: string, payload: Record<string, string>): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(payload).toString(),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`HTTP ${response.status} - ${errorBody}`)
  }

  return (await response.json()) as T
}
