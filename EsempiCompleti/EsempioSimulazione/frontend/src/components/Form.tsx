import { useForm } from "../hooks/useForm";

export const Form = () => {
  const {
    handleSubmit,
    nomeScuola,
    handleNomeScuola,
    grado,
    handleGrado,
    provincia,
    handleProvincia,
    classe,
    handleClasse,
    nomeDocente,
    handleNomeDocente,
    email,
    handleEmail,
    nomeProgetto,
    handleNomeProgetto,
    descrizione,
    handleDescrizione,
  } = useForm();

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8 col-xl-7">
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="nomeScuola"
              type="text"
              placeholder="Inserisci il nome della tua scuola..."
              data-sb-validations="required"
              value={nomeScuola}
              onChange={handleNomeScuola}
            />
            <label htmlFor="name" className="text-white">
              Nome scuola
            </label>
            <div
              className="invalid-feedback"
              data-sb-feedback="nomeScuola:required"
            >
              Inserisci il nome della tua scuola.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control= bg-primary"
              id="grado"
              type="number"
              placeholder="5"
              data-sb-validations="required"
              value={grado}
              onChange={handleGrado}
            />
            <label htmlFor="phone" className="text-white">
              Grado della scuola
            </label>
            <div className="invalid-feedback" data-sb-feedback="grado:required">
              Inserisci il grado della tua scuola.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="provincia"
              type="text"
              placeholder="Inserisci la tua provincia..."
              data-sb-validations="required"
              value={provincia}
              onChange={handleProvincia}
            />
            <label htmlFor="name" className="text-white">
              Provincia
            </label>
            <div
              className="invalid-feedback"
              data-sb-feedback="provincia:required"
            >
              Inserisci la tua provincia.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="classe"
              type="text"
              placeholder="Inserisci il nome della tua scuola..."
              data-sb-validations="required"
              value={classe}
              onChange={handleClasse}
            />
            <label htmlFor="name" className="text-white">
              Classe
            </label>
            <div
              className="invalid-feedback"
              data-sb-feedback="classe:required"
            >
              Inserisci la tua classe.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="nomeDocente"
              type="text"
              placeholder="Inserisci il nome del tuo docente di riferimento..."
              data-sb-validations="required"
              value={nomeDocente}
              onChange={handleNomeDocente}
            />
            <label htmlFor="name" className="text-white">
              Nome docente
            </label>
            <div
              className="invalid-feedback"
              data-sb-feedback="nomeDocente:required"
            >
              Inserisci il nome del docente di riferimento.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="email"
              type="email"
              placeholder="name@example.com"
              data-sb-validations="required,email"
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor="email" className="text-white">
              Email di contatto
            </label>
            <div className="invalid-feedback" data-sb-feedback="email:required">
              Inserisci un indirizzo email.
            </div>
            <div className="invalid-feedback" data-sb-feedback="email:email">
              Indirizzo email non valido.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="nomeProgetto"
              type="text"
              placeholder="Inserisci il nome del progetto..."
              data-sb-validations="required"
              value={nomeProgetto}
              onChange={handleNomeProgetto}
            />
            <label htmlFor="name" className="text-white">
              Nome progetto
            </label>
            <div
              className="invalid-feedback"
              data-sb-feedback="nomeProgetto:required"
            >
              Inserisci il nome del progetto.
            </div>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control bg-primary"
              id="name"
              placeholder="Inserisci la descrizione..."
              data-sb-validations="required"
              value={descrizione}
              onChange={handleDescrizione}
            />
            <label htmlFor="message" className="text-white">
              Descrizione
            </label>
            <div
              className="invalid-feedback"
              data-sb-feedback="message:required"
            >
              Inserisci una descrizione.
            </div>
          </div>
          <input type="submit" value="Manda" />
        </form>
      </div>
    </div>
  );
};
