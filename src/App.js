import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Cards from "./components/cards";

import ProgressBar from "./components/progressbar";

// import { Cards } from "./components/cards";

class App extends React.Component {
  constructor(props) {
    console.log("App.js constructor called");
    super();

    this.state = {};
  }

  refresh = () => {
    this.setState({});
  };

  handleCallback = (childData) => {
    // this.setState({data: childData})
    console.log("App.js handleCallback called, childData = ", childData);
    if (childData >= 10) {
      this.setState({});
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
