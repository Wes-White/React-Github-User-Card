import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      followers: [],
      newUser: ""
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`https://api.github.com/users/Wes-White`),
      fetch(`https://api.github.com/users/Wes-White/followers`)
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({ ...this.state, user: res1 });

        this.setState({ ...this.state, followers: res2 });
      });
  }

  handleTextChange = e => {
    this.setState({
      ...this.state,
      newUser: e.target.value
    });
  };

  handleUserChange = e => {
    e.preventDefault();
    Promise.all([
      fetch(`https://api.github.com/users/${this.state.newUser}`),
      fetch(`https://api.github.com/users/${this.state.newUser}/followers`)
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({ ...this.state, user: res1 });

        this.setState({ ...this.state, followers: res2 });
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          value={this.state.userChange}
          changer={this.handleTextChange}
          button={this.handleUserChange}
        />
        <p className="title">Active User</p>

        <div className="body-container">
          <UserCard data={this.state.user} />
          <p className="subtitle">Followers</p>
          <FollowerCard data={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
