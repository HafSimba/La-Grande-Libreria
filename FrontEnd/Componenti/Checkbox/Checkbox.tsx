import { useState } from "react";
import "./Checkbox.css";

export interface CheckboxProps {
    options?: string[];
    title?: string;
    defaultChecked?: string[];
    onChange?: (values: string[]) => void;
    disabled?: boolean;
    className?: string;
}

const defaultOptions = ["Newsletter", "Notifiche", "Promozioni"];

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

const toOptionId = (value: string): string => `cmp-checkbox-${value.toLowerCase().replace(/\s+/g, "-")}`;

function Checkbox({
    options,
    title = "Seleziona le opzioni",
    defaultChecked,
    onChange,
    disabled = false,
    className
}: CheckboxProps) {
    const values = options && options.length > 0 ? options : defaultOptions;
    const [selectedValues, setSelectedValues] = useState<string[]>(defaultChecked ?? []);

    const toggleValue = (value: string) => {
        if (disabled) {
            return;
        }

        setSelectedValues((currentValues) => {
            const isSelected = currentValues.includes(value);
            const nextValues = isSelected
                ? currentValues.filter((item) => item !== value)
                : [...currentValues, value];

            onChange?.(nextValues);
            return nextValues;
        });
    };

    return (
        <fieldset className={joinClasses("cmp-checkbox", disabled && "is-disabled", className)} aria-label={title}>
            <legend className="cmp-checkbox__title">{title}</legend>

            <ul className="cmp-checkbox__list" role="list">
                {values.map((value) => {
                    const id = toOptionId(value);
                    const isChecked = selectedValues.includes(value);

                    return (
                        <li key={id} className="cmp-checkbox__option">
                            <label htmlFor={id} className="cmp-checkbox__label">
                                <input
                                    id={id}
                                    className="cmp-checkbox__input"
                                    type="checkbox"
                                    checked={isChecked}
                                    disabled={disabled}
                                    onChange={() => toggleValue(value)}
                                />
                                <span>{value}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>

            <p className="cmp-checkbox__summary" role="status" aria-live="polite">
                Voci selezionate: {selectedValues.length}
            </p>
        </fieldset>
    );
}

export default Checkbox;
