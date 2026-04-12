import React from 'react'
import Carosello from '../../components/Carosello/Carosello'
import './CaroselloSection.css'

interface Slide { src: string; alt?: string; caption?: string }

export interface CaroselloSectionProps { slides?: Slide[] }

export default function CaroselloSection({ slides = [] }: CaroselloSectionProps) {
    // mappa la shape `Slide` ({src, alt, caption}) alla shape attesa da `Carosello`
    // ({ imageUrl, title, description })
    const itemsForCarosello = slides.map(s => ({
        imageUrl: s.src,
        title: s.caption ?? s.alt,
        description: s.caption ?? undefined,
    }));

    return (
        <section id="carosello" className="cmp-carosello-section" aria-label="Carosello prodotti">
            <div className="container">
                <Carosello items={itemsForCarosello} autoplay={false} />
            </div>
        </section>
    )
}