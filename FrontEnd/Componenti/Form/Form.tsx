import { FormEvent, useState } from "react";
import "./Form.css";

export interface FormProps {
    title?: string;
    submitLabel?: string;
    showMessageField?: boolean;
    initialValues?: { name?: string; email?: string; message?: string };
    onSubmit?: (values: { name: string; email: string; message: string }) => void;
    className?: string;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function Form({
    title = "Contattaci",
    submitLabel = "Invia",
    showMessageField = true,
    initialValues,
    onSubmit,
    className
}: FormProps) {
    const [name, setName] = useState<string>(initialValues?.name ?? "");
    const [email, setEmail] = useState<string>(initialValues?.email ?? "");
    const [message, setMessage] = useState<string>(initialValues?.message ?? "");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const validate = (): boolean => {
        const nextErrors: { name?: string; email?: string } = {};

        if (!name.trim()) {
            nextErrors.name = "Il nome e obbligatorio.";
        }

        if (!email.trim()) {
            nextErrors.email = "L email e obbligatoria.";
        } else if (!email.includes("@")) {
            nextErrors.email = "Inserisci una email valida.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitted(false);

        if (!validate()) {
            return;
        }

        onSubmit?.({ name: name.trim(), email: email.trim(), message: message.trim() });
        setIsSubmitted(true);
    };

    return (
        <form className={joinClasses("cmp-form", className)} onSubmit={handleSubmit} aria-label={title}>
            <h3 className="cmp-form__title">{title}</h3>

            <label className="cmp-form__label" htmlFor="cmp-form-name">Nome *</label>
            <input
                id="cmp-form-name"
                className="cmp-form__input"
                type="text"
                value={name}
                onChange={(e: { target: { value: string } }) => setName(e.target.value)}
            />
            {errors.name && <p className="cmp-form__error">{errors.name}</p>}

            <label className="cmp-form__label" htmlFor="cmp-form-email">Email *</label>
            <input
                id="cmp-form-email"
                className="cmp-form__input"
                type="email"
                value={email}
                onChange={(e: { target: { value: string } }) => setEmail(e.target.value)}
            />
            {errors.email && <p className="cmp-form__error">{errors.email}</p>}

            {showMessageField && (
                <>
                    <label className="cmp-form__label" htmlFor="cmp-form-message">Messaggio</label>
                    <textarea
                        id="cmp-form-message"
                        className="cmp-form__textarea"
                        value={message}
                        onChange={(e: { target: { value: string } }) => setMessage(e.target.value)}
                    />
                </>
            )}

            <button className="cmp-form__button" type="submit">{submitLabel}</button>

            {isSubmitted && (
                <p className="cmp-form__success" role="status" aria-live="polite">
                    Form inviato con successo.
                </p>
            )}
        </form>
    );
}

export default Form;
