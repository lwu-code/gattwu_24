import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";

import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("this.props.score = ", this.props.score);
    this.state = {
      score: this.props.score,
    };

    console.log("this.state.score = ", this.state.score);
  }

  playerScored = () => {
    // this.refresh();

    this.state.score += 1;

    console.log("this.state.score = ", this.state.score);

    this.setState({});
  };

  render() {
    console.log("this.prop.player = ", this.props.player);
    console.log("this.prop.score = ", this.props.score);
    // var color = ""
    var whichColor = "secondary";
    if (this.props.player == "Garrett") {
      var whichColor = "primary";
    }
    console.log("this.state.score = ", this.state.score);

    return (
      <div>
        {/* <p>{this.props.player} onclick="playerScored()" </p> */}
        <Button color="info" onClick={this.playerScored}>
          {" "}
          {this.props.player} Scores{" "}
        </Button>
        <Rating
          name="disabled"
          value={this.state.score}
          max={10}

          // readOnly
        />
        {/* <LinearProgress
          variant="buffer"
          color={whichColor}
          value={this.state.score * 10}
          valueBuffer={this.state.score * 10 + 10}
        /> */}
      </div>
    );
  }
}
export default ProgressBar;
