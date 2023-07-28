import Wrapper from "./Wrapper";

import instaData from "../Data/InstagramLinksData.json";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const News = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 3,
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
    <div className="News">
      <Wrapper>
        <div className="header">
          <div
            className="txt"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
          >
            <h3>From the blog post</h3>
            <h2>News & Instagram Feeds</h2>
          </div>
          <Link to={"https://www.instagram.com/worldopediaa/"} className="pBtn">
            View All Posts
          </Link>
        </div>
        <div
          className="container"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom"
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {instaData.data.map((elem, index) => (
              <div key={index} className="feed"></div>
            ))}
          </Carousel>
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
