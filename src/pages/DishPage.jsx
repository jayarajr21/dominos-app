import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import ProductItem from "../components/ProductItem";
import AppBody from "../components/AppBody";
import Title from "../components/Title";
import dominosApi from "../api/Dominos";
import AppBar from "../components/AppBar";
import Card from "react-bootstrap/Card";
import CarouselsThree from "../assets/images/pizza-3.jpg";
import CarouselsTwo from "../assets/images/pizza-2.jpg";
import CarouselsOne from "../assets/images/pizza-1.jpg";

const DishPage = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    dominosApi

      .get(`/dish/all`)

      .then((response) => {
        let data = response.data;

        if (data.data) {
          console.log(data.data);

          setDishes(data.data);
        } else if (data.error) {
          console.log(data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <AppBar />
      <AppBody>
        <Container>
          <Row>
            <Col>
              <Stack gap={3} className="mt-5 px-5 py-5">
                <Title title="Dishes!!" />
                <Container>
                  <Row>
                    {dishes.map((dish, index) => {
                      return (
                        <Col md={12}>
                          <ProductItem
                            image={dish.image}
                            name={dish.dishName}
                            price={dish.price}
                            // price={product.price}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Stack>
            </Col>
          </Row>
        </Container>
      </AppBody>
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
                src={CarouselsTwo}
                alt="Card image"
                className="fitToContent"
              />
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
                src={CarouselsOne}
                alt="Card image"
                className="fitToContent"
              />
              </Card>
              </Col>
              </Row>
              </Container>
    </div>
  );
};

export default DishPage;
