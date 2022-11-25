import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
