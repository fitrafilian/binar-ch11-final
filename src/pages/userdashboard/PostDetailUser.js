import React, { Component } from "react";
import axios from "axios";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`https://binarch9wave12.herokuapp.com/api/post/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
        console.log(this.state.post);
      }
    });
  }
  render() {
    const { firstName, lastName, email } = this.state.post;
    return (
      <div style={{ marginTop: "20px" }}>
        <h4>{firstName}</h4>
        <hr />

        <dl className="row">
          <dt className="col-sm-3">First Name :</dt>
          <dd className="col-sm-9">{firstName}</dd>

          <dt className="col-sm-3">Last Name :</dt>
          <dd className="col-sm-9">{lastName}</dd>

          <dt className="col-sm-3">Email :</dt>
          <dd className="col-sm-9">{email}</dd>
        </dl>
      </div>
    );
  }
}
