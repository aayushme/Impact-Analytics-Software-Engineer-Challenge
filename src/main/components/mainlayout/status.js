import React from "react";
import "./util.css";
import Card from "./cards.js";

const MainLayout = () => {
  /*---------- State Variables ----------*/
  const [data, setData] = React.useState(null);
  const [status, setStatus] = React.useState("selected");

  /*---------- Passing Selected/Rejected data to cards component ----------*/
  React.useEffect(() => {
    var lstatus = localStorage.getItem("status");
    setStatus(lstatus);
    var arr;
    if (lstatus === "Selected") {
      arr = JSON.parse(localStorage.getItem("selected"));
    } else {
      arr = JSON.parse(localStorage.getItem("rejected"));
    }
    setData(arr);
  });

  /*---------- Return ----------*/
  return (
    <div className="aboutpage">
      <div className="about__us-head">
        <h1>{status}</h1>
      </div>

      <div className="developer__content">
        {data == null ? (
          <>
            <div className="about__us-head">
              <h1>Please select/reject someone for data dispplay</h1>
            </div>
          </>
        ) : (
          <Card val={data} />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
