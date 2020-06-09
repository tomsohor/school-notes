import React, { Component } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeDob = (e) => {
    this.setState({
      dob: e.target.value,
    });
  };

  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, dob, gender } = this.state;
    axios
      .post("/simple-so/addNewUser", {
        username,
        email,
        password,
        dob,
        gender,
      })
      .then((res) => alert("successful..."))
      .catch((err) => console.log("err: " + err));

    this.setState({
      username: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
    });
  };

  render() {
    const { username, email, password, dob, gender } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <TextField
            required
            style={style.width}
            label="Username"
            color="secondary"
            value={username}
            onChange={this.onChangeUsername}
          />{" "}
          <br />
          <TextField
            required
            style={style.width}
            label="Email"
            value={email}
            onChange={this.onChangeEmail}
          />
          <br />
          <TextField
            required
            style={style.width}
            label="Password"
            value={password}
            onChange={this.onChangePassword}
          />
          <br />
          <TextField
            required
            label="Birthday"
            type="date"
            style={style.width}
            InputLabelProps={{
              shrink: true,
            }}
            value={dob}
            onChange={this.onChangeDob}
          />
          <br />
          <FormControl>
            <InputLabel id="genderId">Gender</InputLabel>
            <Select
              labelId="genderId"
              id="gender"
              style={style.width}
              value={gender}
              onChange={this.onChangeGender}
            >
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            variant="contained"
            color="secondary"
            style={style.btn}
            href="/"
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={style.btn}
            type="submit"
            href="/hello"
          >
            Sign Up
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

const style = {
  width: {
    width: "35ch",
  },
  btn: {
    margin: 20,
  },
};

export default SignUp;
