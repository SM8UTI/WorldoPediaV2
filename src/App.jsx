import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [loadding, setLoadding] = useState(true);
  useEffect(() => {
    setLoadding(true);
    window.addEventListener("load", () => {
      setLoadding(false);
      setTimeout(() => {
        setLoadding(false);
      }, 500);
    });

    AOS.init();
  }, []);
  return (
    <>
      {loadding ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
