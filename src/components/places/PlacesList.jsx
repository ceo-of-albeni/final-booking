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

  // useEffect(() => {
  //   setSearchParams({
  //     page: currentPage,
  //   });
  // }, [currentPage]);

  // function getPagesCount() {
  //   let pageCountArr = [];
  //   for (let i = 1; i < pages + 1; i++) {
  //     pageCountArr.push(i);
  //   }
  //   return pageCountArr;
  // }

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

        {/* <div className="cards">
          {products ? (
            currentData().map(item => <ProductCard key={item.id} item={item} />)
          ) : (
            <h3>Loading...</h3>
          )}
        </div> */}

        <div className="d-flex justify-content-center flex-wrap">
          {places ? (
            currentData().map(item => <PlaceCard key={item.id} item={item} />)
          ) : (
            <h3>Loading...</h3>
          )}
        </div>

        <Pagination count={count} page={page} onChange={handlePage} />

        {/* <Pagination>
          <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

          {getPagesCount().map(item =>
            item === currentPage ? (
              <Pagination.Item
                active
                key={item}
                onClick={() => setCurrentPage(item)}>
                {item}
              </Pagination.Item>
            ) : (
              <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
                {item}
              </Pagination.Item>
            )
          )}

          <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
        </Pagination> */}
      </div>
      <Footer />
    </div>
  );
};

export default PlacesList;
