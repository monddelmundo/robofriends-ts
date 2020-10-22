import { Component } from "react";
import React from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>That is not good!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
