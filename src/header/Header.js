import React from "react";
import "./header.css";
import Bars from "./Bars";
import Searchbox from "./Searchbox";
import Headicon from "./Headicon";

const Header = () => {
  return (
    <div className="headerbox">
      <Bars />

      <Searchbox />

      <Headicon />
    </div>
  );
};

export default Header;
