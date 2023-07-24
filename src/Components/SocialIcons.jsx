import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { Link } from "react-router-dom";

import social from "../Data/sociallinks.json";

const SocialIcons = () => {
  return (
    <>
      <ul className="SocialIcons">
        <li>
          <Link to={social.instagram}>
            <AiFillInstagram />
          </Link>
        </li>
        <li>
          <Link to={social.facebook}>
            <AiFillFacebook />
          </Link>
        </li>
        <li>
          <Link to={social.twitter}>
            <AiFillTwitterSquare />
          </Link>
        </li>
        <li>
          <Link to={social.linkedin}>
            <AiFillLinkedin />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialIcons;
