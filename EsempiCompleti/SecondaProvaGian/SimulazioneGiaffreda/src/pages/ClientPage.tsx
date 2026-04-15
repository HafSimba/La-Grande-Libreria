import React from 'react';
import Navbar from '../components/Navbar';          // <-- importiamo la navbar
import HeroSection from '../sections/HeroSection';
import ElencoEventiSection from '../sections/ElencoEventiSection';
import SuggerimentoEvento from '../sections/SuggerimentoEvento';
import Footer from '../components/Footer';          // <-- importiamo il footer

const HomePage: React.FC = () => (
    <>

        <Navbar />

        <div className="home-page-content">
            <HeroSection />
            <ElencoEventiSection />
            <SuggerimentoEvento />
        </div>

        <Footer />
    </>
);

export default HomePage;