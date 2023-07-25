import Aboutus from "../Components/Aboutus";
import BannerPage from "../Components/BannerPage";
import Testimonials from "../Components/Testimonials";
import aboutBanner from "../assets/aboutBanner.jpg";

const About = () => {
  return (
    <>
      <BannerPage text={"About"} img={aboutBanner} />
      <Aboutus />
      <Testimonials />
    </>
  );
};

export default About;
