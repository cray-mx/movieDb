import { Fragment, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import MovieList from "./components/movieList";
import Detailed from "./components/detailed";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  return (
    <Router>
      <Switch>
        <Route path="/:id" component={Detailed} />
        <Route
          path="/"
          component={() => (
            <Fragment>
              <NavBar setData={setData} />
              <MovieList data={data} />
            </Fragment>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
