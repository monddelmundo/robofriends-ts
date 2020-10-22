import React, { FC } from "react";
import "../containers/App.css";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";
import { IRobot, IRobotState } from "../types";

export interface IAppProps {
  searchField: string;
  onSearchChange: () => void;
  robots: Array<IRobot>;
  onRequestRobots: () => void;
  isPending: boolean;
}

// interface IState {
//   searchField: string;
//   robots: Array<IRobot>;
//   isPending: boolean;
//   error: string;
// }

const App = (props: IAppProps) => {
  return <MainPage {...props} />;
};

function mapStateToProps(state: IRobotState) {
  return {
    searchField: state.searchField,
    robots: state.robots,
    isPending: state.isPending,
    error: state.error,
  };
}

// function mapDispatchToProps(dispatch: Dispatch<RobotAction>) {
//   return {
//     onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
//       dispatch(setSearchField(event.currentTarget.value)),
//     onRequestRobots: () => dispatch(requestRobots()),
//   };
// }

export default connect(mapStateToProps)(App);
