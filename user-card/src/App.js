import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      followers: []
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
        console.log("This is my first fetch", res1);
        this.setState({ ...this.state, user: res1 });
        console.log("This is my second fetch", res2);
        this.setState({ ...this.state, followers: res2 });
      });
  }

  handleTextChange = e => {
    console.log("my input says", e.target.value);
    this.setState({ ...this.state, user: e.target.value });

    console.log("My new user stat is ", this.state.user);
  };

  handleUserChange = e => {
    e.preventDefault();
    Promise.all([
      fetch(`https://api.github.com/users/${this.state.user}`),
      fetch(`https://api.github.com/users/${this.state.user}/followers`)
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        console.log("This is my first fetch", res1);
        this.setState({ ...this.state, user: res1 });
        console.log("This is my second fetch", res2);
        this.setState({ ...this.state, followers: res2 });
      });
  };

  render() {
    return (
      <div className="App">
        <input
          placeholder="Search User"
          type="text"
          value={this.state.userChange}
          onChange={this.handleTextChange}
        />
        <button onClick={this.handleUserChange}>Search</button>
        <UserCard data={this.state.user} />
        <h1>My Followers List</h1>
        <FollowerCard data={this.state.followers} />
      </div>
    );
  }
}

export default App;
