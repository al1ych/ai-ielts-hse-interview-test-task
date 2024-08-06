import { INCREMENT_ATTEMPTS, AttemptsActionTypes } from "./actions";

export interface AttemptsState {
  attemptsCount: number;
}

const initialState: AttemptsState = {
  attemptsCount: 0,
};

export const attemptsReducer = (
  state = initialState,
  action: AttemptsActionTypes
): AttemptsState => {
  switch (action.type) {
    case INCREMENT_ATTEMPTS:
      state.attemptsCount += 1;
      return state;
    default:
      return state;
  }
};
