import { Footer } from '../components/Footer'
import { NavbarAlt } from '../components/NavbarAlt'
import { useApi } from '../hooks/useApi'
import type { Contatto } from '../types/Contatto'

export const ContattiPage = () => {
  const contatti: Contatto[] = useApi('http://localhost:8080/contatti/tutti')

  return (
    <>
      <NavbarAlt />

      <section className="page-section">
        <div className="container">
          <h1 className="page-section__title">Contatti ricevuti</h1>

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

      <Footer />
    </>
  )
}
