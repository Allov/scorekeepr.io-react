import { INCREMENT_SCORE, DECREMENT_SCORE, CHANGE_PLAYER_NAME } from '../constants/ActionTypes';

export const incrementAction = () =>
  ({
    type: INCREMENT_SCORE
  });

export const decrementAction = () =>
  ({
    type: DECREMENT_SCORE
  });

export const changePlayerNameAction = (name) =>
  ({
    type: CHANGE_PLAYER_NAME,
    name
  });

export const INITIAL_STATE = {
  name: 'Player 1',
  score: 0
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      const s = {
        ...state,
        score: state.score + 1
      };

      return s;
    case DECREMENT_SCORE:
      return {
        ...state,
        score: state.score - 1
      };
    case CHANGE_PLAYER_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default reducer;
