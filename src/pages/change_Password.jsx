import "./change_password.css";
import Axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";

class ChangePassword extends React.Component {
  ButtonClick = async () => {
    const mediaQuery = window.matchMedia("( min-width: 800px ) and ( max-width: 1920px )");
    const email = document.querySelector("#email").value;
    const oldPassword = document.querySelector("#oldPassword").value;
    const newPassword = document.querySelector("#newPassword").value;

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/change-password",
      method: "put",
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        oldPassword,
        newPassword,
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
          this.props.history.push("/change-password");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="wrapper1">
        <Helmet>
          <title>Change Password</title>
          <meta name="description" content="Get your password back" />
        </Helmet>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
          <div className="container123 container">
            <div className="passform">
              <h2> Change Password </h2>
            </div>
            <div className="name1">
              <form>
                <div id="name1">
                  <h2 className="name1">Email</h2>
                  <input className="email1" id="email" type="text" name="email"></input>

                  <h2 className="name1">Old Password</h2>
                  <input className="oldpassword" id="oldPassword" type="password" name="old_password"></input>

                  <h2 className="name1">New Password</h2>
                  <input className="newpassword" id="newPassword" type="password" name="new_password"></input>

                  <div className="passbutton">
                    <button3 type="Submit" onClick={this.ButtonClick}>
                      Submit
                    </button3>
                  </div>

                  <div className="bottom3">
                    <a href="../login"> Login </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      // <div>
      //   <div className="box">
      //     <div className="square"></div>
      //     <div className="square"></div>
      //     <div className="square"></div>
      //     <div className="square"></div>
      //     <div className="square"></div>
      //     {/* <div className="square" style="--i:0;"></div>
      //     <div className="square" style="--i:1;"></div>
      //     <div className="square" style="--i:2;"></div>
      //     <div className="square" style="--i:3;"></div>
      //     <div className="square" style="--i:4;"></div> */}
      //     <div className="container">
      //       <div className="passform">
      //         <h2> Change Password </h2>
      //       </div>
      //       <div className="name">
      //         <div>
      //           <h2 className="name">Email</h2>
      //           <input className="email" id="email" type="text" name="email" />

      //           <h2 className="name">Old Password</h2>
      //           <input className="oldpassword" id="oldPassword" type="password" name="old_password" />

      //           <h2 className="name">New Password</h2>
      //           <input className="newpassword" id="newPassword" type="password" name="new_password" />

      //           <button type="Submit" onClick={this.ButtonClick}>
      //             Submit
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default ChangePassword;
