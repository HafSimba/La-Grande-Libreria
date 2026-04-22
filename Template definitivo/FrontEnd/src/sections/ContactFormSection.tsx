import { contactFormContent, contactFormFields } from '../content/contactFormContent'
import { useContactForm } from '../hooks/useContactForm'
import './ContactFormSection.css'

export function ContactFormSection() {
  const { formData, status, isSubmitting, feedbackMessage, handleChange, handleSubmit } = useContactForm()

  return (
    <section className="contact-section" id="contatti" aria-label="Sezione contatti">
      <div className="contact-section__inner">
        {/*
          COME PERSONALIZZARE TESTI:
          i testi della sezione (titolo, sottotitolo, label bottone, messaggi) sono in:
          src/content/contactFormContent.ts
        */}
        <h2 className="contact-section__title">{contactFormContent.title}</h2>
        <p className="contact-section__subtitle">{contactFormContent.subtitle}</p>

        {/*
          COME PERSONALIZZARE BACKEND:
          il submit usa l'hook useContactForm -> service contactService -> apiClient.
          Per cambiare endpoint/base URL modifica:
          1) src/config/appConfig.ts
          2) src/services/contactService.ts (mapping campi).
        */}
        <form className="contact-section__form" onSubmit={handleSubmit} noValidate>
          {contactFormFields.map((field) => {
            const value = formData[field.name]

            if (field.component === 'textarea') {
              return (
                <label key={field.name} className="contact-section__label" htmlFor={field.name}>
                  {field.label}
                  <textarea
                    id={field.name}
                    name={field.name}
                    className="contact-section__input contact-section__input--textarea"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={value}
                    onChange={(event) => handleChange(field.name, event.target.value)}
                  />
                </label>
              )
            }

            return (
              <label key={field.name} className="contact-section__label" htmlFor={field.name}>
                {field.label}
                <input
                  id={field.name}
                  name={field.name}
                  className="contact-section__input"
                  type={field.type ?? 'text'}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={value}
                  onChange={(event) => handleChange(field.name, event.target.value)}
                />
              </label>
            )
          })}

          <button className="contact-section__submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? contactFormContent.buttonSendingLabel : contactFormContent.buttonLabel}
          </button>

          {status !== 'idle' && (
            <p
              className={`contact-section__feedback ${status === 'success' ? 'contact-section__feedback--success' : 'contact-section__feedback--error'
                }`}
            >
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
