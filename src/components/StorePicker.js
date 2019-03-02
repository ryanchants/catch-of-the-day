import { Component } from "react";
import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          value={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
