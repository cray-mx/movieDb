import React, { useRef } from "react";
import axios from "axios";
import { Navbar, Form, Container, Row, Col } from "react-bootstrap";

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
        console.log(res.data);
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
            <h1 style={{ color: "#66c2ff" }}>MovieDb</h1>
          </Col>
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
