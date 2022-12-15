import React from "react";
import Footer from "./components/Footer";
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
        {/* <Footer /> */}
      </AuthContextProvider>
    </PlacesContextProvider>
  );
};

export default App;
