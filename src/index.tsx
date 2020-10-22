import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { searchRobots, requestRobots } from "./reducers";
import { IRobotState } from "./types";

export interface IRootState {
  robot: IRobotState;
}

const logger = createLogger();
//const rootReducer = combineReducers({ searchRobots, requestRobots });

// const store = createStore<IRootState, any, any, any>(
//   rootReducer,
//   applyMiddleware(thunkMiddleware, logger)
// );

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    searchRobots,
    requestRobots,
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
//serviceWorker.unregister();
