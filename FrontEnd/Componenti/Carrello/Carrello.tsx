import { useState } from "react";
import "./Carrello.css";

interface CarrelloItem {
    id: string;
    name: string;
    quantity?: number;
}

export interface CarrelloProps {
    products?: CarrelloItem[];
    title?: string;
    emptyText?: string;
    showTotal?: boolean;
    onAdd?: (item: CarrelloItem) => void;
    className?: string;
}

const defaultProducts: CarrelloItem[] = [
    { id: "p1", name: "Libro Giallo" },
    { id: "p2", name: "Agenda 2026" },
    { id: "p3", name: "Set Penne" }
];

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function Carrello({
    products,
    title = "Carrello",
    emptyText = "Nessun elemento aggiunto",
    showTotal = true,
    onAdd,
    className
}: CarrelloProps) {
    const catalog = products && products.length > 0 ? products : defaultProducts;
    const [cart, setCart] = useState<Record<string, number>>({});

    const addItem = (item: CarrelloItem) => {
        setCart((currentCart) => ({
            ...currentCart,
            [item.id]: (currentCart[item.id] ?? 0) + 1
        }));
        onAdd?.(item);
    };

    const totalItems = Object.values(cart).reduce((sum, value) => sum + value, 0);

    return (
        <section className={joinClasses("cmp-carrello", className)} aria-label="Carrello acquisti">
            <header className="cmp-carrello__header">
                <h3 className="cmp-carrello__title">{title}</h3>
                <p className="cmp-carrello__badge" role="status" aria-live="polite">
                    Aggiunti: {totalItems}
                </p>
            </header>

            <ul className="cmp-carrello__list" role="list">
                {catalog.map((item) => (
                    <li key={item.id} className="cmp-carrello__row">
                        <span className="cmp-carrello__name">{item.name}</span>
                        <button
                            type="button"
                            className="cmp-carrello__button"
                            onClick={() => addItem(item)}
                            aria-label={`Aggiungi ${item.name} al carrello`}
                        >
                            Aggiungi
                        </button>
                        <span className="cmp-carrello__qty">{cart[item.id] ?? 0}</span>
                    </li>
                ))}
            </ul>

            {showTotal && (
                <p className="cmp-carrello__total">
                    {totalItems === 0 ? emptyText : `Totale articoli nel carrello: ${totalItems}`}
                </p>
            )}
        </section>
    );
}

export default Carrello;
