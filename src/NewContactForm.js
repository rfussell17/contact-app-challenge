import React, { Component } from "react";

class NewContactForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="pb-5">
        <div class="row">
          <div class="col-sm">
            <div className="form-group">
              <label for="first-name">First Name</label>
              <input id="first-name" type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm">
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>Email</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="form-group">
              <label>Address Line 1</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="col-md">
            <div className="form-group">
              <label>Address Line 2</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <label>City</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label>State</label>
              <input type="text" class="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" class="form-control" />
        </div>
        <div className="form-group">
          <label>Notes</label>
          <input type="textarea" class="form-control" />
        </div>
        <button className="btn btn-lg btn-primary float-right" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default NewContactForm;
