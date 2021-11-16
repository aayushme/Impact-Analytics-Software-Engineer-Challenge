import React from "react";
import "./util.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const User = (props) => {
  /*---------- State Variables ----------*/
  const [currStatus, setcurrStatus] = React.useState(null);
  const [classColor, setClassColor] = React.useState(null);

  /*---------- Checking for the previous presence of field in selected/rejected object  ----------*/
  React.useEffect(() => {
    var id = parseInt(localStorage.getItem("currid"));
    var val = props.member[id].id;

    var myArray = JSON.parse(localStorage.getItem("selected"));

    if (myArray != null && myArray.find((element) => element.id === val)) {
      setcurrStatus("Selected");
      setClassColor("selected");
    }
    myArray = JSON.parse(localStorage.getItem("rejected"));
    if (myArray != null && myArray.find((element) => element.id === val)) {
      setcurrStatus("Rejected");
      setClassColor("rejected");
    }
  });

  /*---------- Selected button dispatch ----------*/
  const dispatchSelected = (e, id) => {
    e.preventDefault();
    localStorage.setItem("status", "Selected");
    var arr = new Array();

    if (localStorage.getItem("selected")) {
      arr = JSON.parse(localStorage.getItem("selected"));
    }
    if (
      arr != null &&
      arr.find((element) => element.id === props.member[id].id)
    ) {
      return 0;
    } else {
      arr.push(props.member[id]);
      localStorage.setItem("selected", JSON.stringify(arr));
    }
  };

  /*---------- Rejected BUtton dispatch ----------*/
  const dispatchRejected = (e, id) => {
    e.preventDefault();
    localStorage.setItem("status", "rejected");
    var arr = new Array();

    if (localStorage.getItem("rejected")) {
      arr = JSON.parse(localStorage.getItem("rejected"));
    }
    if (
      arr != null &&
      arr.find((element) => element.id === props.member[id].id)
    ) {
      return 0;
    } else {
      arr.push(props.member[id]);
      localStorage.setItem("rejected", JSON.stringify(arr));
    }
  };

  return (
    <div className="aboutpage">
      <div className="about__us-head">
        <h1>{props.member[parseInt(localStorage.getItem("currid"))].name}</h1>
        <p>
          This is our team, a lot of smiling happy people who work hard to
          empower my team.There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition, injected humour, or
          non-characteristic words etc. Contrary to popular belief, Lorem Ipsum
          is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </p>
      </div>
      <br />
      <div className="events__heading">
        {currStatus != null ? (
          <h1 className={classColor}>Already {currStatus}</h1>
        ) : (
          <div class="selected-button">
            <button
              onClick={(e) =>
                dispatchSelected(e, parseInt(localStorage.getItem("currid")))
              }
            >
              <Link
                style={{ textDecoration: "none" }}
                to="/main/status/selected"
              >
                Selected
              </Link>
            </button>
            <br />
            <br />
            <button
              onClick={(e) =>
                dispatchRejected(e, parseInt(localStorage.getItem("currid")))
              }
            >
              <Link
                style={{ textDecoration: "none" }}
                to="/main/status/rejected"
              >
                Rejected
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

/*---------- Getting members data ----------*/
const mapStateToProps = (state) => {
  return {
    member: state.member.memberData,
  };
};

export default connect(mapStateToProps, null)(User);
