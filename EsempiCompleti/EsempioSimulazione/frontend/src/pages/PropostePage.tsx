import { Footer } from "../components/Footer";
import { NavbarAlt } from "../components/NavbarAlt";


import { useApi } from "../hooks/useApi";
import type { Proposta } from "../types/Proposta";

export const PropostePage = () => {
  const proposte: Proposta[] = useApi(
    "http://localhost:8080/registrazione/mostratutti",
  );
  return (
    <>
      <NavbarAlt />

      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-start">
              {proposte.map((proposta) => (
                <p className="lead">
                  Nome scuola: {proposta.nomeScuola} nome progetto:{" "}
                  {proposta.nomeProgetto} descrizione: {proposta.descrizione}
                </p>
              ))}
            </div>
          </div>

          <div className="text-center mt-4"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};
