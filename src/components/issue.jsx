import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Issue extends React.Component {
  state = {
    issue: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8181/api/getallIssues/call")
      .then((res) => {
        console.log(res);
        this.setState({ issue: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (issue) => {
    axios
      .delete(`http://localhost:8181/api/closeCustomerIssue/${issue}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const issue = this.state.issue.filter((s) => s.issue != issue);
        this.setState({ issue: issue });
        // alert(res.data.issueType+ " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <Link to="/issue/add" className="btn btn-info float-end">
          Add
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>IssueId</th>
              <th>Description</th>
              <th>IssueStatus</th>
              <th>IssueType</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.issue.map((s) => (
              <tr>
                <td>{s.issueId}</td>
                <td>{s.description}</td>
                <td>{s.issueStatus}</td>
                <td>{s.issueType}</td>

                <td>
                  <Link
                    to={`/issue/update/${s.issueId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(s.issueType)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Issue;
