import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faRotateRight,
  faEllipsisVertical,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./inboxhead.css";
import { allmessage } from "../allmessage";

const Inboxhead = () => {
  const [length, setLength] = useState(allmessage.length);
  return (
    <div className="inboxhead">
      <div className="inboxhead_box1">
        <abbr title="Selct">
          <input type="checkbox" />

          <label>
            <FontAwesomeIcon icon={faSortDown} />
          </label>
        </abbr>
        <span>
          <FontAwesomeIcon icon={faRotateRight} />
        </span>

        <span>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </span>
      </div>
      <div className="inboxhead_box2">
        <p>1-50 of {length}</p>
        <div>
          <span>
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} />{" "}
          </span>
          <span>
            {" "}
            <FontAwesomeIcon icon={faChevronRight} />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Inboxhead;
