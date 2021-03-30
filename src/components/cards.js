import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import "../App.css";

import Poker from "./poker";

import ImageList from "@material-ui/core/ImageList";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Fab from "@material-ui/core/Fab";
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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

class Cards extends React.Component {
  constructor(props) {
    console.log("constructor called");
    super();
    this.score_1 = 0;
    this.score_2 = 0;

    this.state = { showAnswer: false };
  }
  refresh = () => {
    this.setState({});
  };

  showAnswer = () => {
    // console.log("showAnswer called ");
    this.state.showAnswer = true;
    console.log("this.state.showAnswer = ", this.state.showAnswer);
    // var checkRes = solveFourIntegers([6, 6, 6, 6], 24);
    // console.log("showAnswer checkRes = ", checkRes);
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
    console.log("cards.js render called");
    var types = ["C", "D", "H", "S"];
    var n1 = Math.floor(Math.random() * 10 + 1);
    var t1 = types[Math.floor(Math.random() * types.length)];
    var c1 = n1.toString() + t1;
    // console.log("app.js c1 = ", c1);

    var n2 = Math.floor(Math.random() * 10 + 1);
    var t2 = types[Math.floor(Math.random() * types.length)];
    var c2 = n2.toString() + t2;
    // console.log("app.js c2 = ", c2);

    var n3 = Math.floor(Math.random() * 10 + 1);
    var t3 = types[Math.floor(Math.random() * types.length)];
    var c3 = n3.toString() + t3;
    // console.log("app.js c3 = ", c3);

    var n4 = Math.floor(Math.random() * 10 + 1);
    var t4 = types[Math.floor(Math.random() * types.length)];
    var c4 = n4.toString() + t4;
    // console.log("app.js c4 = ", c4);

    var checkRes = solveFourIntegers([n1, n2, n3, n4], 24);
    checkRes = JSON.stringify(checkRes);
    checkRes = checkRes.replaceAll("[", "");
    checkRes = checkRes.replaceAll("]", "");
    checkRes = checkRes.replaceAll('"', "\n");
    console.log("type of checkRes = ", typeof checkRes);
    var resData = checkRes.split(",");
    console.log("resData = ", resData);
    console.log("type of resData = ", typeof resData);

    resData.forEach(myFunction);

    function myFunction(value, index, array) {
      // toolTipData = toolTipData + "<div>" + value + "</br>" + "</div>";
      // toolTipData = toolTipData + value;
    }
    console.log("type of resData = ", typeof resData);

    if (checkRes.length == 0) {
      this.refresh();
    }

    const items = resData.map(function (item) {
      return <Typography> {item} </Typography>;
    });

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
            <Button color="success" onClick={this.refresh}>
              {" "}
              Next{" "}
            </Button>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    Did you find the right answer?
                  </Typography>
                  {/* <Typography>{toolTipData}</Typography> */}
                  {items}
                  {/* <Typography>{toolTipData}</Typography> */}
                  {/* <em>{resData}</em> */}
                  <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
                  {"It's very engaging. Right?"}
                </React.Fragment>
              }
            >
              <Button>Hover on me to see answers</Button>
            </HtmlTooltip>
            {/* <Text onPress={this.updateText}>abc</Text> */}
          </header>
        </div>
      </div>
    );
  }
}

export default Cards;
