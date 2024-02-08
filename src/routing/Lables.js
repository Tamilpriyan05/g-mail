import React, { useState } from "react";
import { useSelector } from "react-redux";

const Lables = () => {
  const noneStatus = useSelector((state) => state.status.status);
  return (
    <div>
      <div className="lable_icon">
        <p style={noneStatus ? { display: "none" } : null}>Lables</p>
        <span>+</span>
      </div>
    </div>
  );
};

export default Lables;
