import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Cards from "./components/cards";

import ProgressBar from "./components/progressbar";

// import { Cards } from "./components/cards";

class App extends React.Component {
  refresh = () => {
    this.setState({});
  };

  GarrettScore = () => {
    this.score_1 += 1;
    // this.refresh();
  };

  FriendScore = () => {
    this.score_2 += 1;
    // this.refresh();
  };

  handleCallback = (childData) => {
    // this.setState({data: childData})
    console.log("App.js handleCallback called, childData = ", childData);
    if (childData >= 10) {
      this.score_1 = 0;
      this.score_2 = 0;
    }
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

export default App;
