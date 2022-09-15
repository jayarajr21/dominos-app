import React from "react";

import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";

const ProductItem = ({ image, name, price }) => {
  return (
    <Card className="bg-dark text-white rounded my-2">
      <Card.Img src={image} alt="Card image" class="fitToContent" />

      <Card.ImgOverlay className="d-flex justify-content-end align-items-end p-0">
        <div className="d-flex flex-column justify-content-end align-items-center bg-dark w-100 bg-opacity-50 p-2 rounded-top">
          <Card.Title>{name}</Card.Title>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ProductItem;
