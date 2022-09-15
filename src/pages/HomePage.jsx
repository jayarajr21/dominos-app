import React from "react";
import Carousels from "../components/Carousels";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import Title from "../components/Title";
import Button from "react-bootstrap/Button";
import CarouselsOne from "../assets/images/pizza-1.jpg";
import CarouselsTwo  from "../assets/images/pizza-2.jpg";
import CarouselsThree from "../assets/images/pizza-3.jpg";
import Card from "react-bootstrap/Card";
import AppBar  from "../components/AppBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Carousels />
      <Container>
        <Row>
          <Col>
            <Stack gap={3} className="my-5">
              <Title title="Dominos" />
              <Container>
                <Row>
                  <Col md={4}>
                    <Card className="bg-dark text-dark rounded">
                      <Card.Img
                        src={CarouselsOne}
                        alt="Card image"
                        className="fitToContent"
                      />
                      <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0">
                        <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100 bg-opacity-10 m-o">
                        </div>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Stack>
          </Col>
        </Row>
        <Container>
                <Row>
                  <Col md={4}>
                    <Card className="bg-dark text-dark rounded">
                      <Card.Img
                        src={CarouselsTwo}
                        alt="Card image"
                        className="fitToContent"
                      />
                      <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0">
                        <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100 bg-opacity-10 m-o">
                        </div>
                      </Card.ImgOverlay>
                    </Card>
                  </Col>
                </Row>
              </Container>
        <Container>
        <Row>
        <Stack gap={3} className="my-4"></Stack>
          <Col md={4}>
            <Card className="bg-dark text-dark rounded">
              <Card.Img
                src={CarouselsThree}
                alt="Card image"
                className="fitToContent"
              />
              <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0">
                <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100 bg-opacity-10 m-o">
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
      </Container>
      </div>
  );
};
export default HomePage;
