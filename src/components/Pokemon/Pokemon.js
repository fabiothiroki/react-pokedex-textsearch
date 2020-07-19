import React from "react";
import { BASE_URL } from "../../api/api";

export const Pokemon = ({ pokemon }) => {
  return (
    <div class="pokemon">
      <div class="img-container">
        <img src={`${BASE_URL}/${pokemon.name}.png`} alt={pokemon.name} />
      </div>
      <div class="info">
        <span class="number">{`# ${pokemon.id}`}</span>
        <h3 class="name">{pokemon.name}</h3>
        <small class="type">
          Type: <span>{pokemon.type1}</span>
          <p>{pokemon.description}</p>
        </small>
      </div>
    </div>
  );
};