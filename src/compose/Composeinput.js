import React, { useState } from "react";
import "./compose.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faTrash,
  faWindowClose,
  faWindowMinimize,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { composelink } from "./composedata";
import { useDispatch } from "react-redux";
import { composestatus } from "../slice/statusSlice";

const Composeinput = () => {
  const [icons, setIcons] = useState(composelink);
  const dispatch = useDispatch();
  return (
    <div className="compose_box">
      <div className="compose_head">
        <p>New Message</p>
        <div>
          <span>
            <FontAwesomeIcon icon={faWindowMinimize} />
          </span>
          <span>
            <FontAwesomeIcon icon={faWindowRestore} />
          </span>
          <span onClick={() => dispatch(composestatus(false))}>
            <FontAwesomeIcon icon={faWindowClose} />
          </span>
        </div>
      </div>
      <div className="compose_input">
        <input type="text" placeholder="Recipients" />
        <input type="text" placeholder="Subject" />
      </div>
      <div className="compose_bottom">
        <div>
          <button>
            Send{" "}
            <span>
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </button>
        </div>
        <ul>
          {icons.map((val, index) => {
            return (
              <li key={index}>
                <abbr title={val.abbr}>
                  <FontAwesomeIcon icon={val.icon} />
                </abbr>
              </li>
            );
          })}
        </ul>
        <p>
          <FontAwesomeIcon icon={faTrash} />
        </p>
      </div>
    </div>
  );
};

export default Composeinput;
