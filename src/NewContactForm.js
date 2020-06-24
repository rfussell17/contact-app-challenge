import React, { Component } from "react";

class NewContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Phone Number</label>
        <input type="text" />
        <label>Address Line 1</label>
        <input type="text" />
        <label>Address Line 2</label>
        <input type="text" />
        <label>City</label>
        <input type="text" />
        <label>State</label>
        <input type="text" />
        <label>Country</label>
        <input type="text" />
        <label>Notes</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewContactForm;
