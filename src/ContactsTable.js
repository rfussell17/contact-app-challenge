import React, { Component } from "react";

class ContactsTable extends Component {
  render() {
    const dataRows = this.props.contacts.map(contact => {
        return (
            <tr>
                <td>{`${contact.firstName} ${contact.lastName}`}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{`${contact.addressLine1} ${contact.addressLine2}`}</td>
                <td>{`${contact.city}, ${contact.state}`}</td>
                <td>{contact.country}</td>
                <td>{contact.notes}</td>
            </tr>
        )
    });

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
            {dataRows}
        </tbody>
      </table>
    );
  }
}

export default ContactsTable;
