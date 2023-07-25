import Aboutus from "../Components/Aboutus";
import Banner2 from "../Components/Banner2";
import BannerPage from "../Components/BannerPage";
import Testimonials from "../Components/Testimonials";
import aboutBanner from "../assets/aboutBanner.jpg";

const About = () => {
  return (
    <>
      <BannerPage text={"About"} img={aboutBanner} />
      <Aboutus />
      <Testimonials />
      <Banner2 />
    </>
  );
};

export default About;
