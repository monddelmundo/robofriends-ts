import { Component } from "react";
import React from "react";

interface IAppProps {}

interface IState {
  hasError: boolean;
}

class ErrorBoundry extends Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
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
