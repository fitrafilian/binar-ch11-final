import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { firstName, lastName, email, password } = this.state;

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(data);

    axios.put(`https://binarch9wave12.herokuapp.com/api/admin/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Update Succesccfully");
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          // password: "",
        });
      }
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`https://binarch9wave12.herokuapp.com/api/admin/update/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          firstName: res.data.post.firstName,
          lastName: res.data.post.lastName,
          email: res.data.post.email,
          // password: res.data.post.password,
        });
        console.log(this.state.post);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <Helmet>
          <title>Edit Player Data</title>
          <meta name="description" content="Manage player data" />
        </Helmet>
        <h1 className="h3 mb-3 font-weight-normal">Edit post</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="Enter First Name"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>lastName</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Enter lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          {/* <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Password</label>
            <input type="text" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleInputChange} />
          </div> */}

          <button className="btn btn-success" type="submit" style={{ margin: "15px" }} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
        </form>
      </div>
    );
  }
}
