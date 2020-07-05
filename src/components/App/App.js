import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { fetchPokemons } from "../../api/api";
import { Pokemon } from "../Pokemon/Pokemon";
import "./App.css";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPokemons().then((jsonResponse) => {
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: jsonResponse,
      });
    });
  }, []);

  const { pokemons, errorMessage, loading } = state;

  console.log(pokemons);

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <div id="poke_container" class="poke-container">
        {loading && <span>loading...</span>}

        {pokemons &&
          pokemons.map((pokemon, index) => (
            <Pokemon key={`${index}-${pokemons.name}`} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

export default App;
