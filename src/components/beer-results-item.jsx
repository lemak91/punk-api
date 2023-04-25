import React from "react";
import LikeButton from "./like-button";

const BeerResultItem = ({beer}) => {
  return (
    <li className="beer-item" key={beer.id}>
      <h1>{beer.name}</h1>
      <div className="beer-image">
        <img alt="Beer Product" src={beer.image_url} />
        <LikeButton />
      </div>
      <div className="beer-description">
        <p>{beer.description}</p>
      </div>
    </li>
  )
};

export default BeerResultItem;
