import React from "react";
import Footer from "./Footer";

const Drafts = () => {
  return (
    <div className=" max-height_inbox">
      <div>
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          You don't have any saved drafts.
        </p>
        <p className="St_p">
          Saving a draft allows you to keep a message you aren't ready to send
          yet.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Drafts;
