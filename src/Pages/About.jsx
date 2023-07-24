import Aboutus from "../Components/Aboutus";
import BannerPage from "../Components/BannerPage";
import aboutBanner from "../assets/aboutBanner.jpg";

const About = () => {
  return (
    <>
      <BannerPage text={"About"} img={aboutBanner} />
      <Aboutus />
    </>
  );
};

export default About;
