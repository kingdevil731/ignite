// Combiner
import { combineReducers } from "redux";
// Reducers
import gamesReducer from "./gamesReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: gameReducer,
});

export default rootReducer;
