import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';

const AdminLoginPage: React.FC = () => {
    const [creds, setCreds] = useState({ username: '', password: '' });
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCreds(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(creds),
            });

            if (!res.ok) throw new Error('Credenziali non valide');

            const { token } = await res.json();        // il backend deve restituire { token }
            localStorage.setItem('jwt', token);         // salva il token per le richieste successive
            navigate('/admin');                        // → pagina di gestione
        } catch (e: any) {
            setError(e.message ?? 'Errore di rete');
        }
    };

    return (
        <section className="admin-login page">
            <h2 className="section-title">Login Amministratore</h2>
            {error && <p className="feedback error">{error}</p>}

            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={creds.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={creds.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn-primary">
                    Accedi
                </button>
            </form>
        </section>
    );
};

export default AdminLoginPage;