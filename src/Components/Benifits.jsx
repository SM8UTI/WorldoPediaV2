import BenifitsText from "../Data/benifitsData.json";
import travelLogo from "../assets/travel.png";
import booking from "../assets/booking.png";
import bgMap from "../assets/bg-map-2.png";
import Wrapper from "./Wrapper";

import image from "../assets/benifits.jpg";

const Benifits = () => {
  return (
    <div className="Benifits">
      <Wrapper>
        <div className="container">
          <img src={bgMap} alt="bg map" loading="lazy" className="bgMap" />

          <div
            className="text"
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-anchor-placement="top-bottom"
          >
            <h3>{BenifitsText.h3}</h3>
            <h2>{BenifitsText.h2}</h2>
            <p>{BenifitsText.p}</p>
            <ul>
              <li
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="ico">
                  <img src={travelLogo} loading="lazy" alt="travel logo" />
                </div>
                <div className="txt">
                  <h4>{BenifitsText.benifitsLists[0].h4}</h4>
                  <p>{BenifitsText.benifitsLists[0].p}</p>
                </div>
              </li>
              <li
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="ico">
                  <img src={booking} loading="lazy" alt="booking logo" />
                </div>
                <div className="txt">
                  <h4>{BenifitsText.benifitsLists[1].h4}</h4>
                  <p>{BenifitsText.benifitsLists[1].p}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <div className="image">
        <img src={image} alt="Worldo-pedia benifits image" />
      </div>
    </div>
  );
};

export default Benifits;
