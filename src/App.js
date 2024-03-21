import React from "react";
import Header from "./components/Header";
import "./App.css";
import "./bootstrap.min.css";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
    </div>
  );
};

export default App;
