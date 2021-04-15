import axios from "axios";
import React, { useState, useEffect } from "react";
import Picture from "../images/popcorn.svg";
import { withRouter } from "react-router-dom";

const MovieCard = ({ data: { Title, Poster, imdbID } }, history) => {
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

  const cardClickHandler = () => history.push(`/${imdbID}`);

  return (
    <div className="card" onClick={cardClickHandler}>
      <img src={Poster.length > 5 ? Poster : Picture} alt="" />
      <div className="inner-card">
        <p className="title">
          {Title.length > 25 ? Title.slice(0, 26) + " ..." : Title}
        </p>
        <p className="rating">{rating.split("/")[0]}</p>
      </div>
    </div>
  );
};

export default withRouter(MovieCard);
