import * as constants from "./constants";
import * as reducers from "./reducers";

describe("searchrobots", () => {
  const initialStateSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it("should handle CHANGE_SEARCH_FIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: "CHANGE_SEARCH_FIELD",
        payload: "abc",
      })
    ).toEqual({
      searchField: "abc",
    });
  });
});

describe("requestrobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: "REQUEST_ROBOTS_PENDING",
        payload: { isPending: true },
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: "REQUEST_ROBOTS_SUCCESS",
        payload: [
          {
            id: "123",
            name: "test",
            email: "test@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [{ id: "123", name: "test", email: "test@gmail.com" }],
      isPending: false,
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: "REQUEST_ROBOTS_FAILED",
        payload: "Oh no!!",
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "Oh no!!",
    });
  });
});
