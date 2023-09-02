import Carousel from "react-multi-carousel";
import Wrapper from "../Components/Wrapper";
import SearchContainer from "./SearchContainer";

const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 615 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 615, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="Hero" id="hero">
        <div className="image-container">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            <div className="imageCard">
              <img src={"/hero/HeroScreen1.webp"} alt="heroImage1" />
            </div>
            <div className="imageCard">
              <img src={"/hero/HeroScreen2.webp"} alt="heroImage2" />
            </div>
            <div className="imageCard">
              <img src={"/hero/HeroScreen3.webp"} alt="heroImage3" />
            </div>
            <div className="imageCard">
              <img src={"/hero/HeroScreen4.webp"} alt="heroImage4" />
            </div>
          </Carousel>
        </div>
        <Wrapper>
          <div className="container">
            <div className="text">
              <h1
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-anchor-placement="top-end"
              >
                Worldopedia
              </h1>
              <h2
                data-aos="zoom-in-up"
                data-aos-duration="500"
                data-aos-anchor-placement="top-end"
              >
                Here to get you there
              </h2>
            </div>
            <SearchContainer />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Hero;
