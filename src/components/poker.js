import * as React from "react";
import Card1C from "../images/cards/1C.png";
import Card1D from "../images/cards/1D.png";
import Card1H from "../images/cards/1H.png";
import Card1S from "../images/cards/1S.png";
import Card2C from "../images/cards/2C.png";
import Card2D from "../images/cards/2D.png";
import Card2H from "../images/cards/2H.png";
import Card2S from "../images/cards/2S.png";
import Card3C from "../images/cards/3C.png";
import Card3D from "../images/cards/3D.png";
import Card3H from "../images/cards/3H.png";
import Card3S from "../images/cards/3S.png";
import Card4C from "../images/cards/4C.png";
import Card4D from "../images/cards/4D.png";
import Card4H from "../images/cards/4H.png";
import Card4S from "../images/cards/4S.png";
import Card5C from "../images/cards/5C.png";
import Card5D from "../images/cards/5D.png";
import Card5H from "../images/cards/5H.png";
import Card5S from "../images/cards/5S.png";
import Card6C from "../images/cards/6C.png";
import Card6D from "../images/cards/6D.png";
import Card6H from "../images/cards/6H.png";
import Card6S from "../images/cards/6S.png";
import Card7C from "../images/cards/7C.png";
import Card7D from "../images/cards/7D.png";
import Card7H from "../images/cards/7H.png";
import Card7S from "../images/cards/7S.png";
import Card8C from "../images/cards/8C.png";
import Card8D from "../images/cards/8D.png";
import Card8H from "../images/cards/8H.png";
import Card8S from "../images/cards/8S.png";
import Card9C from "../images/cards/9C.png";
import Card9D from "../images/cards/9D.png";
import Card9H from "../images/cards/9H.png";
import Card9S from "../images/cards/9S.png";
import Card10C from "../images/cards/10C.png";
import Card10D from "../images/cards/10D.png";
import Card10H from "../images/cards/10H.png";
import Card10S from "../images/cards/10S.png";
import ReactDOM from "react-dom";
// import Button from '@material-ui/core/Button';
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import requirePropFactory from "@material-ui/utils/requirePropFactory";

class Poker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("this.prop.card = ", this.props.card);

    var newData = [];

    switch (this.props.card) {
      case "1C":
        newData.push(Card1C);
        break;
      case "1D":
        newData.push(Card1D);
        break;
      case "1H":
        newData.push(Card1H);
        break;
      case "1S":
        newData.push(Card1S);
        break;
      case "2C":
        newData.push(Card2C);
        break;
      case "2D":
        newData.push(Card2D);
        break;
      case "2H":
        newData.push(Card2H);
        break;
      case "2S":
        newData.push(Card2S);
        break;
      case "3C":
        newData.push(Card3C);
        break;
      case "3D":
        newData.push(Card3D);
        break;
      case "3H":
        newData.push(Card3H);
        break;
      case "3S":
        newData.push(Card3S);
        break;
      case "4C":
        newData.push(Card4C);
        break;
      case "4D":
        newData.push(Card4D);
        break;
      case "4H":
        newData.push(Card4H);
        break;
      case "4S":
        newData.push(Card4S);
        break;
      case "5C":
        newData.push(Card5C);
        break;
      case "5D":
        newData.push(Card5D);
        break;
      case "5H":
        newData.push(Card5H);
        break;
      case "5S":
        newData.push(Card5S);
        break;
      case "6C":
        newData.push(Card6C);
        break;
      case "6D":
        newData.push(Card6D);
        break;
      case "6H":
        newData.push(Card6H);
        break;
      case "6S":
        newData.push(Card6S);
        break;
      case "7C":
        newData.push(Card7C);
        break;
      case "7D":
        newData.push(Card7D);
        break;
      case "7H":
        newData.push(Card7H);
        break;
      case "7S":
        newData.push(Card7S);
        break;
      case "8C":
        newData.push(Card8C);
        break;
      case "8D":
        newData.push(Card8D);
        break;
      case "8H":
        newData.push(Card8H);
        break;
      case "8S":
        newData.push(Card8S);
        break;
      case "9C":
        newData.push(Card9C);
        break;
      case "9D":
        newData.push(Card9D);
        break;
      case "9H":
        newData.push(Card9H);
        break;
      case "9S":
        newData.push(Card9S);
        break;
      case "10C":
        newData.push(Card10C);
        break;
      case "10D":
        newData.push(Card10D);
        break;
      case "10H":
        newData.push(Card10H);
        break;
      case "10S":
        newData.push(Card10S);
        break;
      default:
      // code block
    }

    // console.log("newData = ", newData)
    const itemData = [
      {
        img: newData[0],
      },
    ];
    return (
      <ImageList
        width="68%"
        sx={{ width: 100, height: 350 }}
        cols={1}
        rowHeight={120}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                  ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
}
export default Poker;
