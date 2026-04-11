import React, { useEffect, useMemo, useState } from 'react';
import './componente.css';

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  className?: string;
}

export default function Slider({
  min = 0,
  max = 1000,
  step = 10,
  defaultValue = [100, 700],
  onChange,
  className = '',
}: SliderProps) {
  const startMin = Math.max(min, Math.min(defaultValue[0], max));
  const startMax = Math.max(min, Math.min(defaultValue[1], max));
  const [values, setValues] = useState<[number, number]>([
    Math.min(startMin, startMax),
    Math.max(startMin, startMax),
  ]);

  useEffect(() => {
    onChange?.(values);
  }, [onChange, values]);

  const percentages = useMemo(() => {
    const total = max - min || 1;
    const left = ((values[0] - min) / total) * 100;
    const right = ((values[1] - min) / total) * 100;
    return { left, right };
  }, [max, min, values]);

  const changeMin = (next: number) => {
    setValues((current) => [Math.min(next, current[1]), current[1]]);
  };

  const changeMax = (next: number) => {
    setValues((current) => [current[0], Math.max(next, current[0])]);
  };

  return (
    <section className={`cmp-slider ${className}`.trim()} aria-label="Filtro prezzo">
      <div className="cmp-slider-header">
        <span className="cmp-slider-title">Fascia prezzo</span>
        <span className="cmp-slider-value">
          {values[0]} - {values[1]}
        </span>
      </div>

      <div className="cmp-slider-track-wrap">
        <div
          className="cmp-slider-track-active"
          style={{ left: `${percentages.left}%`, width: `${percentages.right - percentages.left}%` }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[0]}
          aria-label="Prezzo minimo"
          className="cmp-slider-input"
          onChange={(e) => changeMin(Number(e.target.value))}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values[1]}
          aria-label="Prezzo massimo"
          className="cmp-slider-input"
          onChange={(e) => changeMax(Number(e.target.value))}
        />
      </div>
    </section>
  );
}
