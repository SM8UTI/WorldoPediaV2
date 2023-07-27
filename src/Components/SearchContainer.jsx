import adventure from "../assets/adventure-blue.png";
import bicyling from "../assets/bicycling-blue.png";
import clock from "../assets/clock-blue.png";
import team from "../assets/team-blue.png";

import { BiSearch } from "react-icons/bi";

const SearchContainer = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <div
      className="SearchContainer"
      data-aos="zoom-in-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-end"
    >
      <div className="SearchContainer-container">
        <form>
          <div className="inputCard">
            <div className="ico">
              <img src={adventure} alt="adventure" loading="lazy" />
            </div>
            <div>
              <div>
                <span>Where are you going?</span>
              </div>
              <select name="destinations" id="destinations">
                <option value="Destinations">Destinations</option>
                <option value="lol">lol</option>
              </select>
            </div>
          </div>
          <div className="inputCard">
            <div className="ico">
              <img src={bicyling} alt="bicycling" loading="lazy" />
            </div>
            <div>
              <div>
                <span>Activity type</span>
              </div>
              <select name="activity" id="activity">
                <option value="Activity">Activity</option>
              </select>
            </div>
          </div>
          <div className="inputCard">
            <div className="ico">
              <img src={clock} alt="clock" loading="lazy" />
            </div>
            <div>
              <div>
                <label htmlFor="date">When</label>
              </div>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date From"
                onFocus={(e) => {
                  e.target.type = "date";
                }}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                min={currentDate}
              />
            </div>
          </div>
          <div className="inputCard">
            <div className="ico">
              <img src={team} alt="team" loading="lazy" />
            </div>
            <div>
              <div>
                <label htmlFor="guests">Guests</label>
              </div>
              <input type="text" name="guests" id="guests" placeholder="0" />
            </div>
          </div>
          <button type="submit" className="pBtn">
            <div className="ico">
              <BiSearch />
            </div>
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchContainer;
