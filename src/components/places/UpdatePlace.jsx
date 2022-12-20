import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import { Form, Button } from "react-bootstrap";
import Footer from "../Footer";

const UpdatePlace = () => {
  const { onePlace, getOnePlace, updatePlace } = useContext(placesContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState(onePlace);

  useEffect(() => {
    getOnePlace(id);
  }, []);

  useEffect(() => {
    setPlace(onePlace);
  }, [onePlace]);

  const handleInp = e => {
    let obj = {
      ...place,
      [e.target.name]: e.target.value,
    };
    setPlace(obj);
  };

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "130px", height: "533px" }}>
        <h2 style={{ fontFamily: "fantasy" }}>Update Place</h2>

        <Form.Control
          style={{ width: "300px" }}
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleInp}
        />

        <br />

        <Form.Control
          style={{ width: "300px" }}
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleInp}
        />
        <br />

        <Form.Control
          style={{ width: "300px" }}
          type="text"
          placeholder="Location"
          name="location"
          onChange={handleInp}
        />

        <br />
        <Form.Control
          style={{ width: "300px" }}
          type="text"
          name="image"
          placeholder="URL"
          onChange={handleInp}
        />
        <br />

        <Button
          onClick={() => {
            updatePlace(id, place);
            navigate("/places");
          }}
          variant="outline-danger">
          Update
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default UpdatePlace;
