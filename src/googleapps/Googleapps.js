import React from "react";
import { useState } from "react";
import { googleapps, googleapps_data } from "./googledataapps";
import "./googleapps.css";

const Googleapps = () => {
  const [apps, setApps] = useState(googleapps);
  const [secondapps, setSecondapps] = useState(googleapps_data);

  return (
    <div className="googleappsbox">
      <div className="g_app">
        <ul>
          {apps.map((val, index) => {
            return (
              <li key={index}>
                <img src={val.image} alt={val.text} />
                <p>{val.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="g_app">
        <ul>
          {secondapps.map((val, index) => {
            return (
              <li key={index}>
                <img src={val.image} alt={val.text} />
                <p>{val.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <button>More from google</button>
    </div>
  );
};

export default Googleapps;
