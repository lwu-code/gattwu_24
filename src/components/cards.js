import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

import Poker from "./poker";
// import ProgressBar from "./components/progressbar";
// import Grid from "@material-ui/core/Grid";
import ImageList from "@material-ui/core/ImageList";
// import EditableLabel from "react-inline-editing";
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

var decompose = function (A, B, s) {
  if (!A.length) {
    B.push(s);
    return;
  }
  if (!s.length) {
    s += A[0];
    return decompose(A.slice(1), B, s);
  }
  for (var i = 0; i < A.length; i++) {
    decompose(
      A.slice(0, i).concat(A.slice(i + 1, A.length)),
      B,
      "(" + s + " + " + A[i] + ")"
    );
    decompose(
      A.slice(0, i).concat(A.slice(i + 1, A.length)),
      B,
      "(" + s + " * " + A[i] + ")"
    );
    decompose(
      A.slice(0, i).concat(A.slice(i + 1, A.length)),
      B,
      "(" + s + " - " + A[i] + ")"
    );
    decompose(
      A.slice(0, i).concat(A.slice(i + 1, A.length)),
      B,
      "(" + A[i] + " - " + s + ")"
    );
    decompose(
      A.slice(0, i).concat(A.slice(i + 1, A.length)),
      B,
      "(" + s + " / " + A[i] + ")"
    );
    decompose(
      A.slice(0, i).concat(A.slice(i + 1, A.length)),
      B,
      "(" + A[i] + " / " + s + ")"
    );
  }
};

var solveFourIntegers = function (A, target) {
  var B = [];
  decompose(A.slice(), B, "");
  return B.filter(function (exp) {
    return eval(exp) === target;
  });
};

class Cards extends React.Component {
  constructor(props) {
    super();
    this.score_1 = 0;
    this.score_2 = 0;

    this.state = {};
  }
  refresh = () => {
    this.setState({});
  };

  showAnswer = () => {
    console.log("showAnswer called ");
    var checkRes = solveFourIntegers([6, 6, 6, 6], 24);
    console.log("checkRes = ", checkRes);
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

    var checkRes = solveFourIntegers([n1, n2, n3, n4], 24);
    checkRes = JSON.stringify(checkRes);
    checkRes = checkRes.replaceAll("[", "");
    checkRes = checkRes.replaceAll("]", "");
    checkRes = checkRes.replaceAll('"', "\n");
    console.log("checkRes = ", checkRes);

    if (checkRes.length == 0) {
      this.refresh();
    }

    return (
      <div className="App">
        <div>
          <header className="App-header">
            <ImageList variant="quilted" cols={4}>
              <Poker card={c1} />
              <Poker card={c2} />
              <Poker card={c3} />
              <Poker card={c4} />
            </ImageList>
            {/* <button onClick={this.GarrettScore}> Garrett Scores </button> */}

            {/* <button onClick={this.FriendScore}> Friend Scores </button> */}

            <button onClick={this.refresh}> Next </button>
            <button onClick={this.showAnswer}>Check Answer</button>
            <p>{checkRes}</p>
            {/* <Text onPress={this.updateText}>abc</Text> */}
          </header>
        </div>
      </div>
    );
  }
}

export default Cards;
