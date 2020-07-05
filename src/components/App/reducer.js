export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
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
