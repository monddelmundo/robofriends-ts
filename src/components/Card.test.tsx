import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";
import renderer from "react-test-renderer";

it("expect to render card component - using enzyme shallow", () => {
  //enzyme shallow
  expect(shallow(<Card />).length).toEqual(1);
});

it("expect to render card component - using jest snapshot", () => {
  //jest snapshot react-test-renderer
  expect(renderer.create(<Card />)).toMatchSnapshot();
});
