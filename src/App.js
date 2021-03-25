
import React from "react"
import './App.css';
import Poker from "./components/poker"


class App extends React.Component {



  constructor(props) {
    super();
    // Don't call this.setState() here!
    this.state = {


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

            <Poker />
            Hello Garrett and Friends 2

        </header>
        <img src={'/images/cards/2C.png'}  />
      </div>
    );
  }

}

export default App;
