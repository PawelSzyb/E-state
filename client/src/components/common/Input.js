import React, { Component } from "react";

class Form extends Component {
  onSubmitHandle = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <p className="h4 text-center mb-4">{this.props.title}</p>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          name={this.props.name}
          onChange={this.props.onChange}
          id={this.props.name}
          value={this.props.value}
          type={this.props.type}
          className="form-control"
        />
        <br />
      </form>
    );
  }
}

export default Form;
