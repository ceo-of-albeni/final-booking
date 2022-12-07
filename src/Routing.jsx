import React from "react";
import { Routes, Route } from "react-router-dom";
//user
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/Registration";
//places
import AddPlace from "./components/places/AddPlace";
import PlacesList from "./components/places/PlacesList";
import Details from "./components/places/Details";
import UpdatePlace from "./components/places/UpdatePlace";
import PlacesPage from "./pages/PlacesPage";

const Routing = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/register",
      element: <Registration />,
      id: 2,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 3,
    },
    {
      link: "/add",
      element: <AddPlace />,
      id: 4,
    },
    {
      link: "/places",
      element: <PlacesList />,
      id: 5,
    },
    {
      link: "/places/:id",
      element: <Details />,
      id: 6,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map(item => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default Routing;
