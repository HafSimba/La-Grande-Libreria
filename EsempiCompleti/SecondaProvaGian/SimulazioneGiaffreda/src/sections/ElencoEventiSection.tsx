//sezione con elenco degli eventi proposti
//con titolo categoria descrizione autore email
//devono essere almeno 3 e sono fittizzi mockuppati frontend
import React, { useState, useEffect } from 'react';
import './ElencoEventiSection.css';

const eventi = [
    {
        id: 1,
        titolo: 'Maratona della Cultura',
        categoria: 'Cultura',
        descrizione:
            'Un percorso di 10 km con tappe in luoghi storici del comune. Ogni tappa offre musica dal vivo e stazioni gastronomiche.',
        autore: 'Mario Rossi',
        email: 'mario.rossi@example.com',
    },
    {
        id: 2,
        titolo: 'Festa delle Luci',
        categoria: 'Arte',
        descrizione:
            'Una notte di installazioni luminose e performance di artigiani locali lungo il centro storico.',
        autore: 'Lucia Bianchi',
        email: 'lucia.bianchi@example.com',
    },
    {
        id: 3,
        titolo: 'Mercatino del Vino',
        categoria: 'Gastronomia',
        descrizione:
            'Mercato settimanale con degustazioni di vini, formaggi e prodotti tipici, accompagnato da musica jazz.',
        autore: 'Giuseppe Verdi',
        email: 'giuseppe.verdi@example.com',
    },
];

const ElencoEventiSection: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % eventi.length);
        }, 4000); // 4 secondi
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="elenco-eventi section">
            <h2 className="section-title">Le vostre proposte</h2>

            <div className="carousel">
                <div
                    className="carousel-inner"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {eventi.map((e) => (
                        <article key={e.id} className="event-card">
                            <h3 className="event-title">{e.titolo}</h3>
                            <span className="event-categoria">{e.categoria}</span>
                            <p className="event-descrizione">{e.descrizione}</p>
                            <p className="event-autore">
                                Autore: <a href={`mailto:${e.email}`}>{e.autore}</a>
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ElencoEventiSection;