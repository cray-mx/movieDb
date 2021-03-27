import React, { useRef } from "react";
import axios from "axios";
import { Navbar, Form, Container, Row, Col, Card } from "react-bootstrap";

const NavBar = ({ setData }) => {
  const searchRef = useRef();
  const API = "http://www.omdbapi.com/";
  const API_KEY = "98d3e36d";

  const onSubmit = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const config = {
          params: {
            apikey: API_KEY,
            s: searchRef.current.value.trim(),
          },
        };
        const res = await axios.get(API, config);
        setData([...res.data.Search]);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <Container fluid className="p-0">
      <Navbar className="bg-dark justify-content-center">
        <Row>
          <Col>
            <Form>
              <Form.Control
                type="text"
                placeholder="Search"
                className="search-box"
                ref={searchRef}
                onKeyDown={(e) => onSubmit(e)}
              />
            </Form>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default NavBar;
