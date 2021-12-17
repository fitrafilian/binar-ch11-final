import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    // axios.get(`https://binarch9wave12.herokuapp.com/api/admin/post/${id}`).then((res) => {
    axios.get(`https://binarch9wave12.herokuapp.com/api/admin/posts/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
        console.log("test");
      }
    });
  }
  render() {
    const { firstName, lastName, email, password } = this.state.post;
    return (
      <div style={{ marginTop: "20px" }}>
        <Helmet>
          <title>Player detail</title>
          <meta name="description" content="Manage player" />
        </Helmet>
        <h4>{firstName}</h4>
        <hr />

        <dl className="row">
          <dt className="col-sm-3">First Name :</dt>
          <dd className="col-sm-9">{firstName}</dd>

          <dt className="col-sm-3">Last Name :</dt>
          <dd className="col-sm-9">{lastName}</dd>

          <dt className="col-sm-3">Email :</dt>
          <dd className="col-sm-9">{email}</dd>

          <dt className="col-sm-3">Password :</dt>
          <dd className="col-sm-9">{password}</dd>
        </dl>
      </div>
    );
  }
}
