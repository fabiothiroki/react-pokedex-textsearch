const API_URL = `https://spring-pokedex-textsearch.herokuapp.com/pokemon/?search=`;

export const fetchPokemons = (search = "growing") =>
  fetch(`${API_URL}&search=${search}`).then((response) => response.json());
