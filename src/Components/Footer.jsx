import Wrapper from "./Wrapper";
import logo from "../assets/worldopedia_Logo_white.svg";
import { AiFillPhone, AiOutlineArrowUp } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import FooterDetails from "../Data/footerData.json";
import coverImg from "../assets/bg-map-2.png";
import SocialIcons from "./SocialIcons";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    // Scroll to the top of the page with smooth animation
    scroll.scrollToTop();
  };

  return (
    <div className="Footer">
      <div className="imgCover">
        <img src={coverImg} alt="cover map" loading="lazy" />
      </div>
      <Wrapper>
        <div className="container">
          <div className="company">
            <div className="logo">
              <img src={logo} alt="logo" loading="lazy" />
            </div>
            <p>{FooterDetails.desc}</p>
            <ul className="footerContacts">
              <li>
                <div className="ico">
                  <AiFillPhone />
                </div>
                <Link to={`tel:${FooterDetails.addressInfo.phone}`}>
                  +91 {FooterDetails.addressInfo.phone}
                </Link>
              </li>
              <li>
                <div className="ico">
                  <IoIosMail />
                </div>
                <Link to={`mailto:${FooterDetails.addressInfo.email}`}>
                  {FooterDetails.addressInfo.email}
                </Link>
              </li>
              <li>
                <div className="ico">
                  <BiSolidMap />
                </div>
                <span>{FooterDetails.addressInfo.address}</span>
              </li>
            </ul>
          </div>
          <ul className="lists lists-1">
            <h4>{FooterDetails.list1Name}</h4>
            {FooterDetails.list1.map((elem, index) => (
              <li key={index}>
                <Link to={elem.link}>{elem.text}</Link>
              </li>
            ))}
          </ul>
          <ul className="lists lists-2">
            <h4>{FooterDetails.list2Name}</h4>
            {FooterDetails.list2.map((elem, index) => (
              <li key={index}>
                <Link to={elem.link}>{elem.text}</Link>
              </li>
            ))}
          </ul>
          <div className="Newsletter">
            <h4>Newsletter</h4>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <button className="pBtn" type="submit">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
      <div className="copyrightSection">
        <div className="arrowUp" onClick={scrollToTop}>
          <AiOutlineArrowUp />
        </div>
        <div className="col">
          <SocialIcons />
          <span>© Copyright 2022 by Worldo-pedia</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
