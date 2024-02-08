import React from "react";
import "./loading.css";
import gifimage from "../images/image_processing20201103-24799-19vf3o0.gif";

const Loading = () => {
  return (
    <div className="loading_box">
      <div>
        <img src={gifimage} />
      </div>
    </div>
  );
};

export default Loading;
