import React from "react";
import { useState } from "react";
import { inputbuttondata } from "./inboxbuttondata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./inboxbutton.css";

const Inboxbutton = () => {
  const [data, setData] = useState(inputbuttondata);
  return (
    <div className="inboxbutton">
      {data.map((val, index) => {
        return (
          <button
            key={index}
            style={
              index == 0
                ? { color: "#0b57d0", borderBottom: "4px solid #0b57d0" }
                : { color: "#444746" }
            }
          >
            <span
              style={index == 0 ? { color: "#0b57d0 " } : { color: "#444746" }}
            >
              <FontAwesomeIcon icon={val.icon} />
            </span>
            {val.button}
          </button>
        );
      })}
    </div>
  );
};

export default Inboxbutton;
