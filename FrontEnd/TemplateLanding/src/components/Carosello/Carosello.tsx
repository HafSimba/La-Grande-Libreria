import React, { useState, useEffect, useMemo } from "react";
import "./Carosello.css";

interface CaroselloItem {
    id?: string;
    imageUrl: string;
    title?: string;
    description?: string;
}

export interface CaroselloProps {
    items?: CaroselloItem[];
    viewMode?: "image" | "card";
    initialIndex?: number;
    showDots?: boolean;
    onItemClick?: (item: CaroselloItem, index: number) => void;
    className?: string;
    // UX options
    autoplay?: boolean;
    interval?: number; // ms
    pauseOnHover?: boolean;
    // alias prop name supported by some callers
    slides?: CaroselloItem[];
}

const defaultItems: CaroselloItem[] = [
    { imageUrl: "https://picsum.photos/900/500?random=21", title: "Novita", description: "Scopri i nuovi arrivi." },
    { imageUrl: "https://picsum.photos/900/500?random=22", title: "Consigliati", description: "Una selezione curata per te." },
    { imageUrl: "https://picsum.photos/900/500?random=23", title: "Offerte", description: "Promozioni della settimana." }
];

const joinClasses = (...classNames: Array<string | false | undefined>): string =>
    classNames.filter(Boolean).join(" ");

function Carosello({
    items,
    viewMode = "image",
    initialIndex = 0,
    showDots = true,
    onItemClick,
    className,
    autoplay = false,
    interval = 4000,
    pauseOnHover = true,
    slides: slidesProp,
}: CaroselloProps) {
    const slides = useMemo(() => {
        if (items && items.length > 0) return items;
        if (slidesProp && slidesProp.length > 0) return slidesProp;
        return defaultItems;
    }, [items, slidesProp]);

    const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const safeIndex = ((currentIndex % slides.length) + slides.length) % slides.length;
    const activeItem = slides[safeIndex];

    const goPrev = () => setCurrentIndex((value: number) => value - 1);
    const goNext = () => setCurrentIndex((value: number) => value + 1);

    // autoplay effect
    useEffect(() => {
        if (!autoplay) return;
        if (isPaused) return;
        const id = setInterval(() => setCurrentIndex((v) => v + 1), interval);
        return () => clearInterval(id);
    }, [autoplay, interval, isPaused, slides.length]);

    return (
        <section
            className={joinClasses("cmp-carosello", className)}
            aria-label="Carosello contenuti"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') goPrev();
                if (e.key === 'ArrowRight') goNext();
            }}
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
            <div className="cmp-carosello__viewport">
                <img className="cmp-carosello__image" src={activeItem.imageUrl} alt={activeItem.title ?? "Slide carosello"} loading="lazy" />

                {viewMode === "card" && (
                    <article className="cmp-carosello__card">
                        <h3 className="cmp-carosello__title">{activeItem.title ?? "Titolo slide"}</h3>
                        <p className="cmp-carosello__description">{activeItem.description ?? "Descrizione slide"}</p>
                        <button
                            type="button"
                            className="cmp-carosello__action"
                            onClick={() => onItemClick?.(activeItem, safeIndex)}
                            aria-label={`Apri elemento ${safeIndex + 1}`}
                        >
                            Apri
                        </button>
                    </article>
                )}
            </div>

            <div className="cmp-carosello__controls">
                <button type="button" className="cmp-carosello__control" onClick={goPrev} aria-label="Slide precedente">
                    Prev
                </button>
                <p className="cmp-carosello__counter" role="status" aria-live="polite">
                    {safeIndex + 1} / {slides.length}
                </p>
                <button type="button" className="cmp-carosello__control" onClick={goNext} aria-label="Slide successiva">
                    Next
                </button>
            </div>

            {showDots && (
                <div className="cmp-carosello__dots" aria-label="Indicatori slide">
                    {slides.map((item, index) => (
                        <button
                            key={item.id ?? `dot-${index}`}
                            type="button"
                            className={joinClasses("cmp-carosello__dot", index === safeIndex && "is-active")}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Vai alla slide ${index + 1}`}
                            aria-pressed={index === safeIndex}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Carosello;
