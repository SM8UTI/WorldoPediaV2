import Wrapper from "./Wrapper";
import Carsoual from "./Carsoual";
import PopularToursLists from "../Data/poppularData.json";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { BsPeople, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";

const PopularTours = () => {
  return (
    <div className="PopularTours">
      <Wrapper>
        <div
          className="text"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
        >
          <h3>Featured tours</h3>
          <h2>Most Popular Tours</h2>
        </div>
        <div
          className="container"
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          <Carsoual>
            {PopularToursLists.map((elem, index) => (
              <div className="PopularTourCard" key={index}>
                {elem?.featured && <div className="tag">FEATURED</div>}
                <Link
                  to={elem.link}
                  onClick={() => scroll.scrollToTop()}
                  className="img"
                >
                  <img src={elem.image} alt={elem.text} loading="lazy" />
                </Link>
                <div className="txt">
                  <div className="rating">
                    <div className="ico">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span>{elem.review}</span>
                  </div>
                  <h4>{elem.text}</h4>
                  <div className="location">
                    <div className="ico">
                      <FaMapMarkerAlt />
                    </div>
                    <span>{elem.location}</span>
                  </div>
                  <div className="price">
                    From <span>₹{elem.price}</span>
                  </div>
                  <div className="footer">
                    <div className="col">
                      <div className="day">
                        <div className="ico">
                          <BiTimeFive />
                        </div>
                        <span>{elem.days}</span>
                      </div>
                      <div className="people">
                        <div className="ico">
                          <BsPeople />
                        </div>
                        <span>{elem.people}</span>
                      </div>
                    </div>
                    <Link to={elem.link} onClick={() => scroll.scrollToTop()}>
                      <span>Explore</span>
                      <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carsoual>
        </div>
      </Wrapper>
    </div>
  );
};

export default PopularTours;
