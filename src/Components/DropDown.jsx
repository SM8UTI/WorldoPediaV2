import React from "react";
import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const DropDown = ({ data, open }) => {
  const [openMenu, setOpenMenu] = useState(open);
  return (
    <div className={"DropDown"} onClick={() => setOpenMenu(!openMenu)}>
      <div className="header">
        <h4>Day {data.day}</h4>
        <div className={openMenu ? "ico active" : "ico"}>
          <RxChevronDown />
        </div>
      </div>
      <div className={openMenu ? "body active" : "body"}>
        <div className="body-container">
          <h5>{data.activity}</h5>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
