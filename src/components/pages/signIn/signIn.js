import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value.toLowerCase() });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(props) {
    const style1 = {
      border: "2px solid black",
      margin: "30px",
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input style={style1} type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
          <input style={style1} placeholder="field2" />
          </label>
          <input style={style1} type="submit" value="Submit" />
          
        </form>
      </div>
    );
  };
};

export default SignIn;