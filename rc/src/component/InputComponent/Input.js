import React, { useState } from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  render() {
    return (
      <input
        id={this.props.id}
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={(event) => this.handleChange(event)}
      ></input>
    );
  }
}
export default Input;
