import { useStudentiVoti } from '../hooks/useStudentiVoti'

export const StudentiVotiSection = () => {
  const {
    nomeStudente,
    materia,
    voto,
    classe,
    filtroMateria,
    filtroClasse,
    studentiVoti,
    handleNomeStudente,
    handleMateria,
    handleVoto,
    handleClasse,
    handleFiltroMateria,
    handleFiltroClasse,
    handleSubmit,
    handleFiltra,
    caricaTutti,
  } = useStudentiVoti()

  return (
    <section className="page-section" id="studenti-voti">
      <div className="container">
        {/* CUSTOM ESAME:
            questa sezione e autonoma. Se la traccia non richiede inserimento + lista + filtro,
            rimuovi StudentiVotiSection da HomePage.tsx oppure cancella questi tre file:
            components/StudentiVotiSection.tsx, hooks/useStudentiVoti.ts, types/StudenteVoto.ts.
            Per adattarla a un altro dominio cambia input, hook, tipo TS e file backend StudenteVoto*. */}
        <h2 className="page-section__title">Studenti, materie e voti</h2>

        <div className="cards">
          <article className="cards__item">
            <h3>Inserisci voto</h3>
            <form className="form" onSubmit={handleSubmit}>
              <label className="form__label" htmlFor="nomeStudente">
                Nome studente
                <input
                  className="form__input"
                  id="nomeStudente"
                  type="text"
                  placeholder="Mario Rossi"
                  value={nomeStudente}
                  onChange={handleNomeStudente}
                  required
                />
              </label>

              <label className="form__label" htmlFor="materia">
                Materia
                <input
                  className="form__input"
                  id="materia"
                  type="text"
                  placeholder="Matematica"
                  value={materia}
                  onChange={handleMateria}
                  required
                />
              </label>

              <label className="form__label" htmlFor="voto">
                Voto
                <input
                  className="form__input"
                  id="voto"
                  type="number"
                  min="1"
                  max="10"
                  value={voto}
                  onChange={handleVoto}
                  required
                />
              </label>

              <label className="form__label" htmlFor="classe">
                Classe
                <input
                  className="form__input"
                  id="classe"
                  type="text"
                  placeholder="5A"
                  value={classe}
                  onChange={handleClasse}
                  required
                />
              </label>

              <input className="button" type="submit" value="Inserisci" />
            </form>
          </article>

          <article className="cards__item">
            <h3>Filtra elenco</h3>
            <form className="form" onSubmit={handleFiltra}>
              <label className="form__label" htmlFor="filtroMateria">
                Materia
                <input
                  className="form__input"
                  id="filtroMateria"
                  type="text"
                  placeholder="Cerca materia"
                  value={filtroMateria}
                  onChange={handleFiltroMateria}
                />
              </label>

              <label className="form__label" htmlFor="filtroClasse">
                Classe
                <input
                  className="form__input"
                  id="filtroClasse"
                  type="text"
                  placeholder="Cerca classe"
                  value={filtroClasse}
                  onChange={handleFiltroClasse}
                />
              </label>

              <input className="button" type="submit" value="Filtra" />
              <button className="button" type="button" onClick={caricaTutti}>
                Mostra tutti
              </button>
            </form>
          </article>
        </div>

        <div className="list">
          {studentiVoti.map((studenteVoto) => (
            <article className="list__item" key={studenteVoto.id}>
              <h3 className="list__title">{studenteVoto.nomeStudente}</h3>
              <p className="lead">Materia: {studenteVoto.materia}</p>
              <p className="lead">Voto: {studenteVoto.voto}</p>
              <p className="lead">Classe: {studenteVoto.classe}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
