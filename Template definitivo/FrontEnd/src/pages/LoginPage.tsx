import { Footer } from '../components/Footer'
import { LoginForm } from '../components/LoginForm'
import { NavbarAlt } from '../components/NavbarAlt'

export const LoginPage = () => {
  return (
    <>
      <NavbarAlt />

      <section className="page-section">
        {/* CUSTOM ESAME:
            pagina login/admin semplice. Se la traccia non richiede autenticazione,
            rimuovi questa route da router.tsx e i file LoginPage/LoginForm/useLogin. */}
        <div className="container">
          <h1 className="page-section__title">Area admin</h1>
          <LoginForm />
        </div>
      </section>

      <Footer />
    </>
  )
}
