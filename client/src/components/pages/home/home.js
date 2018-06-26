import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div>
        <h1> Welcome user: <a href="/profile">{this.props.name} </a></h1>
        {!this.props.auth.isAuthenticated() &&
        <div> 
          please login to continue. <button onClick={this.props.auth.login}> login</button>
        </div>
        }
      </div>
    );
  };
};

export default Home;