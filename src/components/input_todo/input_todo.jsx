import React, { PureComponent } from "react";

class InputToDo extends PureComponent {
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
        <input
          type="text"
          ref={this.inputRef}
          placeholder="What is your plan for today?"
        />
      </form>
    );
  }
}

export default InputToDo;
