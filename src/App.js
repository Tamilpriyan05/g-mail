import "./App.css";
import Googleapps from "./googleapps/Googleapps";
import Header from "./header/Header";
import { useEffect, useRef, useState } from "react";
import Router from "./routing/Router";
import Moreaccount from "./Moreaccount";
import Support from "./Support";
import Composeinput from "./compose/Composeinput";
import Loading from "./loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { bodystatus } from "./slice/statusSlice";
import ResponsiveSidebar from "./responsive/ResponsiveSidebar";
import Rescompose from "./responsive/Rescompose";

function App() {
  const [isLoading, setIsloading] = useState(true);

  const googlestatus = useSelector((state) => state.status.googlestatus);
  const supportstatus = useSelector((state) => state.status.supportstatus);
  const moreaccountstatus = useSelector(
    (state) => state.status.moreaccountstatus
  );
  const composeStatus = useSelector((state) => state.status.composestatus);
  const responsivesidestatus = useSelector(
    (state) => state.status.responsivesidestatus
  );
  const dispatch = useDispatch();
  const closeref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    let outsideclick = (e) => {
      if (!closeref.current.contains(e.target)) {
        dispatch(bodystatus(false));
      }
    };
    document.addEventListener("mousedown", outsideclick);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div ref={closeref}>
            <div
              className={responsivesidestatus ? "res_sidewidth" : "res_side0"}
            >
              <ResponsiveSidebar />
            </div>

            <Rescompose />

            {googlestatus && <Googleapps />}
            {moreaccountstatus && <Moreaccount />}
            {supportstatus && <Support />}
          </div>
          {composeStatus && <Composeinput />}
          <Router />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
