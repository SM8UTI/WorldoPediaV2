import Banner from "../Components/Banner";
import Benifits from "../Components/Benifits";
import GetToKnowUS from "../Components/GetToKnowUS";
import Hero from "../Components/Hero";
import News from "../Components/News";
import PopularTours from "../Components/PopularTours";
import ServiceCarsoul2 from "../Components/ServiceCarsoul2";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceCarsoul2 />
      <GetToKnowUS />
      <Benifits />
      <Services />
      <PopularTours />
      <Banner />
      <News />
    </>
  );
};

export default Home;
