import Wrapper from "./Wrapper";
import img from "../assets/about.jpg";
import { AiFillCheckCircle } from "react-icons/ai";
import getToKnowUSData from "../Data/getToKnowUSData.json";

const GetToKnowUS = () => {
  return (
    <div className="getToKnowUSData" id="getToKnowUSData">
      <Wrapper>
        <div className="container">
          <div
            className="image"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
          >
            <img src={img} alt="getToKnowUSData" loading="lazy" />
            <ul>
              <li>
                <h3>{getToKnowUSData.discountValue}</h3>
                <span>Discount</span>
              </li>
              <li>
                <span>Book tour now</span>
                <h3>{getToKnowUSData.phone}</h3>
              </li>
            </ul>
          </div>
          <div className="text">
            <h3>{getToKnowUSData.h3}</h3>
            <h2>{getToKnowUSData.h2}</h2>
            <p>{getToKnowUSData.p}</p>
            <ul
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              {getToKnowUSData.list.map((elem, index) => (
                <li key={index}>
                  <AiFillCheckCircle className="ico" />
                  <p>{elem.text}</p>
                </li>
              ))}
            </ul>
            <button className="pBtn">view more</button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default GetToKnowUS;
