import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allmessage } from "../allmessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDown,
  faCaretDown,
  faEllipsisVertical,
  faFaceSmileWink,
  faPrint,
  faReply,
  faReplyAll,
  faShare,
  faStar,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./inboxmessage.css";
import smily from "../images/inboxsmily.png";
import Messagehead from "./Messagehead";

const Inboxmessage = () => {
  const [data, setData] = useState(allmessage);
  const [msgdata, setMsgdata] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const listitem = data.filter((val) => val.id == id);
    setMsgdata(listitem);
  }, []);

  const messagecard = msgdata.map((val) => {
    return (
      <div key={val.id} className="inbox_msgbox postionrealtive">
        <Messagehead sendlength={data.length} id={id} />
        <div className="msg_title">
          <h2>
            {val.title}
            <span>Inbox x</span>
          </h2>
          <div>
            <abbr title="Expand all">
              <FontAwesomeIcon icon={faArrowsUpDown} />
            </abbr>
            <abbr title="Print all">
              <FontAwesomeIcon icon={faPrint} />
            </abbr>
            <abbr title="in new window">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </abbr>
          </div>
        </div>
        <div className="inbox_mgsimg">
          <div className="img_inbox">
            <img src={val.img} />
          </div>
          <div className="inbox_textmsg">
            <div className="flex space_between ">
              <div className="msgto">
                <h3>
                  {val.username} <span>{`<${val.emailid}>`}</span>{" "}
                </h3>
                <span>to me</span>
                <label>
                  <FontAwesomeIcon icon={faCaretDown} />
                </label>
              </div>
              <div className="reaction_msg">
                <span>Sun, 4 Feb, 20:33 (14 hours ago)</span>
                <abbr title="Not stared">
                  <FontAwesomeIcon icon={faStar} />
                </abbr>
                <abbr title="Add reaction">
                  <FontAwesomeIcon icon={faFaceSmileWink} />
                </abbr>
                <abbr title="Reply">
                  <FontAwesomeIcon icon={faReply} />
                </abbr>
                <abbr title="more">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </abbr>
              </div>
            </div>

            <p>{val.message}</p>
            <p>{val.thankyou}</p>
            <div className="address_line">
              <p>XXXXXXXXX</p>
              <p>ZZZZZZZZZ</p>
              <p>YYYYYYYYY</p>
              <p>0000000000</p>
            </div>
          </div>
        </div>
        <div className="inboxmsg_btn">
          <button>
            <span>
              <FontAwesomeIcon icon={faReply} />
            </span>{" "}
            Reply
          </button>
          <button>
            <span>
              <FontAwesomeIcon icon={faReplyAll} />
            </span>{" "}
            Reply to all
          </button>
          <button>
            <span>
              <FontAwesomeIcon icon={faShare} />
            </span>{" "}
            Forward
          </button>
          <img src={smily} />
        </div>
      </div>
    );
  });
  return <div>{messagecard}</div>;
};

export default Inboxmessage;
