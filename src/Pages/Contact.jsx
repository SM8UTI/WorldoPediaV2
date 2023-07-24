import SocialIcons from "../Components/SocialIcons";
import Wrapper from "../Components/Wrapper";

import { BiSolidMap } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import ContactDetails from "../Data/contactDetails.json";
import BannerPage from "../Components/BannerPage";

import image from "../assets/contactBanner.jpg";
import coverImg from "../assets/bg-map-2.png";

const Contact = () => {
  return (
    <>
      <BannerPage text={"Contact"} img={image} />
      <div className="Contact" id="contact">
        <img src={coverImg} className="opacityImage" />
        <Wrapper>
          <div className="header" data-aos="zoom-in-up">
            <h3>Talk with our team</h3>
            <h2>Any Question? Feel Free to Contact</h2>
            <SocialIcons />
          </div>
          <div className="container">
            <form>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="dd-mm-yyyy"
                />
                <input
                  type="text"
                  name="origin"
                  id="origin"
                  placeholder="Origin"
                />
                <input
                  type="text"
                  name="destinations"
                  id="destinations"
                  placeholder="Destinations"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="Write Message"
                ></textarea>
              </div>
              <button type="submit" className="pBtn">
                Send a message
              </button>
            </form>
            <div className="img">
              <img
                src="https://images.unsplash.com/photo-1497302347632-904729bc24aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="img"
                loading="lazy"
              />
            </div>
          </div>
          <div className="contactsDetails">
            <ul className="cards">
              <li
                className="card"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="ico">
                  <BiSolidMap />
                </div>
                <h4>Address</h4>
                <span>{ContactDetails.address}</span>
              </li>
              <li
                className="card"
                data-aos="zoom-out-up"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="ico">
                  <HiPhone />
                </div>
                <h4>Phone</h4>
                <span>{ContactDetails.phone}</span>
              </li>
              <li
                className="card"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
              >
                <div className="ico">
                  <MdEmail />
                </div>
                <h4>Email</h4>
                <span>{ContactDetails.email}</span>
              </li>
            </ul>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Contact;
