import player, { INITIAL_STATE as PLAYER_INITIAL_STATE } from './player';
import { ADD_PLAYER, REMOVE_PLAYER } from '../constants/ActionTypes';

export const addPlayerAction = () =>
  ({
    type: ADD_PLAYER
  });

export const removePlayerAction = () =>
  ({
    type: REMOVE_PLAYER
  });

const INITIAL_STATE = [];

const reducer = (state = INITIAL_STATE, action) => {

  if (action.type.startsWith('player/')) {
    const newState = [
      ...state.slice(0, action.index),
      player(state[action.index], action),
      ...state.slice(action.index + 1)
    ];

    return newState;
  }

  switch (action.type) {
    case ADD_PLAYER:
      return [
        ...state,
        Object.assign({}, PLAYER_INITIAL_STATE, { name: `Player ${state.length + 1}` })
      ];
    default:
      return state;
  }
};

export default reducer;
