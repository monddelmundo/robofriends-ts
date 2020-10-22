import { Constants } from "./constants";
import { IRobotState, RobotsAction } from "./types";

const initialState: IRobotState = {
  isPending: false,
  robots: [],
  searchField: "",
  error: "",
};

export const searchRobots = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case Constants.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (
  state = initialState,
  action: RobotsAction = {}
) => {
  switch (action.type) {
    case Constants.REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case Constants.REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case Constants.REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
