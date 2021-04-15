import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./movieCard";
import axios from "axios";
import { SearchContext } from "./context";

const MovieList = () => {
  const API = "http://www.omdbapi.com/";
  const API_KEY = "98d3e36d";

  const [search, setSearch, data, setData] = useContext(SearchContext);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    if (search.length > 0) {
      const response = await axios.get(API, {
        params: {
          apikey: API_KEY,
          s: search,
        },
      });
      setData(response.data.Search);
    }
    setLoading(false);
  };

  useEffect(async () => {
    getData();
    console.log("Hello");
    console.log(search);
    console.log(data);
    return () => console.log("Refresh");
  }, [search]);

  return (
    <Fragment>
      <div className="movies">
        {!loading ? (
          data.map((movie) => <MovieCard data={movie} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </Fragment>
  );
};

export default MovieList;
