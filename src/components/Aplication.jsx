import { Component } from "react";

export default class Aplication extends Component {
  render() {
      return (
        <>
              <h2>Please leave feedback</h2>
              <button>Good</button>
              <button>Neutral</button>
              <button>Bad</button>
              <h2>Statistics</h2>
              <p>Good:</p>
              <p>Neutral:</p>
              <p>Bad:</p>
        </>
      );
  }
}
