import { useState } from "react";
import "./BurgerMenu.css";

type BurgerLink = {
    label: string;
    href: string;
};

export interface BurgerMenuProps {
    links?: BurgerLink[];
    title?: string;
    initiallyOpen?: boolean;
    closeOnSelect?: boolean;
    onSelect?: (href: string) => void;
    className?: string;
}

const defaultLinks: BurgerLink[] = [
    { label: "Home", href: "/" },
    { label: "Catalogo", href: "/catalogo" },
    { label: "Contatti", href: "/contatti" }
];

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function BurgerMenu({
    links,
    title = "Menu principale",
    initiallyOpen = false,
    closeOnSelect = true,
    onSelect,
    className
}: BurgerMenuProps) {
    const menuLinks = links && links.length > 0 ? links : defaultLinks;
    const [isOpen, setIsOpen] = useState<boolean>(initiallyOpen);
    const listId = "cmp-burger-menu-list";

    const handleSelect = (href: string) => {
        onSelect?.(href);
        if (closeOnSelect) {
            setIsOpen(false);
        }
    };

    return (
        <nav className={joinClasses("cmp-burger-menu", isOpen && "is-open", className)} aria-label={title}>
            <button
                type="button"
                className="cmp-burger-menu__trigger"
                aria-label="Apri menu di navigazione"
                aria-expanded={isOpen}
                aria-controls={listId}
                onClick={() => setIsOpen((current: boolean) => !current)}
            >
                <span className="cmp-burger-menu__line" />
                <span className="cmp-burger-menu__line" />
                <span className="cmp-burger-menu__line" />
            </button>

            <ul id={listId} className="cmp-burger-menu__list" hidden={!isOpen} role="list">
                {menuLinks.map((item) => (
                    <li key={`${item.label}-${item.href}`} className="cmp-burger-menu__item">
                        <a
                            className="cmp-burger-menu__link"
                            href={item.href}
                            onClick={() => handleSelect(item.href)}
                            aria-label={`Vai a ${item.label}`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default BurgerMenu;
