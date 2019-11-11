import React, { Component } from "react";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      width: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      height: "",
      width: "",
      color: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Box Form:</h2>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          name="height"
          id="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          name="width"
          id="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          name="color"
          id="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button>Add Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
