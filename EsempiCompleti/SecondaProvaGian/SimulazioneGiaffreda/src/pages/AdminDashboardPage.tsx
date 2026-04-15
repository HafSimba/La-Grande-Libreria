import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import EventCard from '../components/EventCard';
import './AdminDashboardPage.css';

export interface PendingEvent {
    id: number;
    titolo: string;
    categoria: string;
    descrizione: string;
    autore: string;
    email: string;
    createdAt: string;
}

const AdminDashboardPage: React.FC = () => {
    const [events, setEvents] = useState<PendingEvent[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // 1. Controllo autenticazione
    const token = localStorage.getItem('jwt');
    if (!token) {
        navigate('/login');          // se il token è assente – redirect
    }

    // 2. Scarica le richieste di eventi “in attesa”
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/eventi?status=pending', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!res.ok) throw new Error('Errore di rete');
                const data: PendingEvent[] = await res.json();
                setEvents(data);
            } catch (e: any) {
                console.warn('Impossibile caricare gli eventi:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [token]);

    return (
        <div>
            <AdminNavbar />

            <main className="admin-dashboard main-content">
                <h2 className="section-title">Richieste di Evento</h2>

                {loading ? (
                    <p>Caricamento...</p>
                ) : events.length === 0 ? (
                    <p>Nessuna richiesta in attesa.</p>
                ) : (
                    <div className="event-list">
                        {events.map(ev => (
                            <EventCard key={ev.id} event={ev} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboardPage;