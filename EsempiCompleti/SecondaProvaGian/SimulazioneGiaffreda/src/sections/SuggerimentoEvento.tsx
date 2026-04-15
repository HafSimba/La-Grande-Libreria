//sezione nella quale con un form collegato a backend
//si possono proporre eventi
//form con Titolo, categoria, descrizione, autore, email
//conferma con feedback di successo o errore a seconda del risultato della richiesta al backend
import React, { useState } from 'react';
import './SuggerimentoEvento.css';

interface FormData {
    titolo: string;
    categoria: string;
    descrizione: string;
    autore: string;
    email: string;
}

const SuggerimentoEvento: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        titolo: '',
        categoria: '',
        descrizione: '',
        autore: '',
        email: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMsg('');

        try {
            const response = await fetch('http://localhost:8080/api/eventi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            setStatus('success');
            setForm({
                titolo: '',
                categoria: '',
                descrizione: '',
                autore: '',
                email: '',
            });
        } catch (err: any) {
            setStatus('error');
            setErrorMsg(err.message || 'Errore di rete');
        }
    };

    return (
        <section className="suggerimento-evento section">
            <h2 className="section-title">Suggerisci un evento</h2>

            {status === 'success' && (
                <p className="feedback success">Suggerimento inviato con successo!</p>
            )}
            {status === 'error' && (
                <p className="feedback error">Errore: {errorMsg}</p>
            )}

            <form onSubmit={handleSubmit} className="event-form">
                <div className="form-group">
                    <label htmlFor="titolo">Titolo evento</label>
                    <input
                        type="text"
                        id="titolo"
                        name="titolo"
                        value={form.titolo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="categoria">Categoria evento</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="descrizione">Descrizione</label>
                    <textarea
                        id="descrizione"
                        name="descrizione"
                        value={form.descrizione}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="autore">Autore</label>
                    <input
                        type="text"
                        id="autore"
                        name="autore"
                        value={form.autore}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email di contatto</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn-primary">
                    {status === 'sending' ? 'Invio...' : 'Invia Suggerimento'}
                </button>
            </form>
        </section>
    );
};

export default SuggerimentoEvento;