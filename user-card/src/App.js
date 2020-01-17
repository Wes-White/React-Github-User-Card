import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: " "
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Wes-White")
      .then(res => res.json())
      .then(user => {
        console.log(user);
      })
      .catch(err =>
        console.log("Oops we are having trouble locating the user", err)
      );
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
