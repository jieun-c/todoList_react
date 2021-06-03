import React, { Component } from "react";

class InputName extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    this.props.pushName(name);
    this.formRef.current.reset();
  };

  render() {
    return (
      <div className="nameBox">
        <h2>What's your name?</h2>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} />
        </form>
      </div>
    );
  }
}

export default InputName;
