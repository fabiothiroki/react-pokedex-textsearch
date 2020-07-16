export const initialState = {
  loading: true,
  pokemons: [],
  errorMessage: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_REQUEST":
      return {
        loading: true,
        pokemons: [],
        errorMessage: null,
      };
    case "SEARCH_SUCCESS":
      return {
        loading: false,
        pokemons: action.payload,
        errorMessage: null,
      };
    default:
      return state;
  }
};
