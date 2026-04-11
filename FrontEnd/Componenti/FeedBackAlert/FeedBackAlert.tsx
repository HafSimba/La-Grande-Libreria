import { useEffect, useState } from "react";
import "./FeedBackAlert.css";

export interface FeedBackAlertProps {
    isVisible?: boolean;
    title?: string;
    message?: string;
    variant?: "error" | "warning";
    dismissible?: boolean;
    className?: string;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function FeedBackAlert({
    isVisible = true,
    title = "Operazione non riuscita",
    message = "Si e verificato un errore. Riprova tra poco.",
    variant = "error",
    dismissible = true,
    className
}: FeedBackAlertProps) {
    const [isClosed, setIsClosed] = useState<boolean>(false);

    useEffect(() => {
        if (isVisible) {
            setIsClosed(false);
        }
    }, [isVisible]);

    if (!isVisible || isClosed) {
        return null;
    }

    return (
        <section
            className={joinClasses("cmp-feedback-alert", `is-variant-${variant}`, className)}
            role="alert"
            aria-live="assertive"
        >
            <div className="cmp-feedback-alert__text">
                <p className="cmp-feedback-alert__title">{title}</p>
                <p className="cmp-feedback-alert__message">{message}</p>
            </div>

            {dismissible && (
                <button
                    type="button"
                    className="cmp-feedback-alert__close"
                    onClick={() => setIsClosed(true)}
                    aria-label="Chiudi messaggio di errore"
                >
                    Chiudi
                </button>
            )}
        </section>
    );
}

export default FeedBackAlert;
