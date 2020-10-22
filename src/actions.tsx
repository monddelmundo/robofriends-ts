import { action } from "typesafe-actions";
import { Constants } from "./constants";
import { Dispatch } from "redux";
import { RobotsAction } from "./types";

export const setSearchField = (text: string) => ({
  type: Constants.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = (): any => async (
  dispatch: Dispatch<RobotsAction>
) => {
  dispatch({ type: Constants.REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: Constants.REQUEST_ROBOTS_SUCCESS,
        payload: data,
      });
    })
    .catch((error) =>
      dispatch({ type: Constants.REQUEST_ROBOTS_FAILED, payload: error })
    );
};
