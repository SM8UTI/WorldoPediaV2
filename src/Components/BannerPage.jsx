import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const BannerPage = ({ text, img }) => {
  return (
    <div className="BannerPage">
      <div className="cover-main">
        <img src={img} alt="banner page image" className="cover" />
      </div>
      <Wrapper>
        <div className="container">
          <div className="text" data-aos="fade-up">
            <h2>{text}</h2>
          </div>

          <div className="text-link">
            <h4>
              <Link to={"/"}>Home</Link> / {text}
            </h4>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BannerPage;
