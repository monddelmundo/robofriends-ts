import React from "react";
import Scroll from "./Scroll";
import renderer from "react-test-renderer";

it("expect to render Scroll component - using jest snapshot", () => {
  //jest snapshot react-test-renderer
  const mockChildren = <div>Mock</div>;
  expect(renderer.create(<Scroll children={mockChildren} />)).toMatchSnapshot();
});
