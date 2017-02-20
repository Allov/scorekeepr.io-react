import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import bindIndexToActionCreators from '../store/bindIndexToActionCreators';
import { connect } from 'react-redux';
import { addPlayerAction, removePlayerAction } from '../reducers/players';
import { incrementAction, decrementAction, changePlayerNameAction } from '../reducers/player';
import Player from './Player';

const counterDispatchProperties =
  index =>
    actions => {
      return bindActionCreators(
      bindIndexToActionCreators({ incrementAction, decrementAction, changePlayerNameAction }, index),
      actions);
    };

class Players extends Component {
  constructor(props) {
    super(props);

    this.handleAddPlayer = this.handleAddPlayer.bind(this);
  }

  handleAddPlayer() {
    this.props.actions.addPlayerAction();
  }

  render() {
    const { players, dispatch } = this.props;

    return (
      <div>
        {players.map((player, index) =>
          <Player key={index}
            player={player}
            actions={counterDispatchProperties(index)(dispatch)}
          />
        )}
        <div className="counter-buttons">
          <button className="add-player-button" onClick={this.handleAddPlayer}>+</button>
        </div>
      </div>
    );
  }
}

Players.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return ({
    players: state.players
  });
};

const mapDispatchToProps = (dispatch) => {
  const actions = {
    addPlayerAction,
    removePlayerAction
  };

  return {
    actions: bindActionCreators(actions, dispatch),
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);


