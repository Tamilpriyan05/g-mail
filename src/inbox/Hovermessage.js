import {
  faBoxArchive,
  faClock,
  faEnvelope,
  faGripVertical,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hovermessage = () => {
  return (
    <>
      <div className="hover_message">
        <p>
          <FontAwesomeIcon icon={faGripVertical} />
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faBoxArchive} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
        </p>
      </div>
    </>
  );
};

export default Hovermessage;
