import React from "react";
import "../App.css";

class Text2Html extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please input raw text here.'
      };
  
      this.handleChange = this.handleChange.bind(this);

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  

  
    render() {
      return (
        <div className="example">
          <form onSubmit={this.handleSubmit}>
              <textarea value={this.state.value} onChange={this.handleChange} cols={40} rows={10} />
          </form>
          Text to raw html
          <div className="preview">
            <h1>Preview</h1>
            <div>{this.state.value}</div>
          </div>
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <EssayForm />,
//     document.getElementById('app')
//   );

  export default Text2Html;