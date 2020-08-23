import React, { Component } from 'react';
import "../styles/UploadArea.scss";

export default class UploadArea extends Component {
  render() {
    return (
      <div className="uploadarea">
        { this.props.children }
      </div>
    )
  }
}
