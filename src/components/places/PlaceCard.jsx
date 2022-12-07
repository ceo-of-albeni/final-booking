import React, { useContext } from "react";
import { placesContext } from "../../contexts/placesContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlaceCard = ({ item }) => {
  const navigate = useNavigate();

  const { deletePlace } = useContext(placesContext);

  return (
    <div>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={item.image} height="200" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          {/* <Card.Text>{item.category.title}</Card.Text> */}
          <Button
            className="mx-1"
            onClick={() => navigate(`/places/${item.id}`)}
            variant="danger">
            See
          </Button>
          <Button
            className="mx-2"
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="danger">
            Edit
          </Button>
          <Button
            className="mx-2"
            onClick={() => deletePlace(item.id)}
            variant="primary">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlaceCard;
