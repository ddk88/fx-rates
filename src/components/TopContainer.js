import React, { Component } from 'react';

export default class TopContainer extends Component {
  render() {
    return (
      <div className="topcontainer">
        { this.props.children }
      </div>
    )
  }
}
