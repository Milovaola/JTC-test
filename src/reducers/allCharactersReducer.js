export const allCharactersReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {...state, ...action.payload};
    default:
      return state;
  }
};
