import Wrapper from "./Wrapper";
import image from "../assets/aboutus.jpg";

import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <>
      <div className="AboutUS">
        <Wrapper>
          <div className="container">
            <div className="image">
              <img src={image} alt="worldo-pedia image" />
            </div>
            <div className="text">
              <h3>Learn about us</h3>
              <h2>Dare to Explore with Worldo-Pedia</h2>
              <p>
                We are trusted by our clients and have a reputation for the best
                services in the field. Lorem ipsum is simply free text dolor sit
                amett consectetur adipiscing elit. It is a long established fact
                that a reader will be distracted by the readable content of a
                page.
              </p>
              <div className="progressbar">
                <div className="item">
                  <span>Best Services</span>
                  <ProgressBar completed={88} bgColor={"#17a2ba"} />
                </div>
                <div className="item">
                  <span>Tour Agents</span>
                  <ProgressBar completed={75} bgColor={"#17a2ba"} />
                </div>
              </div>

              <Link className="pBtn" to={"/contact"}>
                Know more
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="bannerAboutus">
        <Wrapper>
          <div className="container">
            <div className="text">
              <h3>Plan your trip with us</h3>
              <h2>Ready for an unforgetable tour?</h2>
            </div>
            <Link to={"/contact"} className="pBtn">
              Book tour now
            </Link>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Aboutus;
