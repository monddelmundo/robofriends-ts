import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

it("expect to render Header component - using jest snapshot", () => {
  //jest snapshot react-test-renderer
  expect(renderer.create(<Header />)).toMatchSnapshot();
});
