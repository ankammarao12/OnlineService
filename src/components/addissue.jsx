import axios from "axios";
import React, { Component } from "react";

class AddIssue extends React.Component {
  state = {
    issue: {
      description: "",
      issueId: "",
      issueStatus: "",
      issueType: "",
    },
  };
componentDidMount(){
    console.log("addissue");
}
  handleChange = (event) => {
    // copy state operator object to local variable issue
    const issue = { ...this.state.issue };
    // update local issue object with values entered by user
    issue[event.target.name] = event.target.value;
    // update state object using setState method
    this.setState({ issue: issue });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .post("http://localhost:8181/api/addCustomerIssue", this.state.issue)
      .then((res) => {
        console.log(res.data);
        alert("Added issue " + this.state.issue.issueId + " successfully!");
        this.props.history.push("/issue");
      })
      .catch((err) => console.log(err));
  };

  render() {
    // Object Destructuring
    const { issueId, description, issueStatus, issueType } = this.state.issue;

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
            <label htmlFor="issueType" className="form-label">
              IssueType
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
          <div className="mb-3">
            <label htmlFor="issueId" className="form-label">
              IssueId
            </label>
            <input
              type="number"
              className="form-control"
              id="issueId"
              aria-describedby="emailHelp"
              value={issueId}
              name="issueId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="issueStatus" className="form-label">
              IssueStatus
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
export default AddIssue;
