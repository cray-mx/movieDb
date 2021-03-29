import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Detailed = ({ match }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const API = "http://www.omdbapi.com/";
  const API_KEY = "98d3e36d";
  const getDetails = async (e) => {
    try {
      const config = {
        params: {
          apikey: API_KEY,
          i: match.params.id,
        },
      };
      const res = await axios.get(API, config);
      setDetails({ ...res.data });
      setLoading(false);
      console.log(res);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return loading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="container-movies">
      <img
        className="flex-item"
        src={details.Poster}
        alt=""
        width="500px"
        height="500px"
      />
      <div className="inner-container flex-item">
        <div className="heading">
          <h1>
            {details.Title}
            <h4 style={{ fontSize: "16px" }}>{details.Year}</h4>
          </h1>
        </div>

        <p style={{ fontFamily: "Montserrat" }}>
          Director/Writer: {details.Writer}
        </p>
        <div className="ratings">
          {details.Ratings.map((rating) => (
            <p className={`rating-item ${rating.Source}`}>
              <h5>{rating.Source}</h5>
              <h2>{rating.Value}</h2>
            </p>
          ))}
        </div>
        <p>{details.Plot}</p>
      </div>
    </div>
  );
};

export default Detailed;
