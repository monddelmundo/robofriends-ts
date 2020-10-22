import React from "react";
import SearchBox from "./SearchBox";
import renderer from "react-test-renderer";

it("expect to render SearchBox component - using jest snapshot", () => {
  //jest snapshot react-test-renderer
  expect(
    renderer.create(<SearchBox searchChange={jest.fn()} />)
  ).toMatchSnapshot();
});
