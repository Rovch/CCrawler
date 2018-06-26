import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
class Profile extends Component {

  render(props) {
    return (
      <div>
          <button onClick={() => { this.props.auth.logout() }}> Logout</button>
        this is your profile user: 
        {this.props.name}
        <ul>
          {/* <li><Link to={`${this.props.match.url}/technology`}>Technology</Link></li>
          <li><Link to={`${this.props.match.url}/business`}>Business</Link></li>
          <li><Link to={`${this.props.match.url}/economics`}>Economics</Link></li> */}
        </ul>
        {/* <Route path={`${this.props.match.path}/:x`} component={() => (<div> This is economics </div>)}/> */}
        {/* <Route exact path={`${this.props.match.url}/:course`} render={({ match, path }) => (<div> This is {match.params.course} </div>)} /> */}
        
      </div>
    );
  };
};

export default Profile;