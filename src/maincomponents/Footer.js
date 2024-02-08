import React from "react";
import "../maincomponentscss/footer.css";

const Footer = () => {
  return (
    <div className="footerbox">
      <div className="phone_none">
        <input type="range" />
        <p style={{ fontSize: "12px" }}>11.28 GB of 15 GB (75%) used</p>
      </div>
      <div>
        <span>Terms ·</span>
        <span>Privacy ·</span>
        <span>Programme Policies</span>
      </div>
      <div className="phone_none">
        <p>Last account activity: 2 hours ago</p>
        <span>Details</span>
      </div>
    </div>
  );
};

export default Footer;
