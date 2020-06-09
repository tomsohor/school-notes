import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Button variant="contained" color="secondary" href="/">
          Back
        </Button>
      </div>
    );
  }
}

export default Login;
