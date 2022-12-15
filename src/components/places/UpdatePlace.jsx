import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../Footer";

const UpdatePlace = () => {
  const { onePlace, getOnePlace, updatePlace } = useContext(placesContext); //getCategories, categories

  const { id } = useParams();
  const navigate = useNavigate();

  const [place, setPlace] = useState(onePlace);

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  // const [category, setCategory] = useState("");

  useEffect(() => {
    getOnePlace(id);
    // getCategories();
  }, []);

  useEffect(() => {
    setPlace(onePlace);
    // if (onePlace) {
    // setTitle(onePlace.title);
    // setDescription(onePlace.description);
    // setCategory(onePlace.category.id);
  }, [onePlace]);

  // function saveChanges() {
  //   let editedPlace = new FormData();
  //   editedPlace.append("title", title);
  //   editedPlace.append("description", description);
  //   // editedPlace.append("category", category);
  //   editedPlace.append("image", image);
  //   updatePlace(id, editedPlace, navigate);
  // }

  const handleInp = e => {
    // if (e.target.name === "image") {
    //   let obj = {
    //     ...place,
    //     image: e.target.files[0],
    //   };
    //   setPlace(obj);
    // } else {
    let obj = {
      ...place,
      [e.target.name]: e.target.value,
    };
    setPlace(obj);
    // }
  };

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "130px", height: "530px" }}>
        <h2>Update Place</h2>

        <Form.Control
          style={{ width: "300px" }}
          type="text"
          value={place.title}
          placeholder="Title"
          name="title"
          onChange={handleInp}
        />

        <br />

        <Form.Control
          style={{ width: "300px" }}
          type="text"
          value={place.description}
          placeholder="Description"
          name="description"
          onChange={handleInp}
        />

        <br />

        {/* <h3>CATEGORY BEFORE: {onePlace?.category.title}</h3>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Choose category...</option>
        {categories?.map(item => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <br /> */}

        {/* <input type="file" accept="image/*" name="image" onChange={handleInp} /> */}
        {/* <br /> */}
        <Form.Control
          style={{ width: "300px" }}
          type="text"
          name="image"
          value={place.image}
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
