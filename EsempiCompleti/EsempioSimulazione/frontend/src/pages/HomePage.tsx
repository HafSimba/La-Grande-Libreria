import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <>
      <Navbar />

      <section className="page-section bg-primary text-white mb-0" id="hero">
        <Hero imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZaHMODFzDVbSTbAs02jXzXkog_jqEvRA8zMdHjQFRNCYgrxXlu_rI-OtpSrZuGnrt5hri_CLQmO0ad5gcIKLA-wvC3iF3RzYVa8CTaE&s=10" />
      </section>

      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Missione e visione
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-start">
              <p className="lead">
                The path of the righteous man is beset on all sides by the
                iniquities of the selfish and the tyranny of evil men. Blessed
                is He who in the name of charity and good will shepherds the
                weak through the valley of darkness, for He is truly his
                brother's keeper and the finder of lost children. And I will
                strike down upon thee with great vengeance and furious anger
                those who attempt to poison and destroy My brothers. And you
                will know My name is the Lord when I lay My vengeance upon thee.
              </p>
            </div>
          </div>

          <div className="text-center mt-4"></div>
        </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="tech">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Tecnologie verdi
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-start">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="text-center mt-4"></div>
        </div>
      </section>
      <section
        className="page-section bg-primary text-white mb-0"
        id="testimonianze"
      >
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Testimonianze
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-start">
              <p className="lead">
                CEO: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="lead">
                CEO1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="lead">
                CEO2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="text-center mt-4"></div>
        </div>
      </section>
      <section className="page-section bg-primary" id="form">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white mb-0">
            Modulo di registrazione
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
          </div>
          <Form />
        </div>
      </section>
      <Footer />
    </>
  );
};
