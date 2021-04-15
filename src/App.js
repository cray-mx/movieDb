import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import MovieList from "./components/movieList";
import Detailed from "./components/detailed";
import { SearchContext } from "./components/context";
import "./css/main.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  return (
    <Fragment>
      <Router>
        <SearchContext.Provider value={[search, setSearch, data, setData]}>
          <Switch>
            <Route
              path="/"
              component={() => (
                <Fragment>
                  <NavBar />
                  <MovieList />
                </Fragment>
              )}
            />
            <Route path="/:id" component={Detailed} />
          </Switch>
        </SearchContext.Provider>
      </Router>
    </Fragment>
  );
}

export default App;
