import React, { Component } from "react";

class ContactsTable extends Component {
  render() {

    const tableRows = [];

    for(let i = 0; i < this.props.contacts.length; i++){
     // "inside the for loop create a variable to store the <tr> element 
     // and then add that variable to the tableRows array
     const row = <tr>{this.props.contacts[i].firstName}</tr>
     tableRows.push(row);

    }

    return (
      <table className="table table-bordered mt-5">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>City/State</th>
            <th>Country</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}

export default ContactsTable;