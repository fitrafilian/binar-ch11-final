import "./register.css";
import Axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";

class Register extends React.Component {
  ButtonClick = async () => {
    const mediaQuery = window.matchMedia("( min-width: 800px ) and ( max-width: 1920px )");
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/register",
      method: "post",
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
      }),
    };

    Axios(DataPassing)
      .then((res) => {
        if (mediaQuery.matches) {
          console.log("Media Query Matched!");
        }
        if (res.data.status === 200) {
          this.props.history.push("/login");
          console.log(res.data);
        } else {
          this.props.history.push("/register");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="regcontainer">
        <Helmet>
          <title>Register</title>
          <meta name="description" content="Join us" />
        </Helmet>
        <div className="main">
          <div>
            <div class="regform">
              <h2> Register Account </h2>
            </div>
            <div id="name">
              <h2 className="name">Full Name</h2>
              <input className="firstname" id="firstname" type="text" name="full_name" />
              <br />
              <label className="firstlabel">First Name</label>
              <input className="lastname" id="lastname" type="text" name="last_name" />
              <label className="lastlabel">Last Name</label>
            </div>

            <h2 className="name">Email</h2>
            <input className="email" id="email" type="text" name="email" />

            <h2 className="name">Password</h2>
            <input className="password" id="password" type="password" name="password" />

            <h2 className="name">Confirm Password</h2>
            <input className="confirmpassword" id="confirmpassword" type="password" name="confirm_password" />

            {/* <h2 id="gender">User</h2>

                <label class="radio">
                    <input class="radio-one" type="radio" checked="checked" name="male" />
                    <span class="checkmark"></span>
                    Male
                </label>
                <label class="radio">
                    <input class="radio-two" type="radio" name="female" />
                    <span class="checkmark"></span>
                    Female
                </label> */}
            <div className="regbutton">
              <button1 type="Submit" onClick={this.ButtonClick}>
                Register
              </button1>
            </div>
            <div className="bottom2">
              <a href="../login"> Login </a>
            </div>
          </div>
        </div>
      </div>
      // <div class="main">
      //   <div id="name">
      //     <h2 class="name">Full Name</h2>
      //     <input class="firstname" id="firstname" type="text" name="full_name" />
      //     <br />
      //     <label class="firstlabel">First Name</label>
      //     <input class="lastname" id="lastname" type="text" name="last_name" />
      //     <label class="lastlabel">Last Name</label>
      //   </div>

      //   <h2 class="name">Email</h2>
      //   <input class="email" id="email" type="text" name="email" />

      //   <h2 class="name">Password</h2>
      //   <input class="password" id="password" type="password" name="password" />

      //   <h2 class="name">Confirm Password</h2>
      //   <input class="confirmpassword" id="confirmpassword" type="password" name="confirm_password" />

      //   <button type="Submit" onClick={this.ButtonClick}>
      //     Register
      //   </button>
      // </div>
    );
  }
}

export default Register;
