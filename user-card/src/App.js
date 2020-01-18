import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowerCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("https://api.github.com/users/Wes-White"),
      fetch("https://api.github.com/users/Wes-White/followers")
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        console.log("This is my first fetch", res1);
        console.log("This is my second fetch", res2);
      });
  }
  /*fetch("https://api.github.com/users/Wes-White")
      .then(res => res.json())
      .then(user => {
        console.log("Here is my user", user);
        this.setState({ ...this.state, user: user });
      })

      .catch(err =>
        console.log("Oops we are having trouble locating the user", err)
      )
      .finally(fetch("https://api.github.com/users/Wes-White/followers"))
      .then(res => res.json())
      .then(followers => {
        console.log(followers);
      })
      .catch(err => err);
  } */

  render() {
    return (
      <div className="App">
        <UserCard data={this.state.user} />
      </div>
    );
  }
}

export default App;
