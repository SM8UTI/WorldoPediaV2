import Banner from "./Banner";
import Wrapper from "./Wrapper";

import data from "../Data/statsData.json";

const Banner2 = () => {
  return (
    <div className="Banner2">
      <Banner />
      <Wrapper>
        <div className="stats">
          <div className="container">
            {data.map((elem, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-bottom"
              >
                <h3>{elem.value}</h3>
                <span>{elem.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Banner2;
