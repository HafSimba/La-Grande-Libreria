import "./Button.css";

export interface ButtonProps {
    label?: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost";
    disabled?: boolean;
    className?: string;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function Button({
    label = "Vai",
    href,
    onClick,
    variant = "primary",
    disabled = false,
    className
}: ButtonProps) {
    const classes = joinClasses(
        "cmp-button",
        `is-variant-${variant}`,
        disabled && "is-disabled",
        className
    );

    if (href) {
        return (
            <a
                className={classes}
                href={disabled ? undefined : href}
                aria-label={label}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : 0}
                onClick={(event) => {
                    if (disabled) {
                        event.preventDefault();
                        return;
                    }

                    onClick?.();
                }}
            >
                {label}
            </a>
        );
    }

    return (
        <button type="button" className={classes} onClick={onClick} disabled={disabled} aria-label={label}>
            {label}
        </button>
    );
}

export default Button;
