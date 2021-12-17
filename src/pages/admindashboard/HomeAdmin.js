import React, { Component } from "react";
import axios from "axios";
// import { post } from '../../../routes/posts';
import { Helmet } from "react-helmet";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("https://binarch9wave12.herokuapp.com/api/admin/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`https://binarch9wave12.herokuapp.com/api/admin/post/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    });
  };

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.firstName.toLowerCase().includes(searchKey) ||
        post.lastName.toLowerCase().includes(searchKey) ||
        post.email.toLowerCase().includes(searchKey) ||
        post.password.toLowerCase().includes(searchKey)
    );

    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("https://binarch9wave12.herokuapp.com/api/admin/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Dashboard Admin</title>
          <meta name="description" content="Dashboard admin" />
        </Helmet>
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All Posts</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table table-hover" style={{ marginTop: "40px" }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Password</th> */}
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href={`/admin/post/${posts._id}`} style={{ textDecoration: "none" }}>
                    {posts.firstName}
                  </a>
                </td>
                <td>{posts.lastName}</td>
                <td>{posts.email}</td>
                {/* <td>{posts.password}</td> */}
                <td>
                  <a className="btn btn-warning" href={`/admin/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a href="/admin/add" style={{ textDecoration: "none", color: "white" }}>
            create new post
          </a>
        </button>
      </div>
    );
  }
}
