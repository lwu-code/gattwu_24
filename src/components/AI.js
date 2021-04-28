import React from "react";
import "../App.css";
import Cards from "./cards";
import ProgressBar from "./progressbar";
// import * as tf from "@tensorflow/tfjs-node";
import Webcam from "react-webcam";

// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 1, inputShape: [200] }));
// model.compile({
//   loss: "meanSquaredError",
//   optimizer: "sgd",
//   metrics: ["MAE"],
// });

class AI extends React.Component {
  render() {
    console.log("App.js render called");
    return (
      <div className="App">
        <Webcam />
        <div>Hello AI</div>
      </div>
    );
  }
}

export default AI;
