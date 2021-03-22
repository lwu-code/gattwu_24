import React from "react"
import Card2C from "../images/cards/2C.png"



class Poker extends React.Component {

  constructor(props) {
    super(props);

    const cards = this.props.dataFromParent.split(":");
    if (cards[0] == "1")
    {
      cards[0] = "A";
    }


    
    var tmp = Math.floor((Math.random() * 4) + 1);
    var t1, t2, t3, t4;
    switch(tmp) {
      case 1:
        t1 = "C";
        break;
      case 2:
        t1 = "D";
        break;
      case 3:
        t1 = "H";
        break;
      case 4:
        t1 = "S";
        break;
      default:
        // code block
    }

    this.state = {
      card1: cards[0] + t1,
      card2: cards[1],
      card3: cards[2],
      card4: cards[3]

    };
  };
  render() {
    return (
      <div>
        {/* <h1>Hello {this.props.dataFromParent} </h1> */}
        <h1>Hello {this.state.card1} </h1>
        <p>I am in a React Component!</p>
        <img src={Card2C}  />
      </div>
    )
  }
}
export default Poker