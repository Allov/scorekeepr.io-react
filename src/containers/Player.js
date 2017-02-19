import React, { Component, PropTypes } from 'react';
import PlayerName from '../components/PlayerName';
import Counter from '../components/Counter';

class Player extends Component {
  render() {
    const { player, actions } = this.props;

    return (
      <div>
        <PlayerName name={player.name} actions={actions} />
        <Counter counter={player.score} actions={actions} />
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default Player;


