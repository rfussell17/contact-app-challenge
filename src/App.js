import React, { Component } from "react";
import "./App.css";
import NewContactForm from "./NewContactForm";
import ContactsTable from "./ContactsTable";

class App extends Component {
  state = {
    contacts: [
      {
        firstName: "Andy",
        lastName: "Sterkowitz",
        phone: "5551234567",
        email: "andy@email.com",
        addressLine1: "123 Main St.",
        addressLine2: "Apt 1",
        city: "Chicago",
        state: "Illinois",
        country: "USA",
        notes: "None!"
      },
    ],
  };

  render(props) {
    return (
      <div className="container">
        <h1 className="my-4">Contact Tracker!</h1>
        <div>
          <NewContactForm />
        </div>
        <div>
          <ContactsTable contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default App;