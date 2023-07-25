import NavMenuList from "../Data/navMenuData.json";
import logo from "../assets/worldopedia_Logo.webp";
import HeaderMenuItem from "./HeaderMenuItem";

import { animateScroll as scroll } from "react-scroll";


const HeaderMobileMenu = ({ setHamMenu, hamMenu }) => {
  return (
    <>
      <div className="HeaderMobileMenuContainer">
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <div className="btn">
            <div
              className={"menuBtn active"}
              onClick={() => setHamMenu(!hamMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="navM">
          <ul className="navMenuM">
            {NavMenuList?.map((elem, index) => (
              <HeaderMenuItem elem={elem} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeaderMobileMenu;
