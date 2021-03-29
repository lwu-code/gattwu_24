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

  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            {/* <ProgressBar player={"Garrett"} score={0} />
            <ProgressBar player={"friend"} score={0} /> */}

            <Cards />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
