import React from "react";
import MainLayout from "./components/mainlayout/mainlayout";
import User from "./components/mainlayout/userpage";
import Status from "./components/mainlayout/status";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class AppRouter extends React.Component {
  componentDidMount() {
    /*----------  Get Members API and save currid variable local storage ----------*/
    this.props.getMember();
    localStorage.setItem("currid", 0);
  }
  render() {
    return (
      <Router>
        <Switch>
          <div className="AppRouter">
            <Route path="/" exact component={MainLayout} />
            <Route path="/main/status/:status" exact component={Status} />
            <Route path="/main/:id" exact component={User} />
          </div>
        </Switch>
      </Router>
    );
  }
}

/*----------  Getting members reducer ----------*/
const mapDispatchToProps = (dispatch) => {
  return {
    getMember: () => {
      dispatch(actions.getMember());
    },
  };
};

export default connect(null, mapDispatchToProps)(AppRouter);
