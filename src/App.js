import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import Dates from "./components/Dates";
import cars from "./assets/fake/cars";
import "./reset.css";
import "./App.css";

export default () => {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} />
      <Menu />
      <Cards data={cars} search={search} />
      <Dates />
    </div>
  );
};
