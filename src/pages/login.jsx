import "./login.css";
import Axios from "axios";
import React from "react";
import Cookies from "js-cookie";
import "font-awesome/css/font-awesome.min.css";
import { Helmet } from "react-helmet";

class Login extends React.Component {
  ButtonClick = async () => {
    const mediaQuery = window.matchMedia("( min-width: 800px ) and ( max-width: 1920px )");
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/login",
      method: "post",
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    };

    Axios(DataPassing)
      .then((res) => {
        if (mediaQuery.matches) {
          console.log("Media Query Matched!");
        }
        if (res.data.status === 200) {
          Cookies.set("AuthToken", res.data.token, { expires: 1 });
          this.props.history.push("/");
          console.log(res.data);
        } else {
          this.props.history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="logincontainer">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Login to play" />
        </Helmet>
        <div className="login">
          <div className="avatar">
            <i className="fa fa-gamepad" style={{ fontSize: "52px" }}></i>
          </div>
          <div className="content"></div>
          <h2>Login Game</h2>
          <div className="box-login">
            <i className="fa fa-user-secret" style={{ fontSize: "40px", color: "rgb(0, 0, 0)" }} />
            <input type="text" name="emailaddress" id="email" placeholder="Email Address" />
          </div>

          <div className="box-login">
            <i className="fa fa-lock" style={{ fontSize: "45px", color: "rgb(0, 0, 0)" }} />
            <input type="password" name="password" id="password" placeholder="Password" />
          </div>

          {/* <div className="button2"> */}
          <button className="button2" type="submit" onClick={this.ButtonClick}>
            LOGIN
          </button>
          {/* </div> */}
          <div className="bottom">
            <a href="../changePassword">Change Password</a>
            <a href="../register">Register</a>
            {/* <a href="../login/password.html">Change Password</a>
                <a href="../login/register.html">Register</a> */}
          </div>
        </div>
      </div>
      // <div class="login">
      //   <div class="avatar">
      //     <i class="fas fa-gamepad" style={{ fontSize: "52px" }}></i>
      //   </div>
      //   <div class="content"></div>

      //   <h2>Login Game</h2>
      //   <div class="box-login">
      //     <i class="fas fa-user-secret" style={{ fontSize: "32px", color: "rgb(0, 0, 0)" }} />
      //     <input type="text" name="emailaddress" id="email" placeholder="Email Address" />
      //   </div>

      //   <div class="box-login">
      //     <i class="fa fa-lock" style={{ fontSize: "32px", color: "rgb(0, 0, 0)" }} />
      //     <input type="password" name="password" id="password" placeholder="Password" />
      //   </div>

      //   <div class="button">
      //     <button type="submit" onClick={this.ButtonClick}>
      //       LOGIN
      //     </button>
      //   </div>
      //   <div class="bottom">
      //     <a href="../changePassword">Change Password</a>
      //     <a href="../register">Register</a>
      //     {/* <a href="../login/password.html">Change Password</a>
      //               <a href="../login/register.html">Register</a> */}
      //   </div>
      // </div>
    );
  }
}

export default Login;
