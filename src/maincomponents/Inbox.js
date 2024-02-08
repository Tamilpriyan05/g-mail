import React, { useState } from "react";
import Inboxbutton from "../inbox/Inboxbutton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../maincomponentscss/Inbox.css";
import Footer from "./Footer";
import { allmessage } from "../allmessage";
import Hovermessage from "../inbox/Hovermessage";

const Inbox = () => {
  const [message, setMessage] = useState(allmessage);
  const [indexhover, setIndexhover] = useState(null);
  const [indexhov, setIndexhov] = useState(false);
  const handleover = (index) => {
    setIndexhover(index);
    setIndexhov(true);
  };
  const handlemouseout = () => {
    setIndexhover(null);
    setIndexhov(false);
  };
  return (
    <div className="inboxmessage_box">
      <Inboxbutton />
      <div className="input_message" onMouseLeave={handlemouseout}>
        {message.map((val, index) => {
          return (
            <Link key={val.id} to={`/${val.id}`}>
              <div
                style={
                  index == indexhover
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Hovermessage />
              </div>
              <div className="inboxmsg_phone">
                <div className="inboxmsg_phonebox1">
                  <img src={val.img} />
                </div>

                <div className="inboxmsg_phonebox2">
                  <p
                    style={{
                      color: "black",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {val.username.length < 15
                      ? val.username
                      : `${val.username.slice(0, 15)}...`}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    {val.title.length < 45
                      ? val.title
                      : `${val.title.slice(0, 45)}`}
                  </p>
                  <p>
                    {" "}
                    {val.message.length < 70
                      ? val.message
                      : `${val.message.slice(0, 70)}....`}
                  </p>
                </div>
                <div className="inboxmsg_phonebox3">
                  <span>dd/mm/yyyy</span>
                </div>
              </div>
              <div
                className="flex space_between msg_boxes"
                onMouseOver={() => handleover(index)}
              >
                <div className="phone_width_check" style={{ width: "2%" }}>
                  <input type="checkbox" checked={val.checked} />
                </div>

                <div className="phone_width_check" style={{ width: "2%" }}>
                  <label>
                    <FontAwesomeIcon icon={faStar} />
                  </label>
                </div>
                <p style={{ width: "15%" }}>
                  {val.username.length < 15
                    ? val.username
                    : `${val.username.slice(0, 15)}...`}
                </p>
                <p style={{ width: "70%" }}>
                  {val.title.length < 40
                    ? val.title
                    : `${val.title.slice(0, 40)}`}{" "}
                  -
                  <span style={{ color: "grey" }}>
                    {val.message.length < 70
                      ? val.message
                      : `${val.message.slice(0, 70)}....`}
                  </span>
                </p>
                <p
                  className="msg_date"
                  style={
                    index == indexhover
                      ? indexhov
                        ? { visibility: "hidden" }
                        : null
                      : null
                  }
                >
                  dd/mm/yyyy
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Inbox;
