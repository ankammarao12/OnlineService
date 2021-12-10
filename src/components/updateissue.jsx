import React, { Component } from "react";
import axios from "axios";

class UpdateIssue extends React.Component {
  state = {
    issue: {
      
      description: "",
      issueStatus: "",
      issueType: "",
     
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8181/api/modifyCustomerIssue/${this.props.match.params.issueId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ issue: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
   

    // copy state issue object to local variable issue
    const issue = { ...this.state.issue };

    // update local issue object with values entered by user
    issue[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ issue: issue });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .put(
        `http://localhost:8181/api/modifyCustomerIssue/${this.props.match.params.issueId}`,
        this.state.issue
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated issue " + this.state.issue.description + " successfully!"
        );
        this.props.history.push("/issue");
      })
      .catch((err) => console.log(err));
  };
  render() {
    // Object Destructuring
    const {  description, issueStatus, issueType } = this.state.issue;

    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              aria-describedby="emailHelp"
              value={description}
              name="description"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="issueStatus" className="form-label">
            issueStatus
            </label>
            <input
              type="text"
              className="form-control"
              id="issueStatus"
              aria-describedby="emailHelp"
              value={issueStatus}
              name="issueStatus"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="issueType" className="form-label">
            issueType
            </label>
            <input
              type="text"
              className="form-control"
              id="issueType"
              aria-describedby="emailHelp"
              value={issueType}
              name="issueType"
              onChange={this.handleChange}
            />
          </div>
         
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateIssue;