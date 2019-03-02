import { Component } from "react";
import React from "react";

class Header extends Component {
  tagline;
  render() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>

        <h3 className="tagline">
          <span> {this.props.tagline}</span>
        </h3>
      </header>
    );
  }
}

export default Header;
