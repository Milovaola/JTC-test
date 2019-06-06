const initialState = {
  info: {},
  origin: {},
  location: {},
  originalResidents: [],
  currentResidents: [],
  episodes: []
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHARACTER":
      return { ...state, info: action.payload };
    case "CLEAR_CHARACTER":
      return initialState;
    case "GET_ORIGIN_PLANET":
      return { ...state, origin: action.payload };
    case "GET_CURRENT_PLANET":
      return { ...state, location: action.payload };
    case "GET_ORIGINAL_RESIDENTS":
      return { ...state, originalResidents: action.payload };
    case "GET_CURRENT_RESIDENTS":
      return { ...state, currentResidents: action.payload };
    case "GET_EPISODES":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
};
