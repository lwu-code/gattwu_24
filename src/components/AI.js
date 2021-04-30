import React, { useEffect, useState, useRef } from "react";
// import logo from "./logo.svg";
import {
  TextField,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
} from "@material-ui/core";
import "../App.css";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
// import {loadGraphModel} from '@tensorflow/tfjs-converter';

// import * as posenet from '@tensorflow-models/posenet';
import Webcam from "react-webcam";
// import { createWorker, createScheduler } from "tesseract.js";
// import * as cvstfjs from '@microsoft/customvision-tfjs';

var video_width = 960;
var video_height = 580;
var top_distance = "100px";

function AI() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  const webcamRef = React.useRef(null);

  const [videoWidth, setVideoWidth] = useState(video_width);
  const [videoHeight, setVideoHeight] = useState(video_height);

  const [model, setModel] = useState();

  async function loadModel() {
    try {
      const model = await cocoSsd.load();
      setModel(model);
      console.log("setloadedModel");
    } catch (err) {
      console.log(err);
      console.log("failed load model");
    }
  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

  async function predictionFunction() {
    const predictions = await model.detect(document.getElementById("img"));
    setVideoHeight(webcamRef.current.video.videoHeight);
    setVideoWidth(webcamRef.current.video.videoWidth);
    var cnvs = document.getElementById("myCanvas");

    // cnvs.style.position = "absolute";

    var ctx = cnvs.getContext("2d");
    ctx.clearRect(
      0,
      0,
      webcamRef.current.video.videoWidth,
      webcamRef.current.video.videoHeight
    );

    if (predictions.length > 0) {
      // setPredictionData(predictions);
      console.log(predictions);
      for (let n = 0; n < predictions.length; n++) {
        // Check scores
        console.log(n);
        if (predictions[n].score > 0.8) {
          let bboxLeft = predictions[n].bbox[0];
          let bboxTop = predictions[n].bbox[1];
          let bboxWidth = predictions[n].bbox[2];
          let bboxHeight = predictions[n].bbox[3] - bboxTop;

          console.log("bboxLeft: " + bboxLeft);
          console.log("bboxTop: " + bboxTop);

          console.log("bboxWidth: " + bboxWidth);

          console.log("bboxHeight: " + bboxHeight);

          ctx.beginPath();
          ctx.font = "28px Arial";
          ctx.fillStyle = "red";

          ctx.fillText(
            predictions[n].class +
              ": " +
              Math.round(parseFloat(predictions[n].score) * 100) +
              "%",
            bboxLeft,
            bboxTop
          );

          ctx.rect(bboxLeft, bboxTop, bboxWidth, bboxHeight);
          ctx.strokeStyle = "#FF0000";

          ctx.lineWidth = 3;
          ctx.stroke();

          console.log("detected");
        }
      }
    }

    setTimeout(() => predictionFunction(), 500);
  }

  const videoConstraints = {
    height: video_height,
    width: video_width,
    maxWidth: "100vw",
    facingMode: "environment",
  };

  return (
    <div className="App">
      <div style={{ position: "absolute", top: top_distance, zIndex: "9999" }}>
        <canvas
          id="myCanvas"
          width={videoWidth}
          height={videoHeight}
          style={{ backgroundColor: "transparent" }}
        />
      </div>
      {/* <div style={{ position: "absolute", top: "400px" }}> */}
      <header className="App-header">
        <Button
          onClick={() => {
            predictionFunction();
          }}
        >
          Start to Detect
        </Button>
        <Webcam
          audio={false}
          id="img"
          ref={webcamRef}
          // width={640}
          screenshotQuality={1}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        {/* </div> */}
      </header>
    </div>
  );
}

export default AI;
