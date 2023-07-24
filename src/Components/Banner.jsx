import Wrapper from "./Wrapper";
import BannerText from "../Data/bannerData.json";
import { FaPlay } from "react-icons/fa";
import travelBlue from "../assets/travel-blue.png";
import adventure from "../assets/adventure-blue.png";
import paragliding from "../assets/paragliding-blue.png";
import hanggliding from "../assets/hang-gliding-blue.png";

const Banner = () => {
  return (
    <div className="Banner">
      <Wrapper>
        <div className="container">
          <div
            className="txt"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="ico">
              <FaPlay />
            </div>
            <h3>{BannerText.h3}</h3>
            <h2>{BannerText.h2}</h2>
          </div>
          <div className="cards">
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="card-container">
                <div>
                  <img src={travelBlue} alt="travel blue" loading="lazy" />
                </div>
                <h4>International Tour Packages</h4>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="card-container">
                <div>
                  <img
                    src={paragliding}
                    alt="paragliding blue"
                    loading="lazy"
                  />
                </div>
                <h4>Domestic Tour Packages</h4>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="card-container">
                <div>
                  <img src={adventure} alt="adventure blue" loading="lazy" />
                </div>
                <h4>Adventure Tours</h4>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="card-container">
                <div>
                  <img
                    src={hanggliding}
                    alt="hanggliding blue"
                    loading="lazy"
                  />
                </div>
                <h4>Hang Gliding Tours</h4>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner;
