import { combineReducers } from "redux";
import { serverRequestsReducers } from "./loading";
import { allCharactersReducer } from "./allCharactersReducer";
import { characterReducer } from "./characterReducer";

export const reducer = combineReducers({
  characters: allCharactersReducer,
  character: characterReducer,
  isLoading: serverRequestsReducers
});
