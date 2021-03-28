import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
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
    console.log("whichColor = ", whichColor);

    return (
      <div>
        {/* <p>{this.props.player} onclick="playerScored()" </p> */}
        <button onClick={this.playerScored}>
          {" "}
          {this.props.player} Scores{" "}
        </button>
        <LinearProgress
          variant="buffer"
          color={whichColor}
          value={this.state.score * 10}
          valueBuffer={this.state.score * 10 + 10}
        />
      </div>
    );
  }
}
export default ProgressBar;

// export default function ProgressBar() {
//   const classes = useStyles();
//   const [progress, setProgress] = React.useState(0);
//   const [buffer, setBuffer] = React.useState(10);

//   const progressRef = React.useRef(() => {});
//   React.useEffect(() => {
//     progressRef.current = () => {
//       if (progress > 100) {
//         setProgress(0);
//         setBuffer(10);
//       } else {
//         const diff = Math.random() * 10;
//         const diff2 = Math.random() * 10;
//         setProgress(progress + diff);
//         setBuffer(progress + diff + diff2);
//       }
//     };
//   });

//   return (
//     <div className={classes.root}>
//       <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
//     </div>
//   );
// }
