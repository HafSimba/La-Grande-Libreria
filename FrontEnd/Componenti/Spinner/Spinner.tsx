import React from 'react';
import './spinner.css';

export interface SpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
  label?: string;
  fullscreen?: boolean;
  className?: string;
}

export default function Spinner({
  size = 40,
  color = 'var(--cmp-accent)',
  thickness = 4,
  label = 'Caricamento in corso',
  fullscreen = false,
  className = '',
}: SpinnerProps) {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderWidth: thickness,
    borderTopColor: color,
  };

  return (
    <div className={`cmp-spinner-wrap ${fullscreen ? 'is-fullscreen' : ''} ${className}`.trim()}>
      <div className="cmp-spinner-box" role="status" aria-live="polite" aria-label={label}>
        <div className="cmp-spinner" style={style} />
        <span className="cmp-spinner-text">{label}</span>
      </div>
    </div>
  );
}
