import { Form } from '../components/Form'

export const ContactFormSection = () => {
  return (
    <section className="page-section" id="form">
      {/* CUSTOM ESAME:
          questa e la sezione collegata al POST backend.
          Per aggiungere campi modifica Form.tsx, useForm.ts, Contatto.java,
          ContattoService.java e ContattoController.java. */}
      <div className="container">
        <h2 className="page-section__title">Modulo contatti</h2>
        <Form />
      </div>
    </section>
  )
}
