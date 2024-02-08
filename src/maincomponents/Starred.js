import React from "react";
import "../maincomponentscss/allcomp.css";
import Footer from "./Footer";

const Starred = () => {
  return (
    <div className="max-height_inbox ">
      <p className="St_p ">
        No starred messages. Stars let you give messages a special status to
        make them easier to find. To star a message, click on the star outline
        beside any message or conversation.
      </p>

      <Footer />
    </div>
  );
};

export default Starred;
