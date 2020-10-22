import React from "react";
import CardList from "./CardList";
import renderer from "react-test-renderer";

it("expect to render cardlist component - using jest snapshot", () => {
  //jest snapshot react-test-renderer
  const mockRobots = [
    {
      id: 1,
      name: "jon snow",
      username: "JohnJohn",
      email: "John@gmail.com",
    },
  ];
  expect(renderer.create(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
