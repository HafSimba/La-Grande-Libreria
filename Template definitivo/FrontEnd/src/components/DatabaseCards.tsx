import './Cards.css'
import { useApi } from '../hooks/useApi'
import type { Contatto } from '../types/Contatto'

export const DatabaseCards = () => {
  const contatti: Contatto[] = useApi('http://localhost:8080/contatti/tutti')

  if (contatti.length === 0) {
    return (
      <p className="lead">
        Nessun dato inserito. Compila il form per visualizzare qui le card salvate nel database.
      </p>
    )
  }

  return (
    <div className="cards">
      {/* CUSTOM ESAME:
          queste card vengono generate dai dati salvati nel database tramite il form.
          Per cambiare i campi visualizzati modifica:
          1) src/types/Contatto.ts
          2) src/components/Form.tsx
          3) src/hooks/useForm.ts
          4) backend/Contatto.java
          5) backend/ContattoService.java
          6) backend/rest/ContattoController.java */}
      {contatti.map((contatto) => (
        <article className="cards__item" key={contatto.id}>
          {/* CUSTOM ESAME:
              immagine placeholder della card letta da database.
              Se la traccia prevede immagini salvate nel database, aggiungi un campo imagePath
              in Contatto.ts e Contatto.java, poi usa src={contatto.imagePath}. */}
          <div className="cards__imageWrapper">
            <img className="cards__image" src="/vite.svg" alt="Immagine elemento inserito" />
          </div>

          <div className="cards__body">
            <h3>{contatto.nome}</h3>
            <p>Email: {contatto.email}</p>
            <p>Telefono: {contatto.telefono}</p>
            <p>{contatto.messaggio}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
