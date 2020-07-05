import React, { useEffect } from "react";
import { fetchPokemons } from "../../api/api";
import "./App.css";

export const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchPokemons().then((jsonResponse) => {
      console.log(jsonResponse);
      // dispatch({
      //   type: "SEARCH_MOVIES_SUCCESS",
      //   payload: jsonResponse.Search,
      // });
    });
  }, []);

  return (
    <div className="App">
      <h1>PokeDex</h1>
      <div id="poke_container" class="poke-container"></div>
    </div>
  );
};

export default App;
