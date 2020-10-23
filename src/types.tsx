import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export interface IRobot {
  id: number;
  name: string;
  email: string;
}

export interface IRobotState {
  searchField: string;
  robots: Array<IRobot>;
  isPending: boolean;
  error: string;
}

export type AppState = {
  requestRobots: IRobotState;
  searchRobots: IRobotState;
};

export interface IExtraDispatchArguments {}

export type RobotsAction = ActionType<typeof actions>;
