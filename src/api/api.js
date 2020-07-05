export const BASE_URL = "https://spring-pokedex-textsearch.herokuapp.com/";

export const fetchPokemons = (search = "growing") =>
  fetch(`${BASE_URL}pokemon/?search=${search}`).then((response) =>
    response.json()
  );
