import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./MainPage.css";
import Header from "../components/Header";
import { IRobot } from "../types";
import { AppProps } from "../containers/App";

// export type IAppProps = {
//   searchField: string;
//   onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
//   robots: Array<IRobot>;
//   onRequestRobots: () => void;
//   isPending: boolean;
// };

function MainPage(props: AppProps) {
  const [filteredRobots, setFilteredRobots] = useState<Array<IRobot>>([]);
  const {
    searchField,
    onSearchChange,
    robots,
    onRequestRobots,
    isPending,
  } = props;

  console.log(props);

  //componentDidMount
  useEffect(() => {
    componentDidMount();
  }, [robots.length]); //notice the empty array here

  async function componentDidMount() {
    if (robots.length === 0) onRequestRobots();
    if (robots.length > 0) setFilteredRobots(robots);
  }

  function filterRobots(robots: IRobot[]) {
    return robots.filter((robot: IRobot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  useEffect(() => {
    if (robots.length) {
      setFilteredRobots(filterRobots(robots));
    }
  }, [searchField.length]);

  //tc = text center
  return isPending ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default MainPage;
