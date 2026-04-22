// COME PERSONALIZZARE DATI FORM:
// - Aggiungi o rimuovi campi qui e poi allinea:
//   1) src/content/contactFormContent.ts
//   2) src/services/contactService.ts
//   3) backend @RequestParam nel controller.
export type ContactFormData = {
  nome: string
  email: string
  telefono: string
  messaggio: string
}
