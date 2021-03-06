'use strict';

import React from 'react';
import { connect } from 'react-redux'
import { fetchStream } from '../../actions/AsyncActions'
import { removeStream, embedStream } from '../../actions/StreamActions'

require('./Stream.css');

class Stream extends React.Component {
  truncateString(string) {
    if (string.length >= 36) {
      return string.substring(0,35) + '...'
    }
    return string
  }
  handleRemoveStream(event) {
    event.stopPropagation()
    this.props.dispatch(removeStream(this.props.stream._id))
  }
  handleStreamClick() {
    this.props.dispatch(fetchStream(this.props.stream.channel.name, true))
    this.props.dispatch(embedStream(this.props.stream.channel.name))
  }
  render() {
    return (
      <div className="stream-component" onClick={this.handleStreamClick.bind(this)}>
        <div className="stream-title">
          <span>{this.truncateString(this.props.stream.channel.status)}</span>
        </div>
        <div className="stream-container">
          <img src={this.props.stream.channel.logo} alt={this.props} className="stream-avatar"/>
          <div className="stream-info">
            <div className="stream-game">
              <span>{this.props.stream.game}</span>
            </div>
            <div className="stream-stats">
              <span>{this.props.stream.viewers} watching</span>
            </div>
          </div>
        </div>
        <div className="stream-remove" onClick={this.handleRemoveStream.bind(this)}>
          <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-minus fa-stack-1x"></i>
          </span>
        </div>
      </div>
    );
  }
}

Stream.displayName = 'Stream';

// Uncomment properties you need
// Streamer.propTypes = {};
// Streamer.defaultProps = {};

export default connect()(Stream);
