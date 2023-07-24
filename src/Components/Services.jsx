import Wrapper from "./Wrapper";
import ServicesText from "../Data/serviceData.json";

// import img2 from "../assets/service1.avif";

const Services = () => {
  return (
    <div className="Services">
      <Wrapper>
        <div
          className="text"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="center-bottom"
        >
          <h3>{ServicesText.h3}</h3>
          <h2>{ServicesText.h2}</h2>
          <p>{ServicesText.p}</p>
        </div>
        <div className="container">
          {ServicesText.serviceList.map((elem, index) => (
            <div
              key={index}
              className="serviceListItem"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="img">
                <img src={elem.image} alt={elem.text} loading="lazy" />
                <div className="opacity"></div>
              </div>

              <h3>{elem.text}</h3>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
