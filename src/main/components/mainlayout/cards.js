import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {

  /*----------  Getting active id from local storage ----------*/
  const onDispatch = (e, id) => {
    e.preventDefault();
    localStorage.setItem("currid", id);

  };
  /*----------  Mapping member cards from API data ----------*/
  var members = (
    <div>
      {props.val.map((member, index) => (
        <div className="column">
          <div className="card" style={{ width: "18rem" }}>
            <Link onClick={(e) => onDispatch(e, index)} className="link_remove"> 
              <Link to={"/main/" + member.id} className="link_remove">
                <div className="banner">
                  <img src={member.Image} />
                </div>
                <div className="menu"></div>
                <h2 className="name">{member.name}</h2>
                <div className="title">{member.id}</div>
                <div className="branch"></div>
              </Link>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="row faculty__content">{members}</div>
    </>
  );
}

export default (Cards);
