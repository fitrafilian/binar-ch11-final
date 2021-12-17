import { Link } from "react-router-dom";
import "./navbar.css";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import Axios from "axios";
import React from "react";

class Home extends React.Component {
  state = {
    Token: Cookies.get("AuthToken"),
    userdata: null,
  };

  componentDidMount() {
    if (this.state.Token) {
      this.setState({ userdata: jwt(this.state.Token) });
    }
  }

  ButtonClick = async (e) => {
    e.preventDefault();
    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/logout",
      method: "get",
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Credentials": true,
      },
    };

    Axios(DataPassing)
      .then((res) => {
        if (res.data.status === 200) {
          Cookies.remove("AuthToken");
          window.location.reload();
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">
          <a className="navbar-brand" href="/">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ color: "#fff!important" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-center" id="nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  ABOUT ME
                </a>
              </li>
            </ul>

            {this.state.userdata ? (
              <ul className="navbar-nav ms-auto" id="useraction">
                <li className="nav-item">
                  {/* <Link to="/dashboardPlayer/userProfile" className="nav-link link"> */}
                  <Link to="/profile" className="nav-link link">
                    PROFILE
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={this.ButtonClick}
                    className="nav-link link"
                    style={{ backgroundColor: "transparent" }}
                    href="#!"
                  >
                    LOGOUT
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto" id="useraction">
                <li className="nav-item">
                  <Link to="/register" className="nav-link link">
                    SIGN UP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link link">
                    LOGIN
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;

// export default function Navbar() {
//   const Token = Cookies.get("AuthToken");
//   var userdata;
//   if (Token) {
//     userdata = jwt(Token);
//   }
//   const ButtonClick = async () => {
//     const DataPassing = {
//       url: "https://binarch9wave12.herokuapp.com/api/logout",
//       method: "get",
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     Axios(DataPassing)
//       .then((res) => {
//         if (res.data.status === 200) {
//           this.props.history.push("/");
//           console.log(res.data);
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="menu">
//         <a className="navbar-brand" href="/">
//           LOGO
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" style={{ color: "#fff!important" }}></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav justify-content-center" id="nav-menu">
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 HOME
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 WORK
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 CONTACT
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">
//                 ABOUT ME
//               </a>
//             </li>
//           </ul>

//           {userdata ? (
//             <ul className="navbar-nav ms-auto" id="useraction">
//               <li className="nav-item">
//                 <Link to="/profile" className="nav-link link">
//                   PROFILE
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <button onClick={ButtonClick} className="nav-link link" style={{ backgroundColor: "transparent" }}>
//                   LOGOUT
//                 </button>
//               </li>
//             </ul>
//           ) : (
//             <ul className="navbar-nav ms-auto" id="useraction">
//               <li className="nav-item">
//                 <Link to="/register" className="nav-link link">
//                   SIGN UP
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link link">
//                   LOGIN
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// }
