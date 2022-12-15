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
  // const API = "http://localhost:8000/places";
  const location = useLocation();
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addPlace(newPlace) {
    await axios.post(JSON_API_PLACES, newPlace);
    getPlaces();
  }

  const getPlaces = async () => {
    // console.log(window.location.search);
    // const { data } = await axios(
    //   `${JSON_API_PLACES}/${window.location.search}`
    // );
    // dispatch({
    //   type: ACTIONS.GET_PLACES,
    //   payload: data,
    // });
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
    // let res = await axios(`${JSON_API_PLACES}/${id}`);
    // dispatch({
    //   type: "GET_ONE_PLACE",
    //   payload: res.data,
    // });
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
// import React, { useReducer } from "react";
// import axios from "axios";

// export const placesContext = React.createContext();

// // const INIT_STATE = {
// //   places: [],
// //   pages: 0,
// //   // categories: [],
// //   onePlace: null,
// // };

// const INIT_STATE = {
//   places: [],
//   placeDetails: null,
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case ACTIONS.GET_PLACES:
//       return { ...state, places: action.payload };
//     case ACTIONS.GET_PLACE_DETAILS:
//       return { ...state, placeDetails: action.payload };
//     default:
//       return state;
//   }
// };

// // function reducer(state = INIT_STATE, action) {
// //   switch (action.type) {
// //     case "GET_PLACES":
// //       return {
// //         ...state,
// //         places: action.payload.results,
// //         pages: Math.ceil(action.payload.count / 5),
// //       };
// //     // case "GET_CATEGORIES":
// //     //   return { ...state, categories: action.payload };
// //     case "GET_ONE_PLACE":
// //       return { ...state, onePlace: action.payload };
// //     default:
// //       return state;
// //   }
// // }

// // const API = "";

// const PlacesContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);

//   // async function getCategories() {
//   //   try {
//   //     const tokens = JSON.parse(localStorage.getItem("tokens"));
//   //     const Authorization = `Bearer ${tokens.access}`;
//   //     const config = {
//   //       headers: {
//   //         Authorization,
//   //       },
//   //     };
//   //     const res = await axios(`${API}/category/list/`, config);
//   //     dispatch({
//   //       type: "GET_CATEGORIES",
//   //       payload: res.data.results,
//   //     });
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // }

//   async function createPlace(newPlace, navigate) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios.post(`${API}/places/`, newPlace, config);
//       navigate("/places");
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function getPlaces() {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios(
//         `${API}/places/${window.location.search}`,
//         config
//       );
//       dispatch({
//         type: "GET_PLACES",
//         payload: res.data,
//       });
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function getOnePlace(id) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios(`${API}/places/${id}`, config);
//       dispatch({
//         type: "GET_ONE_PLACE",
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function updatePlace(id, editedPlace, navigate) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios.patch(
//         `${API}/places/${id}/`,
//         editedPlace,
//         config
//       );
//       navigate("/places");
//       getPlaces();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function deletePlace(id) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       const res = await axios.delete(`${API}/places/${id}/`, config);
//       getPlaces();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   // likes

//   //comments

//   //delete comment

//   // async function createCategory(category) {
//   //   try {
//   //     const tokens = JSON.parse(localStorage.getItem("tokens"));
//   //     const Authorization = `Bearer ${tokens.access}`;
//   //     const config = {
//   //       headers: {
//   //         Authorization,
//   //       },
//   //     };
//   //     const res = await axios.post(`${API}/category/`, category, config);
//   //     getCategories();
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // }

//   return (
//     <placesContext.Provider
//       value={{
//         places: state.places,
//         pages: state.pages,
//         // categories: state.categories,
//         onePlace: state.onePlace,

//         // getCategories,
//         createPlace,
//         getPlaces,
//         getOnePlace,
//         updatePlace,
//         deletePlace,
//         // createCategory,
//       }}>
//       {children}
//     </placesContext.Provider>
//   );
// };

// export default PlacesContextProvider;
