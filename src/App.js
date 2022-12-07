import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/authContext";
import PlacesContextProvider from "./contexts/placesContext";

const App = () => {
  return (
    <PlacesContextProvider>
      <AuthContextProvider>
        <Header />
        <Footer />
        <Routing />
      </AuthContextProvider>
    </PlacesContextProvider>
  );
};

export default App;
