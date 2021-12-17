import { Container, Row, Col } from "react-bootstrap";
import "./player1.css";
import React from "react";
import Axios from "axios";
import logo from "./logo 1.png";
import paper from "./paper.png";
import rock from "./rock.png";
import scissor from "./scissor.png";
import refresh from "./refresh.png";
import back from "./back.png";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import { Helmet } from "react-helmet";

class Player1 extends React.Component {
  state = {
    Token: Cookies.get("AuthToken"),
    userdata: null,
    roomID: null,
    disabled: false,
    match: null,
  };

  constructor(props) {
    super(props);
    var loginStatus;
    if (this.state.Token) {
      loginStatus = true;
    } else {
      loginStatus = false;
    }

    if (!loginStatus) {
      window.location.href = "/login";
    }
  }

  componentDidMount() {
    const roomSection = document.querySelector(".main-wrapper .main1 .roomID");
    const roomID = Math.floor(100000 + Math.random() * 900000);

    if (roomID) {
      this.setState({ roomID: roomID });
      roomSection.innerHTML = "Room ID: " + roomID;
    }
    console.log(this.state.match);
  }

  async componentDidUpdate() {
    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/multiplier/result",
      // url: "http://localhost:5000/api/multiplier/result",
      method: "post",
      data: {
        roomID: this.state.roomID,
      },
    };
    console.log(DataPassing);
    await Axios(DataPassing)
      .then((res) => {
        this.setState({
          match: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  ButtonClick = () => {
    this.props.history.push("/");
  };

  RockClick = async () => {
    const box = function (element) {
      // element.addEventListener("mouseout", function () {
      //   element.style.backgroundColor = "#c4c4c4";
      // });
      element.style.backgroundColor = "#c4c4c4";
      element.style.borderRadius = "10px";
      element.style.width = "100px";
      element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
    };

    const Rock = document.querySelector("#rock");
    const Paper = document.querySelector("#paper");
    const Scissor = document.querySelector("#scissor");
    box(Rock);
    this.setState({
      disabled: true,
    });

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/multiplier/player1",
      // url: "http://localhost:5000/api/multiplier/player1",
      method: "post",
      data: {
        token: this.state.Token,
        roomID: this.state.roomID,
        userNumber: "user1",
        choose: "rock",
      },
    };
    console.log(DataPassing);
    Axios(DataPassing)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  PaperClick = async () => {
    const box = function (element) {
      // element.addEventListener("mouseout", function () {
      //   element.style.backgroundColor = "#c4c4c4";
      // });
      element.style.backgroundColor = "#c4c4c4";
      element.style.borderRadius = "10px";
      element.style.width = "100px";
      element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
    };

    const Rock = document.querySelector("#rock");
    const Paper = document.querySelector("#paper");
    const Scissor = document.querySelector("#scissor");
    box(Paper);
    this.setState({
      disabled: true,
    });

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/multiplier/player1",
      // url: "http://localhost:5000/api/multiplier/player1",
      method: "post",
      data: {
        token: this.state.Token,
        roomID: this.state.roomID,
        userNumber: "user1",
        choose: "paper",
      },
    };
    console.log(DataPassing);
    Axios(DataPassing)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  ScissorClick = async () => {
    const box = function (element) {
      // element.addEventListener("mouseout", function () {
      //   element.style.backgroundColor = "#c4c4c4";
      // });
      element.style.backgroundColor = "#c4c4c4";
      element.style.borderRadius = "10px";
      element.style.width = "100px";
      element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
    };

    const Rock = document.querySelector("#rock");
    const Paper = document.querySelector("#paper");
    const Scissor = document.querySelector("#scissor");
    box(Scissor);
    this.setState({
      disabled: true,
    });

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/multiplier/player1",
      // url: "http://localhost:5000/api/multiplier/player1",
      method: "post",
      data: {
        token: this.state.Token,
        roomID: this.state.roomID,
        userNumber: "user1",
        choose: "scissor",
      },
    };
    console.log(DataPassing);
    Axios(DataPassing)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  Rematch = async () => {
    window.location.reload();
  };

  render() {
    return (
      <main>
        <Helmet>
          <title>Multiplier Mode</title>
          <meta name="description" content="Play with your friend" />
        </Helmet>
        <div className="nav">
          <div className="container wrapper">
            <div className="back-wrapper d-flex justify-content-center align-items-center">
              <div id="submit">
                <input type="hidden" name="playerScore" id="playerScore" value={{}}></input>
                <input type="hidden" name="computerScore" id="computerScore" value={{}}></input>
                <input type="hidden" name="result" id="result" value={{}}></input>
                <button
                  type="submit"
                  style={{ backgroundColor: "transparent", border: "transparent" }}
                  onClick={this.ButtonClick}
                >
                  <img src={back} class="back_games" onClick={this.ButtonClick} />
                </button>
              </div>
            </div>
            <img src={logo} alt="Logo" className="logo" />
            <span>ROCK PAPER SCISSOR MULTIPLIER</span>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="main1">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                {/* <div className="wrap-score d-flex justify-content-center align-items-center" style={{}}>
                  <span className="player-score d-inline-block">0</span>
                </div> */}
                <div
                  className="justify-content-center align-items-center"
                  id="player"
                  align="center"
                  style={{ marginTop: "30px" }}
                >
                  <p className="text-center roomID"></p>
                  <div>
                    <p className="text-center m-0">You are Player 1</p>
                    <p className="text-center m-0">Choose one...</p>
                    <div style={{ width: "100px", margin: "40px", display: "inline-block" }}>
                      <button
                        className="box box-rock box-hover"
                        id="rock"
                        onClick={this.RockClick}
                        disabled={this.state.disabled}
                      >
                        <img src={rock} alt="rock" className="rock" />
                      </button>
                    </div>
                    <div style={{ width: "100px", margin: "40px", display: "inline-block" }}>
                      <button
                        className="box box-paper box-hover"
                        id="paper"
                        onClick={this.PaperClick}
                        disabled={this.state.disabled}
                      >
                        <img src={paper} alt="paper" className="paper" />
                      </button>
                    </div>
                    <div style={{ width: "100px", margin: "40px", display: "inline-block" }}>
                      <button
                        className="box box-scissor box-hover"
                        id="scissor"
                        onClick={this.ScissorClick}
                        disabled={this.state.disabled}
                      >
                        <img src={scissor} alt="scissor" className="scissor" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="d-flex justify-content-center align-items-center m-auto">
                <div className="result">
                  {this.state.match === null ? null : this.state.match.message === "data not found" ? null : (
                    <>
                      <p>
                        Player two choose {this.state.match === null ? null : this.state.match.match.choose2 + ". "}
                        {this.state.match === null
                          ? null
                          : this.state.match.match.resultUser1 === "DRAW"
                          ? "Match " + this.state.match.match.resultUser1
                          : "You " + this.state.match.match.resultUser1}
                        !
                      </p>
                      <button className="btn btn-warning" onClick={this.Rematch}>
                        Rematch
                      </button>
                    </>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Player1;
