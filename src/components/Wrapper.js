import React, { Component } from 'react';
import "../styles/Wrapper.scss";

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        { this.props.children }
      </div>
    )
  }
}
