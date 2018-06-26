import React, { Component } from 'react';
import { Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import SignIn from "./components/pages/signIn"
import Home from "./components/pages/home"
import Profile from "./components/pages/profile"
import NotFound from "./components/pages/notFound";
import Callback from "./components/pages/callback"

class App extends Component {
  render(props) {

    let MainRouter = "";
    switch (this.props.location) {
      case "":
        MainRouter = <Home {...this.props}/>
        break;
      case "profile":
        MainRouter = this.props.auth.isAuthenticated() ? <Profile {...this.props}/>: <NotFound/>
        break;
        case "callback":
        MainRouter = <Callback />
        break;
      default:
        MainRouter = <NotFound />
    }

    return (
      <div>
        {/* <Link to="/user/home"> home </Link>
        <Link to="/courses"> profile </Link>
        <Switch>
          <Route path="/user/home" component={Home} />
          <Route render={() => (<div> Sorry, this page does not exist. </div>)} />
        </Switch> */}
        {MainRouter}
      </div>
    );
  }
}

export default App;
