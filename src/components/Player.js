import React, { Component, PropTypes } from 'react';

export default class Player extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleNameChange(e) {
    this.props.actions.changePlayerName(e.target.value);
  }

  handleFocus(e) {
    e.target.select();
  }

  render() {
    return (
      <input type="text"
        value={this.props.name}
        onChange={this.handleNameChange}
        onFocus={this.handleFocus}
      />
    );
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};
