import React from "react";
import "./util.css";
import Card from "./cards.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MainLayout = (props) => {
  /*----------  State Variables ----------*/

  const [search, setSearch] = React.useState("");
  const [newdata, setnewData] = React.useState(null);

  /*----------  Filtering Data, Searching Query ----------*/
  const dispatch = (e) => {
    e.preventDefault();
    const filteredData = props.member.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(search.toLowerCase());
    });

    setnewData(filteredData);
    console.log(newdata);
    setSearch("");
  };

  /*---------- Setting Current status (rejected/selected) for redirect ----------*/
  const dispatchRerout = (e, status) => {
    e.preventDefault();
    localStorage.setItem("status", status);
  };

  return (
    <div className="aboutpage">
      <div className="about__us-head">
        <h1>Selection Panel</h1>
      </div>
      <button
        class="searchButton-new"
        onClick={(e) => dispatchRerout(e, "Selected")}
      >
        <Link to="/main/status/selected" class="searchButton-new">
          Previously Selected
        </Link>
      </button>
      <button
        class="searchButton-new"
        onClick={(e) => dispatchRerout(e, "rejected")}
      >
        <Link class="searchButton-new" to="/main/status/rejected">
          Previously Rejected
        </Link>
      </button>
      <div class="wrap">
        <div class="search">
          <input
            type="input"
            className="searchTerm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            class="searchButton"
            onClick={(e) => dispatch(e)}
          >
            Search
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="developer__content">
        <Card val={newdata === null ? props.member : newdata} />
      </div>
    </div>
  );
};

/*----------  Getting members data from redux store ----------*/
const mapStateToProps = (state) => {
  return {
    member: state.member.memberData,
  };
};

export default connect(mapStateToProps, null)(MainLayout);
