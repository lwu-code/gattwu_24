
import React from "react"
import './App.css';
import Poker from "./components/poker"


class App extends React.Component {

  // var x1 = Math.floor((Math.random() * 10) + 1);
  // // document.getElementById("num1").value = x1.toString();
  // var x2 = Math.floor((Math.random() * 10) + 1);
  // // document.getElementById("num2").value = x2.toString();
  // var x3 = Math.floor((Math.random() * 10) + 1);
  // // document.getElementById("num3").value = x3.toString();
  // var x4 = Math.floor((Math.random() * 10) + 1);
  // // document.getElementById("num4").value = x4.toString();

  constructor(props) {
    super();
    var x1 = Math.floor((Math.random() * 10) + 1);
  // document.getElementById("num1").value = x1.toString();
  var x2 = Math.floor((Math.random() * 10) + 1);
  // document.getElementById("num2").value = x2.toString();
  var x3 = Math.floor((Math.random() * 10) + 1);
  // document.getElementById("num3").value = x3.toString();
  var x4 = Math.floor((Math.random() * 10) + 1);
  // document.getElementById("num4").value = x4.toString();
    // Don't call this.setState() here!
    this.state = {
      card1: x1.toString(),
      card2: x2.toString(),
      card3: x3.toString(),
      card4: x4.toString()

    };
    // this.handleClick = this.handleClick.bind(this);




  }
  render(){
    return (

      <div className="App">
        <header className="App-header">
  
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Poker dataFromParent = {this.state.card1 + ":" + this.state.card2 + ":" + this.state.card3 + ":" + this.state.card4}/>
            Hello Garrett and Friends 2
          </a>
        </header>
        <img src={'/images/cards/2C.png'}  />
      </div>
    );
  }

}

export default App;
