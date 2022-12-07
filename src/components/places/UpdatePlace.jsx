import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";

const UpdatePlace = () => {
  const { onePlace, getOnePlace, updatePlace } = useContext(placesContext); //getCategories, categories

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [category, setCategory] = useState("");

  useEffect(() => {
    getOnePlace(id);
    // getCategories();
  }, []);

  useEffect(() => {
    if (onePlace) {
      setTitle(onePlace.title);
      setDescription(onePlace.description);
      // setCategory(onePlace.category.id);
    }
  }, [onePlace]);

  function saveChanges() {
    let editedPlace = new FormData();
    editedPlace.append("title", title);
    editedPlace.append("description", description);
    // editedPlace.append("category", category);
    editedPlace.append("image", image);
    updatePlace(id, editedPlace, navigate);
  }

  return (
    <div>
      <h2>Update Place</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
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

      <input
        type="file"
        accept="image/*"
        onChange={e => setImage(e.target.files[0])}
      />
      <br />

      <button onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default UpdatePlace;
