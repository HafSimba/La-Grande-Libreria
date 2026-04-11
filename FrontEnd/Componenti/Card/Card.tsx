import "./Card.css";

export interface CardProps {
    /** Main title shown inside the card. */
    title: string;
    /** Short description for the card content. */
    description: string;
    /** Optional image shown at the top of the card. */
    imageUrl?: string;
    /** Label used for the optional action button. */
    ctaLabel?: string;
    /** Action triggered when the user clicks the button. */
    onCtaClick?: () => void;
    /** Extra class name to customize style from outside. */
    className?: string;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function Card({
    title,
    description,
    imageUrl,
    ctaLabel = "Scopri di piu",
    onCtaClick,
    className
}: CardProps) {
    return (
        <article className={joinClasses("cmp-card", className)} aria-label={title}>
            {imageUrl ? (
                <img className="cmp-card__image" src={imageUrl} alt={title} loading="lazy" />
            ) : null}

            <div className="cmp-card__content">
                <h3 className="cmp-card__title">{title}</h3>
                <p className="cmp-card__description">{description}</p>

                {onCtaClick ? (
                    <button
                        type="button"
                        className="cmp-card__button"
                        onClick={onCtaClick}
                        aria-label={`Apri dettagli: ${title}`}
                    >
                        {ctaLabel}
                    </button>
                ) : null}
            </div>
        </article>
    );
}

export default Card;
