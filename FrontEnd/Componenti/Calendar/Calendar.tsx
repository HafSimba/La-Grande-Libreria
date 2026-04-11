import { useMemo, useState } from "react";
import "./Calendar.css";

export interface CalendarProps {
    initialDate?: string;
    minYear?: number;
    maxYear?: number;
    locale?: string;
    onDateSelect?: (value: string) => void;
    className?: string;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

const toIsoDate = (year: number, month: number, day: number): string =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

function Calendar({
    initialDate,
    minYear = 2000,
    maxYear = 2100,
    locale = "it-IT",
    onDateSelect,
    className
}: CalendarProps) {
    const parsedDate = initialDate ? new Date(initialDate) : new Date();
    const safeDate = Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;

    const [year, setYear] = useState<number>(safeDate.getFullYear());
    const [month, setMonth] = useState<number>(safeDate.getMonth());
    const [selectedDay, setSelectedDay] = useState<number>(safeDate.getDate());

    const monthLabels = useMemo(
        () => Array.from({ length: 12 }, (_, index) => new Date(year, index, 1).toLocaleString(locale, { month: "short" })),
        [locale, year]
    );

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);
    const safeSelectedDay = Math.min(selectedDay, daysInMonth);
    const selectedDate = toIsoDate(year, month, safeSelectedDay);

    const changeYear = (step: number) => {
        const nextYear = Math.max(minYear, Math.min(maxYear, year + step));
        setYear(nextYear);
    };

    return (
        <section className={joinClasses("cmp-calendar", className)} aria-label="Selettore data calendario">
            <div className="cmp-calendar__year">
                <button type="button" className="cmp-calendar__year-control" onClick={() => changeYear(-1)} aria-label="Anno precedente">
                    -
                </button>
                <p className="cmp-calendar__year-value">{year}</p>
                <button type="button" className="cmp-calendar__year-control" onClick={() => changeYear(1)} aria-label="Anno successivo">
                    +
                </button>
            </div>

            <div className="cmp-calendar__month-grid" role="list" aria-label="Selezione mese">
                {monthLabels.map((label, index) => (
                    <button
                        key={label}
                        type="button"
                        className={joinClasses("cmp-calendar__month", month === index && "is-active")}
                        onClick={() => setMonth(index)}
                        aria-label={`Mese ${label}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="cmp-calendar__day-grid" role="list" aria-label="Selezione giorno">
                {days.map((day) => (
                    <button
                        key={day}
                        type="button"
                        className={joinClasses("cmp-calendar__day", safeSelectedDay === day && "is-active")}
                        onClick={() => {
                            setSelectedDay(day);
                            onDateSelect?.(toIsoDate(year, month, day));
                        }}
                        aria-label={`Giorno ${day}`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <p className="cmp-calendar__selected" role="status" aria-live="polite">
                Data selezionata: {selectedDate}
            </p>
        </section>
    );
}

export default Calendar;
