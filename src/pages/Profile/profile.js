import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import styles from "./style.module.css";
import "./styles.css";
import Axios from "axios";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import { Helmet } from "react-helmet";

const mapStateToProps = (state) => {
  return {
    StoreData: state,
  };
};

const mapdispatchToStore = (dispatch) => {
  return {
    ChangeLoginStatus: () => {
      dispatch({
        type: "CHANGE_LOGIN_STATUS",
        value: true,
      });
    },
    ChangeUserData: (NewValue) => {
      dispatch({
        type: "CHANGE_USER_DATA",
        value: NewValue,
      });
    },
  };
};

class Profile extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.log(this.props);
    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/profile",
      // url: "http://localhost:5000/api/profile",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // Authorization: Cookies.get("AuthToken"),
        Authorization: this.props.StoreData.UserReducer.UserData,
      },
    };
    Axios(DataPassing)
      .then((response) => {
        this.setState({
          user: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    // console.log(this.state.user);
  }

  ButtonClick = async (props) => {
    const firstName = document.querySelector("#firstname").value;
    const lastName = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const bio = document.querySelector("#bio").value;

    const DataPassingUpdate = {
      url: "https://binarch9wave12.herokuapp.com/api/updateProfile",
      // url: "http://localhost:5000/api/updateProfile",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        bio: bio,
      }),
    };
    Axios(DataPassingUpdate)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
    console.log("tes");
  };

  onTodoChange(firstName, lastName, phone, bio) {
    this.setState({
      user: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        bio: bio,
      },
    });
  }

  render() {
    return (
      <div className="homeContainer" style={{ overflow: "auto !important" }}>
        <Helmet>
          <title>Profile</title>
          <meta name="description" content="Fill your data" />
        </Helmet>
        <div>
          <form>
            <div className={styles.body__wrap}>
              {/* FORM 1 */}
              <div className={styles.body}>
                <div className="d-flex justify-content-between">
                  <h4 className={styles.heading}>Personal Information</h4>
                  <div>
                    <a href="/" className="btn btn-warning me-2 mt-2">
                      Homepage
                    </a>
                    <a href="/profile/score" className="btn btn-warning me-2 mt-2">
                      Player Score
                    </a>
                  </div>
                </div>
                <div className={styles.wrap__input}>
                  <label htmlFor="firstname" className={styles.label}>
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={this.state.user === null ? null : this.state.user.firstName}
                    className={styles.input__styles}
                    onChange={(e) => this.onTodoChange(e.target.level)}
                    alt=""
                  />
                </div>
                <div className={styles.wrap__input}>
                  <label htmlFor="lastname" className={styles.label}>
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={this.state.user === null ? null : this.state.user.lastName}
                    className={styles.input__styles}
                    onChange={(e) => this.onTodoChange(e.target.level)}
                  />
                </div>
                <div className={styles.wrap__input}>
                  <label htmlFor="email" className={styles.label}>
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={this.state.user === null ? null : this.state.user.email}
                    className={styles.input__styles}
                    onChange={(e) => this.onTodoChange(e.target.level)}
                    disabled="disabled"
                  />
                </div>{" "}
                <div className={styles.wrap__input}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={this.state.user === null ? null : this.state.user.phone}
                    className={styles.input__styles}
                    onChange={(e) => this.onTodoChange(e.target.level)}
                  />
                </div>
                <div className={styles.wrap__input}>
                  <label htmlFor="bio" className={styles.label}>
                    Bio:
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    value={this.state.user === null ? null : this.state.user.bio}
                    onChange={(e) => this.onTodoChange(e.target.level)}
                    className={styles.input__styles}
                  />
                </div>
              </div>
              <div className={styles.body}>
                <div style={{ textAlign: "center" }} className={styles.wrap__input}>
                  <button type="submit" className={styles.button} onClick={this.ButtonClick}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapdispatchToStore)(Profile);
