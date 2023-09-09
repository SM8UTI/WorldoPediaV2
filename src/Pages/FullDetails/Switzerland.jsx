import Carsoual from "../../Components/Carsoual";
import ReviewStar from "../../Components/ReviewStar";
import Wrapper from "../../Components/Wrapper";
import data from "../../Data/PopularTourData.json";
import { MdOutlinePlace, MdAccessTime } from "react-icons/md";
import { TiTicket } from "react-icons/ti";
import { RxCross2, RxCheck } from "react-icons/rx";
import { BsFillShareFill } from "react-icons/bs";
import DropDown from "../../Components/DropDown";
import { Link, useNavigate } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";
import PopularTours from "../../Components/PopularTours";

const Switzerland = () => {
  const datainfo = data[1];
  const nav = useNavigate();
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: window.location.href,
        });
        console.log("Successfully shared");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };
  return (
    <>
      <div className="fulldetails">
        <Carsoual>
          {datainfo.images?.map((elem, index) => (
            <div className="image" key={index}>
              <img src={elem} alt="worldo-pedia hungery images" />
            </div>
          ))}
        </Carsoual>

        <div className="container">
          <div className="header">
            <Wrapper>
              <div className="mainName">
                <h2>{datainfo.tourName}</h2>
                <div className="mainName-place">
                  <div className="ico">
                    <MdOutlinePlace />
                  </div>
                  <span>{datainfo.placeName}</span>
                </div>
              </div>
              <ul className="mainInfo">
                <li>
                  <div className="ico">
                    <TiTicket />
                  </div>
                  <div className="txt">
                    <span>From</span>
                    <h4>{datainfo.price}</h4>
                  </div>
                </li>
                <li>
                  <div className="ico">
                    <MdAccessTime />
                  </div>
                  <div className="txt">
                    <span>Duration</span>
                    <h4>{datainfo.duration}</h4>
                  </div>
                </li>
              </ul>
            </Wrapper>
          </div>
          <div className="reviews">
            <Wrapper>
              <div className="rating">
                <ReviewStar rating={datainfo.reviews.star} />
                <span className="rating-txt">
                  {datainfo.reviews.star} by {datainfo.reviews.user} reviews
                </span>
              </div>
              <div className="btns">
                <button onClick={handleShare}>
                  <div className="ico">
                    <BsFillShareFill />
                  </div>
                  <span>Share</span>
                </button>
                <button onClick={() => nav("/contact")}>
                  <span>Book Tour Now</span>
                </button>
              </div>
            </Wrapper>
          </div>
          <Wrapper>
            <div className="mainContainer">
              <div className="text-container">
                <div className="desc">
                  <h3>Overview</h3>
                  <p>{datainfo.description}</p>
                </div>
                <div className="IncludedExclude">
                  <h3>Included/Exclude</h3>
                  <div className="IncludedExclude-container">
                    <ul className="col">
                      {datainfo.includes.map((elem, index) => (
                        <li key={index}>
                          <div className="ico">
                            <RxCheck />
                          </div>
                          <span>{elem}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="col">
                      {datainfo.excludes.map((elem, index) => (
                        <li key={index}>
                          <div className="ico">
                            <RxCross2 />
                          </div>
                          <span>{elem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="dayplans">
                  <h3>Tour Plan</h3>
                  <div className="dayplans-container">
                    {datainfo.itinerary.map((elem, index) => (
                      <DropDown
                        data={elem}
                        key={index}
                        open={index === 0 ? true : false}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="sidebar">
                <div className="bookingTour">
                  <h4>Booking Tour</h4>
                  <ul>
                    <h5>Tickets:</h5>
                    {datainfo.bookingTour.Tickets.map((elem, index) => (
                      <li key={index}>{elem}</li>
                    ))}
                  </ul>
                </div>
                <div className="banner-img">
                  <h3>Hungery</h3>
                  <Link to={"/hungery"} onClick={() => scroll.scrollToTop()}>
                    <div className="opa"></div>
                    <img
                      src={"/hungery/2.webp"}
                      alt="worldopediaa switzerland"
                    />
                  </Link>
                </div>
                <div className="banner-img">
                  <h3>Thailand</h3>
                  <Link to={"/thailand"} onClick={() => scroll.scrollToTop()}>
                    <div className="opa"></div>
                    <img
                      src={"/thailand/4.webp"}
                      alt="worldopediaa switzerland"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
      <PopularTours />
    </>
  );
};

export default Switzerland;
