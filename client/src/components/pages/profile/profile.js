import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
class Profile extends Component {

  render(props) {
    return (
      <div>
          <button onClick={() => { this.props.auth.logout() }}> Logout</button>
        this is your profile user: 
        {this.props.name}
      </div>
    );
  };
};

export default Profile;