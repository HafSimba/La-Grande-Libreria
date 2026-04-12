type HeroProps = {
  imgSrc: string;
};

export const Hero = ({ imgSrc }: HeroProps) => {
  return (
    <>
      <div className="container" />
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imgSrc} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
                <h1>CONTEST GREEN FOR THE FUTURE 2026</h1>
              <h1><a
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#form"
              >PARTECIPA</a></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
