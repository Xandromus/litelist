import React, { Component } from 'react';
import "../styles/Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>LiteList</h1>
        <h2>Lightning fast whitelists!</h2>
        { this.props.children }
      </header>
    )
  }
}
