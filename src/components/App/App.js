import React, { useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { fetchPokemons } from "../../api/api";
import { Pokemon } from "../Pokemon/Pokemon";
import { Search } from "../Search/Search";
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

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_REQUEST",
    });

    fetchPokemons(searchValue).then((jsonResponse) => {
      dispatch({
        type: "SEARCH_SUCCESS",
        payload: jsonResponse,
      });
    });
  };

  const { pokemons, errorMessage, loading } = state;

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <Search search={search} />
      <div id="poke_container" class="poke-container">
        {loading && <span>loading...</span>}
        {errorMessage && <span>errorMessage...</span>}

        {pokemons &&
          pokemons.map((pokemon, index) => (
            <Pokemon key={`${index}-${pokemons.name}`} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

export default App;
