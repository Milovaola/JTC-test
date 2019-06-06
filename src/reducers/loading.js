import { combineReducers } from "redux";

export const loadingCharacters = (state = false, action) => {
  switch (action.type) {
    case "REQUEST_CHARACTERS":
      return true;
    case "GET_CHARACTERS":
      return false;
    case "GET_CHARACTER":
      return false;
    default:
      return state;
  }
};

export const loadingOriginResidents = (state = false, action) => {
  switch (action.type) {
    case "REQUEST_ORIGINAL_RESIDENTS":
      return true;
    case "GET_ORIGINAL_RESIDENTS":
      return false;
    default:
      return state;
  }
};

export const loadingLocationResidents = (state = false, action) => {
  switch (action.type) {
    case "REQUEST_CURRENT_RESIDENTS":
      return true;
    case "GET_CURRENT_RESIDENTS":
      return false;
    default:
      return state;
  }
};

export const episodeLoader = (state = false, action) => {
  switch (action.type) {
    case "REQUEST_EPISODES":
      return true;
    case "GET_EPISODES":
      return false;
    default:
      return state;
  }
};

export const serverRequestsReducers = combineReducers({
  loadingCharacters,
  episodeLoader,
  loadingOriginResidents,
  loadingLocationResidents
});
