import Wrapper from "./Wrapper";

import data from "../Data/testimonialsData.json";
import Carsoual from "./Carsoual";
import ReviewStar from "./ReviewStar";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <Wrapper>
        <div className="header">
          <h3>Testimonials & reviews</h3>
          <h2>What They’re Saying</h2>
        </div>
        <div className="container">
          <Carsoual>
            {data?.map((elem, index) => (
              <div key={index} className="Testimonials-card">
                <div className="Testimonials-card-container">
                  <div className="image">
                    <img
                      src={`/userImage/${index + 1}.jpeg`}
                      alt="worldo-pedia user image"
                    />
                  </div>
                  <div className="text">
                    <div className="message">
                      <p>{elem.message.slice(0, 100)}...</p>
                      <h4>{elem.name}</h4>
                    </div>
                    <ReviewStar rating={elem.review_star} />
                  </div>
                </div>
              </div>
            ))}
          </Carsoual>
        </div>
      </Wrapper>
    </div>
  );
};

export default Testimonials;
