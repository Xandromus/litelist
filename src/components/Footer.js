import React, { Component } from 'react';
import "../styles/Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>Xander Rapstine</p>
        { this.props.children }
      </footer>
    )
  }
}
