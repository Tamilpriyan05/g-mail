import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route } from "react-router-dom";
import "./router.css";
import Inbox from "../maincomponents/Inbox";
import Starred from "../maincomponents/Starred";
import Snoozed from "../maincomponents/Snoozed";
import Sent from "../maincomponents/Sent";
import Drafts from "../maincomponents/Drafts";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Lables from "./Lables";
import Sidelinks from "./Sidelinks";
import Inboxhead from "../inbox/Inboxhead";
import Inboxmessage from "../inbox/Inboxmessage";
import { useDispatch, useSelector } from "react-redux";
import SmallLoading from "../loading/SmallLoading";
import { composestatus } from "../slice/statusSlice";

const Router = () => {
  const [smallLoading, setSmallLoading] = useState(true);
  const noneStatus = useSelector((state) => state.status.status);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setSmallLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="routerbox">
      {smallLoading && <SmallLoading />}
      <div className="sidebar" style={noneStatus ? { width: "4%" } : null}>
        <p
          className="compose"
          onClick={() => dispatch(composestatus(true))}
          style={noneStatus ? { padding: "15px 15px" } : null}
        >
          <FontAwesomeIcon icon={faPen} className="penicon" />{" "}
          <span style={noneStatus ? { display: "none" } : null}>Compose</span>
        </p>
        <Sidelinks />
        <Lables />
      </div>
      <div
        className="routercomponents"
        style={noneStatus ? { width: "94%" } : null}
      >
        <Inboxhead />
        <div className="scrool_component">
          <Routes>
            <Route path="/">
              <Route index element={<Inbox />} />
              <Route path=":id" element={<Inboxmessage />} />
            </Route>
            <Route path="Starred" element={<Starred />} />
            <Route path="Snoozed" element={<Snoozed />} />
            <Route path="Sent" element={<Sent />} />
            <Route path="Drafts" element={<Drafts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
