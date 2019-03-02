import { Component } from "react";
import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  myInput = React.createRef();
  goToStore = event => {
    // Stop form from submitting
    event.preventDefault();
    // Get form input
    const storeName = this.myInput;
    console.log(storeName);
    // Route to correct page
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          ref={this.myInput}
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
