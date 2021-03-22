import React from "react"
import Card2C from "../images/cards/2C.png"



class Poker extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.dataFromParent} </h1>
        <p>I am in a React Component!</p>
        <img src={Card2C}  />
      </div>
    )
  }
}
export default Poker