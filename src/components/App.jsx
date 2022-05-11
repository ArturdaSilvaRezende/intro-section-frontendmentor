import React from "react";

//reset css
import "./reset.css";

//components
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Footer from "./Footer/Footer";

//store
import Store from "../store/store";

const App = () => {
  return (
    <>
      <Store>
        <Header />
        <Hero />
        <Footer />
      </Store>
    </>
  );
};

export default App;
