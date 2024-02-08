import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import emailicon1 from "../images/emailogo.png";
import "../css/bars.css";
import { useDispatch } from "react-redux";
import { responsivesidestatus, statusChange } from "../slice/statusSlice";

const Bars = () => {
  const dispatch = useDispatch();

  return (
    <div className="barsbox">
      <p className="phonebar_none" onClick={() => dispatch(statusChange())}>
        <abbr className="abbr" title={"Main menu"}>
          <FontAwesomeIcon icon={faBars} />
        </abbr>
      </p>
      <p
        onClick={() => dispatch(responsivesidestatus(true))}
        className="phone_bar"
      >
        <abbr className="abbr" title={"Main menu"}>
          <FontAwesomeIcon icon={faBars} />
        </abbr>
      </p>

      <abbr title="G mail">
        <img src={emailicon1} alt="Gmail logo" />
      </abbr>
    </div>
  );
};

export default Bars;
