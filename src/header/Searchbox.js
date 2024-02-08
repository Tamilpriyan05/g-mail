import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { icons } from "./icon";
import "../css/searchbox.css";
import { useDispatch } from "react-redux";
import { supportstatus } from "../slice/statusSlice";

const Searchbox = () => {
  const [icon, setIcon] = useState(icons);

  const dispatch = useDispatch();

  return (
    <div className="searchbox">
      <div className="search_input">
        <div>
          <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} />
          <input type="text" placeholder="Search mail" />
          <FontAwesomeIcon className="filter_icon" icon={faSliders} />
        </div>
      </div>

      <div className="searchbox_icons">
        <div className="postionrealtive">
          {icon.map((val, index) => {
            return (
              <span key={index}>
                <abbr
                  title={val.catageroy}
                  onClick={() => dispatch(supportstatus(true))}
                >
                  <FontAwesomeIcon icon={val.icon} />
                </abbr>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Searchbox;
