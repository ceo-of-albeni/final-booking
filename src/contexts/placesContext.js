import React, { useState, useReducer } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PLACES } from "../helpers/consts";

export const placesContext = React.createContext();

const INIT_STATE = {
  places: [],
  onePlace: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PLACES":
      return { ...state, places: action.payload };
    case "GET_ONE_PLACE":
      return { ...state, onePlace: action.payload };
    default:
      return state;
  }
}

const PlaceContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addPlace(newPlace) {
    await axios.post(JSON_API_PLACES, newPlace);
    getPlaces();
  }

  const getPlaces = async () => {
    const res = await axios(JSON_API_PLACES);
    dispatch({
      type: "GET_PLACES",
      payload: res.data,
    });
  };

  async function deletePlace(id) {
    await axios.delete(`${JSON_API_PLACES}/${id}`);
    getPlaces();
  }

  async function getOnePlace(id) {
    const { data } = await axios(`${JSON_API_PLACES}/${id}`);
    dispatch({
      type: "GET_ONE_PLACE",
      payload: data,
    });
  }

  async function updatePlace(id, editedPlace) {
    await axios.patch(`${JSON_API_PLACES}/${id}`, editedPlace);
  }
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "places") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };
  return (
    <placesContext.Provider
      value={{
        places: state.places,
        onePlace: state.onePlace,

        addPlace,
        getPlaces,
        deletePlace,
        getOnePlace,
        updatePlace,
        fetchByParams,
      }}>
      {children}
    </placesContext.Provider>
  );
};

export default PlaceContextProvider;
