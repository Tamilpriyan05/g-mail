import React from "react";
import emailicon1 from "../images/emailogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { inputbuttondata } from "../inbox/inboxbuttondata";
import { linkdata } from "../routing/linkdata";
import { linkdata2 } from "../routing/linkdata";
import './responsiveside.css'
import { useDispatch } from "react-redux";
import { responsivesidestatus } from "../slice/statusSlice";

const ResponsiveSidebar = () => {
    const dispatch=useDispatch();
  return (
    <div className="responsivesidebarbox">
        <div className="ressponsivesidebar_img">
           <img src={emailicon1} />
           <p onClick={()=>dispatch(responsivesidestatus(false))}>X</p>
    </div>
     
      <div className="res_side_allmsg">
        <Link to="/">
          <p >
            <span>
              <FontAwesomeIcon icon={faComments} />
            </span>{" "}
            All inboxes
          </p>
        </Link>
      </div>
      <div>
        {inputbuttondata.map((val) => {
          return (
            <p >
              <span>
                <FontAwesomeIcon icon={val.icon} />
              </span>
              {val.button}
            </p>
          );
        })}
      </div>
      <div>
        {linkdata.map((val) => {
          return (
            <Link to={val.path}>
              <p >
                <span>
                  <FontAwesomeIcon icon={val.icons} />
                </span>
                {val.itemname}
              </p>
            </Link>
          );
        })}
      </div>
      <div>
        {linkdata2.map((val) => {
          return (
            <Link to={val.path}>
              <p >
                <span>
                  <FontAwesomeIcon icon={val.icons} />
                </span>
                {val.itemname}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
