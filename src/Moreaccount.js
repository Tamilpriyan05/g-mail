import React from "react";
import "./css/moreaccount.css";
import accounimage from "./images/accounticon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { moreaccountclose } from "./slice/statusSlice";

const Moreaccount = () => {
  const dispatch = useDispatch();
  return (
    <div className="moreaccountbox">
      <div className="moreaccount_insidebox postionrealtive">
        <div className="moreaccoount_mail">
          <p>priyanpri555@gmail.com</p>
          <span onClick={() => dispatch(moreaccountclose(false))}>X</span>
        </div>
        <div className="postionrealtive moreaccount_Img">
          <img src={accounimage} width={80} />
          <p>Hi, TAMILPRIYAN!</p>
          <button>mange your google account</button>
        </div>
        <div className="moreacount_innerbox">
          <div className="space_between">
            <p>Hide more accounts</p>
            <p style={{ fontSize: 22 }}>^</p>
          </div>
          <div className="accountlast_img">
            <img src={accounimage} width={30} height={30} />
            <p>
              <span>
                TAMILPRIYAN <br /> priyanpri555@gmail.com
              </span>
            </p>
          </div>
          <div className="signout_box">
            <span style={{ color: "blue" }}>+</span>
            <p>Add another account</p>
          </div>
          <div className="signout_box lastsignoutbox">
            <span>
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            <p>Sign out of all acounts</p>
          </div>
        </div>
      </div>
      <div className="lastline_acountbox">
        <span>Privacy policy </span>
        <span>. </span>
        <span> Terms of service</span>
      </div>
    </div>
  );
};

export default Moreaccount;
