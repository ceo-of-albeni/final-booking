import React, { useContext } from "react";
import { placesContext } from "../../contexts/placesContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlaceCard = ({ item }) => {
  const navigate = useNavigate();

  const { deletePlace } = useContext(placesContext);

  return (
    <div className="mx-4 mb-5">
      <Card style={{ width: "22rem" }}>
        <Card.Img variant="top" src={item.image} height="200" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text style={{ height: "70px" }}>{item.description}</Card.Text>
          {/* <Card.Text>{item.category.title}</Card.Text> */}
          <Button
            // className="ms-1"
            onClick={() => navigate(`/places/${item.id}`)}
            variant="primary">
            See
          </Button>
          <Button
            className="ms-2"
            onClick={() => navigate(`/edit/${item.id}`)}
            variant="primary">
            Edit
          </Button>
          <Button
            className="ms-2"
            onClick={() => deletePlace(item.id)}
            variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlaceCard;
