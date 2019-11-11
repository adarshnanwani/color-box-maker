import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.renderBoxes = this.renderBoxes.bind(this);
    this.addBox = this.addBox.bind(this);
  }

  renderBoxes() {
    return this.state.boxes.map(box => <Box {...box} />);
  }

  addBox(box) {
    this.setState(state => {
      return {
        boxes: [...state.boxes, box]
      };
    });
  }

  render() {
    return (
      <div>
        <NewBoxForm  addBox={this.addBox}/>
        <div style={{ display: 'flex', flexDirection: "row" }}>
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
}

export default BoxList;
