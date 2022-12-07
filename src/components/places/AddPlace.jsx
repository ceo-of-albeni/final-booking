import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddPlace = () => {
  // const { createPlace } = useContext(placesContext); //getCategories, categories,
  const { addPlace } = useContext(placesContext);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [category, setCategory] = useState("");

  // useEffect(() => {
  //   getCategories();
  // }, []);

  // function savePlace() {
  //   let newPlace = new FormData();
  //   newPlace.append("title", title);
  //   newPlace.append("description", description);
  //   // newPlace.append("category", category);
  //   newPlace.append("image", image);
  //   createPlace(newPlace, navigate);
  // }
  function savePlace() {
    if (!title || !image || !description) {
      alert("Some inputs are empty!");
      return;
    }

    let newPlace = {
      title,
      image,
      description,
    };

    addPlace(newPlace);

    setTitle("");
    setImage("");
    setDescription("");

    navigate("/places");
  }
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ marginTop: "130px" }}>
      <h2
        style={{
          fontFamily: "fantasy",
        }}>
        Add Place
      </h2>

      <Form.Control
        style={{ width: "300px" }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      {/* <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      /> */}
      <br />

      <Form.Control
        style={{ width: "300px" }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      {/* <input
        className="my-1"
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      /> */}
      <br />

      {/* <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <br /> */}

      <Form.Control
        style={{ width: "300px" }}
        type="text"
        placeholder="URL"
        value={image}
        onChange={e => setImage(e.target.value)}
      />

      {/* <input
        type="text"
        placeholder="URL"
        value={image}
        onChange={e => setImage(e.target.value)}
      /> */}
      <br />

      {/* <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files[0])}
        /> */}
      <br />

      {/* <button onClick={savePlace}>Save Place</button> */}
      <Button onClick={savePlace} variant="outline-danger">
        Save Place
      </Button>
    </div>
  );
};

export default AddPlace;