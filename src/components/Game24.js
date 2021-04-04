import React from "react";
import "../App.css";
import Cards from "./cards";
import ProgressBar from "./progressbar";

class Game24 extends React.Component {
  constructor(props) {
    console.log("App.js constructor called");
    super();

    this.state = {};
  }

  refresh = () => {
    this.setState({});
  };

  handleCallback = (childData) => {
    console.log("App.js handleCallback called, childData = ", childData);
  };

  render() {
    console.log("App.js render called");
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <ProgressBar
              player={"Garrett"}
              score={0}
              parentCallback={this.handleCallback}
            />
            <ProgressBar
              player={"Friend"}
              score={0}
              parentCallback={this.handleCallback}
            />
            <Cards />
          </header>
        </div>
      </div>
    );
  }
}

export default Game24;
