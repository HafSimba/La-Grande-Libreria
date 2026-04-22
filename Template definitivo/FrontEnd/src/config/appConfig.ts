// COME PERSONALIZZARE BACKEND:
// - Cambia API_BASE_URL per puntare al tuo server (locale, staging o produzione).
// - Mantieni i path in API_ENDPOINTS allineati con i mapping del controller Spring Boot.
export const API_BASE_URL = 'http://localhost:8080'

export const API_ENDPOINTS = {
  contatti: {
    invia: '/contatti/invia',
    lista: '/contatti/tutti',
  },
} as const
