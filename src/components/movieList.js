import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./movieCard";
import axios from "axios";
import { SearchContext } from "./context";

const MovieList = () => {
  const API = "http://www.omdbapi.com/";
  const API_KEY = "98d3e36d";

  const [search, setSearch, data, setData] = useContext(SearchContext);

  const getData = async () => {
    const response = await axios.get(API, {
      params: {
        apikey: API_KEY,
        s: search,
      },
    });
    console.log(response);
    setData(response.data.Search);
  };

  useEffect(async () => {
    getData();
    console.log(data);
  }, [search]);

  return (
    <Fragment>
      <div className="movies">
        {/* {data.length > 0 ? (
          data.map((movie) => <MovieCard data={movie} />)
        ) : (
          <h2>Loading...</h2>
        )} */}
      </div>
    </Fragment>
  );
};

export default MovieList;
