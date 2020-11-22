import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.date}</h3>
      </div>
    );
  }
}

export default App;