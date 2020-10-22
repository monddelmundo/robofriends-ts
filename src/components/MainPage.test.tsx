import React from "react";
import MainPage from "./MainPage";
import renderer from "react-test-renderer";

function renderMainPage(args) {
  const defaultProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  const mockProps = { ...defaultProps, ...args };
  return renderer.create(<MainPage {...mockProps} />);
}

it("renders mainpage without crashing", () => {
  const wrapper = renderMainPage();
  expect(wrapper).toMatchSnapshot();
});

it("will display Loading... when isPending is True", () => {
  const wrapper = renderMainPage({ isPending: true });
  const testInstance = wrapper.root;
  expect(testInstance.findByProps({ name: "loading" }).children).toEqual([
    "Loading...",
  ]);
});
