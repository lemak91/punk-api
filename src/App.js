import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import BeerResults from "./components/beer-results.jsx";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://api.punkapi.com/v2/beers?per_page=10")
        .then((response) => {
          setBeers(response.data);
        });
    };
    fetchData();
  }, []);

  console.log(beers);

  return (
    <div className="App">
      <header className="App-header">
        <p>Beer API</p>
        <BeerResults beers={beers} />
      </header>
    </div>
  );
}

export default App;
