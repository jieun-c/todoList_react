import React, { Component } from "react";

class InputUser extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.inputRef.current.value;
    this.props.pushUser(user);
    this.formRef.current.reset();
  };

  render() {
    return (
      <section className="userBox">
        <h2>What's your name?</h2>
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} />
        </form>
      </section>
    );
  }
}

export default InputUser;
