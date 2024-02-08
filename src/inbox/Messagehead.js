import {
  faArrowLeft,
  faBoxArchive,
  faChevronLeft,
  faChevronRight,
  faCircleCheck,
  faCircleInfo,
  faClock,
  faEllipsisVertical,
  faEnvelopeOpen,
  faFolder,
  faTag,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./messagehead.css";
import { useNavigate } from "react-router-dom";

const Messagehead = (props) => {
  const [message, setMessage] = useState(props.id);
  const [messagedata, setMsgdata] = useState(props.sendlength);
  const navigate = useNavigate();
  return (
    <div className="messagehead_headbox">
      <div className="msghead_res1">
        <abbr onClick={() => navigate("/")} title="Back to Inbox">
          <FontAwesomeIcon icon={faArrowLeft} />
        </abbr>
      </div>
      <div className="messaghead_headbox_box2">
        <abbr title="Archive">
          <FontAwesomeIcon icon={faBoxArchive} />
        </abbr>
        <abbr title="Report Spam">
          <FontAwesomeIcon icon={faCircleInfo} />
        </abbr>
        <abbr title="Delte">
          <FontAwesomeIcon icon={faTrash} />
        </abbr>
        <span>|</span>
        <abbr title="Make Us Unread">
          <FontAwesomeIcon icon={faEnvelopeOpen} />
        </abbr>
        <abbr title="Snooze">
          <FontAwesomeIcon icon={faClock} />
        </abbr>
        <abbr title="Add to task">
          <FontAwesomeIcon icon={faCircleCheck} />
        </abbr>
        <span>|</span>
        <abbr title="Move to">
          <FontAwesomeIcon icon={faFolder} />
        </abbr>
        <abbr title="Lables">
          <FontAwesomeIcon icon={faTag} />
        </abbr>
        <abbr title="More">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </abbr>
      </div>
      <div className="msghead_last">
        <p>
          {message} of {messagedata}
        </p>
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

export default Messagehead;
