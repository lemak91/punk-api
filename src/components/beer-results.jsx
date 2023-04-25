import React from "react";
import BeerResultItem from "./beer-results-item";

const BeerResults = ({beers}) => {
  return (
    <div className="beer-results-container">
      <ul className="beer-results">
        {beers.map((item) => (
          <BeerResultItem beer={item} />
        ))}
      </ul>
    </div>
  );
};

export default BeerResults;
