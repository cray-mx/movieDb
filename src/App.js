import { Fragment, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import MovieList from "./components/movieList";
import Detailed from "./components/detailed";
import "./css/main.css";
import { SearchContext } from "./components/context";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  return (
    <Fragment>
      <SearchContext.Provider value={[search, setSearch, data, setData]}>
        <NavBar />
        <MovieList />
      </SearchContext.Provider>
    </Fragment>
  );
}

export default App;
