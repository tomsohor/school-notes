import React, { Component } from "react";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/simple-so/addNewUser")
      .then((res) => {
        const data = res.data;
        this.setState({
          data: data,
        });
        console.log("data recieve....");
      })
      .catch((err) => console.log("err: " + err));
  };

  render() {
    return (
      <div>
        <h1>hello world</h1>
        {this.state.data.map((name) => (
          <div>
            <p>username: {name.username}</p>
            <p>email: {name.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
