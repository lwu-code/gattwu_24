import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";
import Poker from "./components/poker";
import ProgressBar from "./components/progressbar";
import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
import EditableLabel from "react-inline-editing";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {};
  }
  refresh = () => {
    this.setState({});
  };

  render() {
    var types = ["C", "D", "H", "S"];
    var n1 = Math.floor(Math.random() * 10 + 1);
    var t1 = types[Math.floor(Math.random() * types.length)];
    var c1 = n1.toString() + t1;
    console.log("app.js c1 = ", c1);

    var n2 = Math.floor(Math.random() * 10 + 1);
    var t2 = types[Math.floor(Math.random() * types.length)];
    var c2 = n2.toString() + t2;
    console.log("app.js c2 = ", c2);

    var n3 = Math.floor(Math.random() * 10 + 1);
    var t3 = types[Math.floor(Math.random() * types.length)];
    var c3 = n3.toString() + t3;
    console.log("app.js c3 = ", c3);

    var n4 = Math.floor(Math.random() * 10 + 1);
    var t4 = types[Math.floor(Math.random() * types.length)];
    var c4 = n4.toString() + t4;
    console.log("app.js c4 = ", c4);

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <p>Hello Garrett and Friends 2</p>
            <ImageList variant="quilted" cols={4}>
              <Poker card={c1} />
              <Poker card={c2} />
              <Poker card={c3} />
              <Poker card={c4} />
            </ImageList>
            <ProgressBar player={"Garrett"} />
            <ProgressBar player={"friend"} />
            <button onClick={this.refresh}> Reload </button>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
