import React, { Component } from "react";

class NewContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="pb-5">
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
            <label htmlFor="email">Email</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="form-group">
            <label htmlFor="address-line-1">Address Line 1</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md">
            <div className="form-group">
            <label htmlFor="address-line-2">Address Line 2</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
            <label htmlFor="city">City</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
            <label htmlFor="state">State</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
        <label htmlFor="country">Country</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
        <label htmlFor="notes">Notes</label>
          <input type="textarea" className="form-control" />
        </div>
        <button className="btn btn-lg btn-primary float-right" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NewContactForm;
