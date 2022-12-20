import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import { Button, Card } from "react-bootstrap";
import Footer from "../Footer";
import "../../styles/details.css";
import Loader from "../Loader";

const Details = () => {
  const { getOnePlace, onePlace } = useContext(placesContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOnePlace(id);
  }, []);

  return (
    <div>
      <div style={{ height: "634px" }}>
        {onePlace ? (
          <div className="details__card">
            <Card
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "row",
              }}
              sx={{ maxWidth: 900 }}>
              <img alt="error" width="600" src={onePlace.image} />
              <div className="details__text-div">
                <h5 className="details__title">{onePlace.title}</h5>
                <p className="details__location">{onePlace.location}</p>
                <h5 className="details__desc">{onePlace.description}</h5>
              </div>
            </Card>
            <Button
              onClick={() => navigate("/places")}
              variant="danger"
              className="ms-3">
              Back
            </Button>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
