import React, { useState }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import accounticon from "../images/accountimg/tenacc.jpg";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import "../css/headicon.css";
import { useDispatch } from "react-redux";
import { googlestatus, moreaccountstatus} from "../slice/statusSlice";

const Headicon = () => {
  const dispatch = useDispatch();
  
   
 

  return (
    <div className="headiconbox">
      <span>
        <abbr  onClick={() => dispatch(googlestatus(true))} title="Google apps">
          {" "}
          <FontAwesomeIcon icon={faGrip} />
        </abbr>
      </span>

      <div>
        <img 
          onClick={() => dispatch(moreaccountstatus(true))}
          src={accounticon}
          alt="userimage"
        />
      </div>
    </div>
  );
};

export default Headicon;
