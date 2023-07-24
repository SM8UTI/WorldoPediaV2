import Wrapper from "./Wrapper";
import honeymoon from "../assets/honeymoon.png";
import sunsetOrange from "../assets/sunset-orange.png";
import ticketFlight from "../assets/ticket-flight-green.png";
import hotelYellow from "../assets/hotel-yellow.png";
import boatCyan from "../assets/boat-cyan.png";
import luggageRed from "../assets/luggage-red.png";
import travellingPurple from "../assets/travelling-purple.png";
import domestic from "../assets/india.png";
import tiger from "../assets/tiger.png";
import visa from "../assets/passport.png";
import forex from "../assets/forex.png";
import Carsoual from "./Carsoual";

const ServiceCarsoul2 = () => {
  return (
    <div
      className="ServiceCarsoul2"
      data-aos="zoom-in-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-end"
    >
      <Wrapper>
        <div className="container">
          <Carsoual>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico luggageRed">
                  <img loading="lazy" src={luggageRed} alt="luggageRed" />
                </div>
                <span>International Tour Packages</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico domestic">
                  <img loading="lazy" src={domestic} alt="domestic" />
                </div>
                <span>Domestic Tour Packages</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico honeymoon">
                  <img loading="lazy" src={honeymoon} alt="honeymoon" />
                </div>
                <span>Honeymoon Tour Packages</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico sunsetOrange">
                  <img loading="lazy" src={sunsetOrange} alt="sunsetOrange" />
                </div>
                <span>Sightseeing</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico flight">
                  <img loading="lazy" src={ticketFlight} alt="ticketFlight" />
                </div>
                <span>Flight Booking</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico tiger">
                  <img loading="lazy" src={tiger} alt="tiger" />
                </div>
                <span>Wild Life</span>
              </div>
            </div>

            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico boatCyan">
                  <img loading="lazy" src={boatCyan} alt="boatCyan" />
                </div>
                <span>Cruises</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico travellingPurple">
                  <img
                    loading="lazy"
                    src={travellingPurple}
                    alt="travellingPurple"
                  />
                </div>
                <span>Transfer</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico hotelYellow">
                  <img loading="lazy" src={hotelYellow} alt="hotelYellow" />
                </div>
                <span>Hotel Booking</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico visa">
                  <img loading="lazy" src={visa} alt="visa" />
                </div>
                <span>Visa</span>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="ServiceCard-container">
                <div className="ico forex">
                  <img loading="lazy" src={forex} alt="forex" />
                </div>
                <span>Forex Exchange</span>
              </div>
            </div>
          </Carsoual>
        </div>
      </Wrapper>
    </div>
  );
};

export default ServiceCarsoul2;
