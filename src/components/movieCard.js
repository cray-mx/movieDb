import axios from "axios";
import React, { useState, useEffect } from "react";

const MovieCard = ({ Title, Poster, imdbID }) => {
  const [rating, setRating] = useState("");
  const API = "http://www.omdbapi.com/";
  const API_KEY = "98d3e36d";

  const getData = async () => {
    const response = await axios.get(API, {
      params: {
        apikey: API_KEY,
        i: imdbID,
      },
    });
    setRating(response.data.Ratings[0].Value);
  };

  useEffect(async () => {
    getData();
  }, []);

  return (
    <div className="card">
      <img
        src="https://images.static-bluray.com/products/20/98631_1_large.jpg"
        alt=""
      />
      <div className="inner-card">
        <p className="title">{Title}</p>
        <p className="rating">{rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
