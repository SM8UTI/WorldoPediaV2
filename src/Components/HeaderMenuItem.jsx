import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";

const HeaderMenuItem = ({ elem }) => {
  const [subMenuShow, setSubMenuShow] = useState(false);

  return (
    <>
      <li className="navMenuItemContainer">
        <Link
          to={elem?.link}
          className={"navMenuItem"}
          onClick={() => {
            setSubMenuShow(!subMenuShow);
            scroll.scrollToTop();
          }}
        >
          <span>{elem.text}</span>
          {elem.subMenu !== undefined && <IoIosArrowDown className="ico" />}
        </Link>

        {elem.subMenu !== undefined && (
          <ul
            className={subMenuShow ? "subMenu active" : "subMenu"}
            onMouseLeave={() => setSubMenuShow(false)}
          >
            {elem.subMenu?.map((el, index) => (
              <li key={index}>
                <Link to={el.link}>
                  <span>{el.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default HeaderMenuItem;
