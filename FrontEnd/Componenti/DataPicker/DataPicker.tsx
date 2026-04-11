import { useId, useState } from "react";
import "./DataPicker.css";

export interface DataPickerProps {
    label?: string;
    defaultDate?: string;
    defaultTime?: string;
    disabled?: boolean;
    onChange?: (value: { date: string; time: string; iso: string }) => void;
    className?: string;
}

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function DataPicker({
    label = "Seleziona data e ora",
    defaultDate = "",
    defaultTime = "",
    disabled = false,
    onChange,
    className
}: DataPickerProps) {
    const uniqueId = useId().replace(/:/g, "");
    const dateId = `cmp-data-picker-date-${uniqueId}`;
    const timeId = `cmp-data-picker-time-${uniqueId}`;

    const [date, setDate] = useState<string>(defaultDate);
    const [time, setTime] = useState<string>(defaultTime);

    const emitChange = (nextDate: string, nextTime: string) => {
        const iso = nextDate && nextTime ? `${nextDate}T${nextTime}` : "";
        onChange?.({ date: nextDate, time: nextTime, iso });
    };

    return (
        <section className={joinClasses("cmp-data-picker", disabled && "is-disabled", className)} aria-label={label}>
            <p className="cmp-data-picker__title">{label}</p>

            <div className="cmp-data-picker__row">
                <label htmlFor={dateId} className="cmp-data-picker__label">Data</label>
                <input
                    id={dateId}
                    className="cmp-data-picker__input"
                    type="date"
                    value={date}
                    disabled={disabled}
                    onChange={(event) => {
                        const nextDate = event.target.value;
                        setDate(nextDate);
                        emitChange(nextDate, time);
                    }}
                />
            </div>

            <div className="cmp-data-picker__row">
                <label htmlFor={timeId} className="cmp-data-picker__label">Ora</label>
                <input
                    id={timeId}
                    className="cmp-data-picker__input"
                    type="time"
                    value={time}
                    disabled={disabled}
                    onChange={(event) => {
                        const nextTime = event.target.value;
                        setTime(nextTime);
                        emitChange(date, nextTime);
                    }}
                />
            </div>

            <p className="cmp-data-picker__preview" role="status" aria-live="polite">
                {date && time ? `Valore selezionato: ${date} ${time}` : "Inserisci data e ora"}
            </p>
        </section>
    );
}

export default DataPicker;
