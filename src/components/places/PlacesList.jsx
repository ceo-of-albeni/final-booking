import React, { useEffect, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { placesContext } from "../../contexts/placesContext";
import PlaceCard from "./PlaceCard";
import Pagination from "react-bootstrap/Pagination";

const PlacesList = () => {
  const { getPlaces, places, pages } = useContext(placesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPlaces();
  }, []);

  useEffect(() => {
    getPlaces();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function getPagesCount() {
    let pageCountArr = [];
    for (let i = 1; i < pages + 1; i++) {
      pageCountArr.push(i);
    }
    return pageCountArr;
  }
  // const itemsOnPage = 3;

  // const count = Math.ceil(places.length / itemsOnPage);

  // const handlePage = (e, p) => {
  //   setPage(p);
  // };

  // function currentData() {
  //   const begin = (page - 1) * itemsOnPage;
  //   const end = begin + itemsOnPage;
  //   return places.slice(begin, end);
  // }

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <h2
        style={{
          color: "grey",
          fontFamily: "fantasy",
        }}>
        Places List
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {places?.map(item => (
          <PlaceCard key={item.id} item={item} className="" />
        ))}
      </div>

      {/* <Pagination
        count={count}
        page={page}
        onChange={handlePage}
        color="primary"
      /> */}

      <Pagination>
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
      </Pagination>
    </div>
  );
};

export default PlacesList;
