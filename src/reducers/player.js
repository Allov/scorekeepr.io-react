import { CHANGE_PLAYER_NAME } from '../constants/ActionTypes';

export default function player(state = 'Player 1', action) {
  switch (action.type) {
    case CHANGE_PLAYER_NAME:
      return action.player;
    default:
      return state;
  }
}
