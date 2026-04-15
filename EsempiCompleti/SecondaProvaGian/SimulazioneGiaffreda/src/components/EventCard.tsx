// src/components/EventCard.tsx
import React from 'react';
import './EventCard.css';

export interface EventRequest {
    id: number;
    titolo: string;
    categoria: string;
    descrizione: string;
    autore: string;
    email: string;
    createdAt: string; // ISO‑8601
}

const EventCard: React.FC<{ event: EventRequest }> = ({ event }) => (
    <div className="event-card">
        <h3>{event.titolo}</h3>
        <p><strong>Categoria:</strong> {event.categoria}</p>
        <p>{event.descrizione}</p>
        <p>
            <strong>Autore:</strong> {event.autore}
            <br />
            <strong>Contatto:</strong> {event.email}
        </p>
        <p className="date">Invitato il {new Date(event.createdAt).toLocaleDateString()}</p>
    </div>
);

export default EventCard;