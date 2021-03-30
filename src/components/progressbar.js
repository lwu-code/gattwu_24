import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import purple from "@material-ui/core/colors/purple";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "ProgressBar constructor this.props.score = ",
      this.props.score
    );
    this.state = {
      score: this.props.score,
    };
    this.state.score = this.props.score;
    this.state.totalScore = this.props.score;
    console.log("1 this.state.score = ", this.state.score);
  }

  playerScored = () => {
    // this.refresh();

    this.state.score += 1;
    this.state.totalScore += 1;

    if (this.state.score > 10) {
      this.state.score -= 10;
    }

    console.log("2 this.state.score = ", this.state.score);
    this.props.parentCallback(this.state.score);

    this.setState({});
  };

  render() {
    console.log("progressbar.js render this.prop.player = ", this.props.player);
    console.log("progressbar.js render this.prop.score = ", this.props.score);
    console.log("progressbar.js render this.state.score = ", this.state.score);
    // var color = ""
    var whichColor = "secondary";
    var whichIcon = FavoriteIcon;
    if (this.props.player == "Garrett") {
      whichColor = "primary";
      return (
        <div>
          <Typography m={2} color="primary">
            Hello Garrett and Friends
          </Typography>
          <Button color={"primary"} onClick={this.playerScored}>
            {" "}
            {this.props.player}{" "}
          </Button>

          <Typography style={{ display: "inline" }} m={2} color="primary">
            {this.state.totalScore}
          </Typography>

          <Rating
            readOnly
            value={this.state.score}
            max={10}
            size="small"
            icon={<ThumbUpAltIcon fontSize="small" />}
          />
        </div>
      );
    } else {
      return (
        <div>
          {/* <p>{this.props.player} onclick="playerScored()" </p> */}
          <Button color={"primary"} onClick={this.playerScored}>
            {" "}
            {this.props.player}{" "}
          </Button>
          <Typography style={{ display: "inline" }} m={2} color="primary">
            {" "}
            {this.state.totalScore}
          </Typography>
          <Rating
            readOnly
            value={this.state.score}
            max={10}
            size="small"
            icon={<FavoriteIcon fontSize="small" />}
          />
        </div>
      );
    }
  }
}
export default ProgressBar;
