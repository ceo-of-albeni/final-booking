import React from "react";
import Header from "./components/Header";
import Routing from "./Routing";
import AuthContextProvider from "./contexts/authContext";
import PlacesContextProvider from "./contexts/placesContext";

const App = () => {
  return (
    <PlacesContextProvider>
      <AuthContextProvider>
        <Header />
        <Routing />
      </AuthContextProvider>
    </PlacesContextProvider>
  );
};

export default App;
