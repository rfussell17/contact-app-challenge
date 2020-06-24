import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewContactForm from './NewContactForm';
import ContactsTable from './ContactsTable';

class App extends Component {
  state = {
    contacts: [
      { 
        firstName: 'Andy', 
        lastName: 'Sterkowitz', 
        phone: '5551234567', 
        addressLine1: '123 Main St.', 
        addressLine2: 'Apt 1',
        city: 'Chicago',
        state: 'Illinois',
        country: 'USA'
      }
    ]
  }

  render() {
    return (
      <div>
        <NewContactForm />
        <ContactsTable contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
