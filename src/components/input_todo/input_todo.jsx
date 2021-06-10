import React, { Component } from "react";

class InputToDo extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const toDo = this.inputRef.current.value;
    toDo && this.props.pushToDo(toDo);
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} />
      </form>
    );
  }
}

export default InputToDo;
