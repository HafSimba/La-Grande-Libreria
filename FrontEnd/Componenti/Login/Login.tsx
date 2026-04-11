import React, { FormEvent, useState } from 'react';
import './componente.css';

export interface LoginProps {
  title?: string;
  submitLabel?: string;
  loading?: boolean;
  errorMessage?: string;
  onSubmit?: (data: { email: string; password: string }) => void;
  className?: string;
}

export default function Login({
  title = 'Accedi',
  submitLabel = 'Entra',
  loading = false,
  errorMessage,
  onSubmit,
  className = '',
}: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.({ email: email.trim(), password });
  };

  return (
    <section className={`cmp-login ${className}`.trim()} aria-label="Modulo login">
      <h2 className="cmp-login-title">{title}</h2>

      <form className="cmp-login-form" onSubmit={handleSubmit}>
        <label className="cmp-login-label" htmlFor="cmp-login-email">
          Email
        </label>
        <input
          id="cmp-login-email"
          type="email"
          className="cmp-login-input"
          placeholder="nome@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />

        <label className="cmp-login-label" htmlFor="cmp-login-password">
          Password
        </label>
        <input
          id="cmp-login-password"
          type="password"
          className="cmp-login-input"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          disabled={loading}
        />

        {errorMessage && <p className="cmp-login-error">{errorMessage}</p>}

        <button type="submit" className="cmp-login-btn" disabled={loading}>
          {loading ? 'Attendere...' : submitLabel}
        </button>
      </form>
    </section>
  );
}
