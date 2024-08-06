import { createStore, combineReducers } from "redux";
import { attemptsReducer } from "./reducers";

const rootReducer = combineReducers({
  attempts: attemptsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
