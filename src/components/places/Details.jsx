import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const Details = () => {
  const { getOnePlace, onePlace } = useContext(placesContext);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOnePlace(id);
  }, []);

  return (
    <div>
      <div style={{ height: "630px" }}>
        {onePlace ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: "8%",
              marginTop: "2%",
            }}>
            <Card
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "row",
                // backgroundColor: "beige",
              }}
              sx={{ maxWidth: 900 }}>
              <img alt="error" width="600" src={onePlace.image} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "50px",
                  // justifyContent: "space-around",
                }}>
                <h5
                  style={{
                    color: "brown",
                    fontWeight: "bold",
                    fontSize: "35px",
                    margin: "50px 0 0",
                  }}>
                  {onePlace.title}
                </h5>
                <p style={{ fontSize: "20px", marginBottom: "50px" }}>
                  {onePlace.location}
                </p>
                <h5
                  style={{
                    // paddingLeft: "1%",
                    fontSize: "23px",
                    fontWeight: "lighter",
                    color: "grey",
                  }}>
                  {onePlace.description}
                </h5>
              </div>
            </Card>
            <Button onClick={() => navigate("/places")}>Back</Button>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
