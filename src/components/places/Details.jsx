import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";

const Details = () => {
  const { getOnePlace, onePlace } = useContext(placesContext);

  const { id } = useParams();

  useEffect(() => {
    getOnePlace(id);
  }, []);

  return (
    <>
      <h3>{onePlace.title}</h3>
      <h3>{onePlace.description}</h3>
      {/* <h3>{onePlace.category.title}</h3> */}
      <img src={onePlace.image} alt="error" />
      <br />
    </>
  );
};

export default Details;
