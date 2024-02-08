import React from "react";
import { linkdata, linkdata2 } from "./linkdata";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Sidelinks = () => {
  const [data, setData] = useState(linkdata);
  const [data1, setData1] = useState(linkdata2);
  const [index1, setIndex1] = useState(0);

  const noneStatus = useSelector((state) => state.status.status);
  const linkhide = useRef(null);
  const linkshow = useRef(null);
  const handlehide = () => {
    linkhide.current.style.display = "none";
    linkshow.current.style.display = "block";
  };
  const handlemore = () => {
    linkhide.current.style.display = "block";
    linkshow.current.style.display = "none";
  };
  const handleindexchange = (index) => {
    setIndex1(index);
  };
  return (
    <>
      <ul className="side_links">
        {data.map((val, index) => {
          return (
            <Link key={index} to={val.path}>
              <li
                onClick={() => handleindexchange(index)}
                className="link_black"
                style={
                  index === index1
                    ? {
                        color: "#001d35",
                        fontWeight: "bold",
                        backgroundColor: "#d3e3fd",
                        fontSize: "16px",
                      }
                    : null
                }
              >
                <FontAwesomeIcon className="inbox_icon" icon={val.icons} />
                <span style={noneStatus ? { display: "none" } : null}>
                  {val.itemname}
                </span>
              </li>
            </Link>
          );
        })}
        <li onClick={handlemore} ref={linkshow}>
          <FontAwesomeIcon icon={faAngleDown} />
          <span style={noneStatus ? { display: "none" } : null}>More</span>
        </li>
      </ul>
      <ul ref={linkhide} className="side_links link_hide">
        <li onClick={handlehide}>
          <FontAwesomeIcon icon={faAngleUp} />
          <span style={noneStatus ? { display: "none" } : null}>Less</span>
        </li>
        {data1.map((val, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon icon={val.icons} />
              <span style={noneStatus ? { display: "none" } : null}>
                {val.itemname}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidelinks;
