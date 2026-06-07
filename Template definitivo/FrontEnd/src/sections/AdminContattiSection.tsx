import './AdminContattiSection.css'
import { useApi } from '../hooks/useApi'
import type { Contatto } from '../types/Contatto'

export const AdminContattiSection = () => {
  const contatti: Contatto[] = useApi('http://localhost:8080/contatti/tutti')

  return (
    <section className="page-section">
      {/* CUSTOM ESAME:
          questa sezione admin mostra i dati inseriti dal form pubblico.
          Se cambi campi in Contatto.ts/Form/useForm/backend, aggiorna anche le card qui sotto. */}
      <div className="container">
        <h1 className="page-section__title">Dati ricevuti dal form</h1>

        <div className="list">
          {contatti.map((contatto) => (
            <article className="list__item" key={contatto.id}>
              <h2 className="list__title">{contatto.nome}</h2>
              <p className="lead">Email: {contatto.email}</p>
              <p className="lead">Telefono: {contatto.telefono}</p>
              <p className="lead">Messaggio: {contatto.messaggio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
