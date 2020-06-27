import React, { Component } from "react";

class ContactsTable extends Component {
  render(props) {
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
          {
            console.log("this.props: ", this.props),
            console.log("this.contacts: ", this.contacts)
          }
        </tbody>
      </table>
    );
  }
}

export default ContactsTable;