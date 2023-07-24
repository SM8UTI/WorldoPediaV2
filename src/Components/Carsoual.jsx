import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carsoual = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1000, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 615 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 615, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {children}
    </Carousel>
  );
};

export default Carsoual;
