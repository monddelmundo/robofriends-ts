import * as actions from "./actions";
import * as constants from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "wooo";
    const expectedAction = {
      type: constants.CHANGE_SEARCH_FIELD,
      payload: text,
    };

    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots", () => {
  //mock the redux store
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: constants.REQUEST_ROBOTS_PENDING,
  };

  expect.assertions(1);
  it("handles requesting robots api pending", () => {
    expect(action[0]).toEqual(expectedAction);
  });
});
