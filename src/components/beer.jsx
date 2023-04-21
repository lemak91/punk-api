import React, { Component } from "react";
import { render } from "react-dom";

class Beers extends Component {
  render() {
    const items = this.props.beers.map((beer) => {
      return (
        <li key={beer.id}>
          <h3>{beer.name}</h3>

          <p>{beer.description}</p>
        </li>
      );
    });

    return <ul>{items}</ul>;
  }
}

export default Beers;
