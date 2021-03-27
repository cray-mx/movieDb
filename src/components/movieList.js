import React from "react";
import { Navbar, Form, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const movieList = ({ data }) => {
  return (
    <Container fluid className="p-5 images min-vh-100">
      <Row className="d-flex justify-content-evenly">
        {data.map((item) => (
          <Col sm={2} key={item.imdbID}>
            <Link to={`/${item.imdbID}`} className="stretched-link">
              <Card className="text-center">
                {item.Poster.length > 0 ? (
                  <Card.Img src={item.Poster} className="mb-3 poster-image" />
                ) : (
                  <Card.Img
                    src="images/image-not.jpg"
                    className="mb-3 poster-image"
                  />
                )}
                <Card.Title>{item.Title}</Card.Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default movieList;
