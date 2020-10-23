import React, { FC } from "react";
import "../containers/App.css";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../types";
import { AnyAction } from "redux";
import { IRootState } from "../index";

// interface IState {
//   searchField: string;
//   robots: Array<IRobot>;
//   isPending: boolean;
//   error: string;
// }

type IPropsFromDispatch = {
  onSearchChange: (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => Promise<void>;
  onRequestRobots: () => Promise<void>;
};

//interface IAppProps extends ReduxType, IPropsFromDispatch {}

export type AppProps = StateProps & IPropsFromDispatch;

const App: React.FC<AppProps> = (props) => {
  return <MainPage {...props} />;
};

function mapStateToProps(state: AppState) {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
}

function mapDispatchToProps(
  dispatch: ThunkDispatch<IRootState, any, AnyAction>
): IPropsFromDispatch {
  return {
    onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch<any>(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch<any>(requestRobots()),
  };
}
type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(App);
