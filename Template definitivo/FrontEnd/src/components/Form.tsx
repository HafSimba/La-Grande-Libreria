import './Form.css'
import { useForm } from '../hooks/useForm'

export const Form = () => {
  const {
    handleSubmit,
    nome,
    handleNome,
    email,
    handleEmail,
    telefono,
    handleTelefono,
    messaggio,
    handleMessaggio,
  } = useForm()

  return (
    <div className="form-wrapper">
      {/* CUSTOM ESAME:
          per aggiungere un campo devi fare 4 modifiche:
          1) aggiungi useState e handler in hooks/useForm.ts
          2) aggiungi input qui sotto
          3) aggiungi campo in backend/Contatto.java
          4) aggiungi @RequestParam in ContattoController.java */}
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="nome">
          Nome
          <input
            className="form__input"
            id="nome"
            type="text"
            placeholder="Inserisci il tuo nome"
            value={nome}
            onChange={handleNome}
            required
          />
        </label>

        <label className="form__label" htmlFor="email">
          Email
          <input
            className="form__input"
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmail}
            required
          />
        </label>

        <label className="form__label" htmlFor="telefono">
          Telefono
          <input
            className="form__input"
            id="telefono"
            type="tel"
            placeholder="Inserisci il telefono"
            value={telefono}
            onChange={handleTelefono}
            required
          />
        </label>

        <label className="form__label" htmlFor="messaggio">
          Messaggio
          <input
            className="form__input"
            id="messaggio"
            type="text"
            placeholder="Scrivi il messaggio"
            value={messaggio}
            onChange={handleMessaggio}
            required
          />
        </label>

        <input className="button" type="submit" value="Manda" />
      </form>
    </div>
  )
}
