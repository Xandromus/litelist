import React, { Component } from 'react';
import "../styles/FlexCell.scss";

export default class FlexCell extends Component {
  render() {
    return (
      <div className="flexcell">
        { this.props.children }
      </div>
    )
  }
}
