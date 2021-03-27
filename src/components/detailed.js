import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Detailed = ({ match }) => {
  const [details, setDetails] = useState({});
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
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Container fluid className="min-vh-100">
      <Row>
        <Col xs={2}>
          <img
            src={details.Poster}
            alt="Image not found"
            width="450px"
            height="400px"
            className="m-5"
          />
        </Col>
        <Col xs={2}>
          <h2>{details.Title}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Detailed;
