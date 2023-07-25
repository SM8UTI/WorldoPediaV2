import Wrapper from "./Wrapper";
import NavMenuList from "../Data/navMenuData.json";

import logo from "../assets/worldopedia_Logo.webp";

import { useEffect, useState } from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
  const [hamMenu, setHamMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        document.getElementById("Header").style.boxShadow =
          "rgba(0, 0, 0, 0.24) 0px 3px 8px";
      } else {
        document.getElementById("Header").style.boxShadow = "0 0 0 0";
      }
    });
  }, []);
  return (
    <header id="Header">
      <Wrapper>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={"menuBtn"} onClick={() => setHamMenu(!hamMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav">
            <ul className="navMenu">
              {NavMenuList?.map((elem, index) => (
                <HeaderMenuItem elem={elem} key={index} />
              ))}
            </ul>
          </div>
          <div className={hamMenu ? "navMenuMobile active" : "navMenuMobile"}>
            <HeaderMobileMenu hamMenu={hamMenu} setHamMenu={setHamMenu} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
