import React, { Component } from "react";
import uuid from 'uuid/v4';
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
    this.removeBox = this.removeBox.bind(this);
  }

  renderBoxes() {
    return this.state.boxes.map(box => <Box {...box} removeBox={this.removeBox} key={box.id}/>);
  }

  addBox(box) {
    let newBox = {...box, id: uuid()};
    this.setState(state => {
      return {
        boxes: [...state.boxes, newBox]
      };
    });
  }

  removeBox(id){
    this.setState(state=>{
      return {
        boxes: state.boxes.filter(box=> box.id !== id)
      }
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
