import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPlace = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  // const [category, setCategory] = useState('')

  return (
    <div>
      <div>
        <h2>Add Product</h2>

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

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <br />

        {/* <select value={category} onChange={e => setCategory(e.target.value)}>
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

        <button>Save Product</button>
      </div>
    </div>
  );
};

export default AddPlace;
