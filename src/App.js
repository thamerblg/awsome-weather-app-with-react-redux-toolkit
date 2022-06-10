import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import City from "./components/City";
import Weather from "./components/Weather";

function App() {
  const cityName = useSelector((state) => state.city.name);

  return (
    <>
      <h1>React Weather app</h1>
      <City />
      {cityName && <Weather />}
    </>
  );
}

export default App;
