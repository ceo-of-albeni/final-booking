import React, { useEffect, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import PlaceCard from "./PlaceCard";
import Pagination from "@mui/material/Pagination";
import Footer from "../Footer";

const PlacesList = () => {
  const { getPlaces, places } = useContext(placesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const itemsOnPage = 6;

  const count = Math.ceil(places.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return places.slice(begin, end);
  }

  useEffect(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    getPlaces();
  }, [searchParams]);

  return (
    <div>
      <div
        className="d-flex flex-column align-items-center mt-5"
        style={{ marginBottom: "100px" }}>
        <h2
          style={{
            fontFamily: "fantasy",
          }}>
          Places
        </h2>

        <div className="d-flex justify-content-center flex-wrap">
          {places ? (
            currentData().map(item => <PlaceCard key={item.id} item={item} />)
          ) : (
            <h3>Loading...</h3>
          )}
        </div>

        <Pagination count={count} page={page} onChange={handlePage} />

      </div>
      <Footer />
    </div>
  );
};

export default PlacesList;
