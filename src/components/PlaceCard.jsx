import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlaceCard = () => {
  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Olymp</Card.Title>
          <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            saepe at temporibus suscipit ut tempora corporis accusantium
            molestias ducimus optio!
          </Card.Text>
          <Button variant="danger">See</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlaceCard;
