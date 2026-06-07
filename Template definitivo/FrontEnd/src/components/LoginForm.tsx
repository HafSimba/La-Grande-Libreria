import './Cards.css'
import './Form.css'
import { useLogin } from '../hooks/useLogin'

export const LoginForm = () => {
  const {
    nome,
    email,
    password,
    loginEmail,
    loginPassword,
    feedback,
    handleNome,
    handleEmail,
    handlePassword,
    handleLoginEmail,
    handleLoginPassword,
    handleRegister,
    handleLogin,
  } = useLogin()

  return (
    <div className="cards">
      {/* CUSTOM ESAME:
          il login e volutamente semplice: registra utente e poi accede se email/password
          combaciano con quelle salvate. Per aggiungere campi utente modifica anche
          useLogin.ts, Utente.java, UtenteService.java e UtenteController.java. */}
      <article className="cards__item">
        <h2>Registra utente</h2>
        <form className="form" onSubmit={handleRegister}>
          <label className="form__label" htmlFor="nome">
            Nome
            <input className="form__input" id="nome" type="text" value={nome} onChange={handleNome} required />
          </label>

          <label className="form__label" htmlFor="email">
            Email
            <input className="form__input" id="email" type="email" value={email} onChange={handleEmail} required />
          </label>

          <label className="form__label" htmlFor="password">
            Password
            <input className="form__input" id="password" type="password" value={password} onChange={handlePassword} required />
          </label>

          <input className="button" type="submit" value="Registra" />
        </form>
      </article>

      <article className="cards__item">
        <h2>Accesso admin</h2>
        <form className="form" onSubmit={handleLogin}>
          <label className="form__label" htmlFor="loginEmail">
            Email
            <input className="form__input" id="loginEmail" type="email" value={loginEmail} onChange={handleLoginEmail} required />
          </label>

          <label className="form__label" htmlFor="loginPassword">
            Password
            <input
              className="form__input"
              id="loginPassword"
              type="password"
              value={loginPassword}
              onChange={handleLoginPassword}
              required
            />
          </label>

          <input className="button" type="submit" value="Accedi" />
        </form>
      </article>

      {feedback !== '' && <p className="lead">{feedback}</p>}
    </div>
  )
}
