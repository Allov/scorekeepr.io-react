import { CHANGE_PLAYER_NAME } from '../constants/ActionTypes';

export function changePlayerName(player) {
  return {
    type: CHANGE_PLAYER_NAME,
    player
  };
}
