import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
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

class Games extends React.Component {
  state = {
    Token: Cookies.get("AuthToken"),
    userdata: null,
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
    if (this.state.Token) {
      this.setState({ userdata: jwt(this.state.Token) });
    }

    const playerRock = document.querySelector("#player .box-rock"),
      playerPaper = document.querySelector("#player .box-paper"),
      playerScissor = document.querySelector("#player .box-scissor"),
      computerRock = document.querySelector("#computer .box-rock"),
      computerPaper = document.querySelector("#computer .box-paper"),
      computerScissor = document.querySelector("#computer .box-scissor"),
      panel = document.querySelector(".panel"),
      boxes = document.querySelectorAll("#player button"),
      boxesComputer = document.querySelectorAll("#computer .box"),
      refresh = document.querySelector(".refresh"),
      playerScore = document.querySelectorAll(".player-score"),
      computerScore = document.querySelectorAll(".computer-score");

    let pScore = 0;
    let cScore = 0;
    let result = undefined;

    // Start
    const start = function () {
      // Initial condition
      // panel.style.color = "#bd0000";

      for (let i = 0; i < 3; i++) {
        boxes[i].classList.add("box-hover");
        boxes[i].classList.add("box-active");
        // boxes[i].classList.toggle("box-style");
      }

      refresh.classList.add("box-hover");
      refresh.classList.add("box-active");
      refresh.classList.add("box");
      // End of initial condition

      // function to get computer's choice
      const getComputer = function () {
        const comp = Math.floor(Math.random() * 3) + 1;
        if (comp === 1) {
          return "rock";
        } else if (comp === 2) {
          return "paper";
        } else {
          return "scissor";
        }
      };
      // end of computer's choice function

      // Rules
      const draw = "draw",
        playerWin = "you<br>win",
        computerWin = "com<br>win";

      const rules = function (comp, player) {
        if (comp === player) {
          return draw;
        } else if (player === "rock" && comp === "scissor") {
          return playerWin;
        } else if (player === "paper" && comp === "rock") {
          return playerWin;
        } else if (player === "scissor" && comp === "paper") {
          return playerWin;
        } else {
          return computerWin;
        }
      };
      // end of rules

      // function to make boxes
      const box = function (element) {
        // element.addEventListener("mouseout", function () {
        //   element.style.backgroundColor = "#c4c4c4";
        // });
        element.style.backgroundColor = "#c4c4c4";
        element.style.borderRadius = "10px";
        element.style.width = "100px";
        element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
      };

      // function to unbox
      const unbox = function (element) {
        element.style.removeProperty("box-shadow");
        element.style.removeProperty("background-color");
        element.style.removeProperty("border-radius");
      };
      // end of boxes function

      // Rolling
      function rolling() {
        const listClass = ["rock", "paper", "scissor"];
        let i = 0;
        const startTime = new Date().getTime();

        setInterval(function () {
          if (new Date().getTime() - startTime > 1200) {
            return;
          }

          const computerChoice = document.querySelector("#computer .box-" + listClass[i++]);
          if (i === listClass.length) i = 0;

          setTimeout(() => {
            box(computerChoice);
          }, 100);

          unbox(computerChoice);
        }, 100);
      }

      // Engine
      boxes.forEach(function (i) {
        i.addEventListener("click", function () {
          const computer = getComputer();
          const player = i.querySelector("img").className;
          const generate = rules(computer, player);

          // image player
          box(i);

          playerRock.setAttribute("disabled", true);
          playerPaper.setAttribute("disabled", true);
          playerScissor.setAttribute("disabled", true);

          // Rolling effect
          rolling();

          setTimeout(() => {
            //   image computer
            boxesComputer.forEach(function (i) {
              i.style.removeProperty("box-shadow");
              i.style.removeProperty("background-color");
              i.style.removeProperty("border-radius");
            });

            var lockedComputer = NaN;
            lockedComputer = document.querySelector("#computer .box-" + computer);
            box(lockedComputer);

            setTimeout(() => {
              // panel
              panel.style.color = "white";
              // panel.style.backgroundColor = "#4C9654";
              panel.style.fontSize = "30px";
              panel.style.transform = "rotate(-28.87deg)";
              panel.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";

              if (generate === playerWin) {
                panel.innerHTML = playerWin;
                panel.style.backgroundColor = "#4C9654";
                pScore += 1;
                playerScore.forEach((e) => {
                  e.innerHTML = pScore;
                });
              } else if (generate === computerWin) {
                panel.innerHTML = computerWin;
                panel.style.backgroundColor = "#bd0000";
                cScore += 1;
                computerScore.forEach((e) => {
                  e.innerHTML = cScore;
                });
              } else {
                panel.innerHTML = draw;
                panel.style.backgroundColor = "#ffae42";
              }
              if (pScore > cScore) {
                result = "Win";
              } else if (pScore < cScore) {
                result = "Lose";
              } else if (pScore === cScore) {
                result = "Draw";
              }
              document.getElementById("playerScore").value = pScore;
              document.getElementById("computerScore").value = cScore;
              document.getElementById("result").value = result;
            }, 0);
          }, 1300);
        });
      });
      // end of engine
    };

    start();

    refresh.addEventListener("click", function () {
      boxes.forEach(function (i) {
        i.style.removeProperty("box-shadow");
        i.style.removeProperty("background-color");
      });

      // Reset computer's boxes
      boxesComputer.forEach(function (i) {
        i.style.removeProperty("box-shadow");
        i.style.removeProperty("background-color");
        i.style.removeProperty("border-radius");
      });

      // Reset panel's boxes
      panel.style.removeProperty("box-shadow");
      panel.style.removeProperty("background-color");
      panel.style.removeProperty("transform");
      // panel.style.fontSize = "100px";
      panel.innerHTML = "VS";
      panel.style.color = "#bd0000";

      // Panel Responsiveness
      const media768 = window.matchMedia("(min-width: 768px)");
      const media540 = window.matchMedia("(min-width: 540px)");
      function initialPanelResponsiveness() {
        if (media768.matches) {
          panel.style.fontSize = "100px";
        } else if (media540.matches) {
          panel.style.fontSize = "76px";
        } else {
          panel.style.fontSize = "54px";
        }
      }

      initialPanelResponsiveness();

      // Block clicks
      playerRock.removeAttribute("disabled");
      playerPaper.removeAttribute("disabled");
      playerScissor.removeAttribute("disabled");
      // start();
    });
  }

  componentDidUpdate() {
    const playerScore = document.querySelector("#playerScore").value;
    const computerScore = document.querySelector("#computerScore").value;
    const result = document.querySelector("#result").value;
    console.log(playerScore);
    console.log(computerScore);
    console.log(result);
  }

  ButtonClick = async () => {
    const playerScore = document.querySelector("#playerScore").value;
    const computerScore = document.querySelector("#computerScore").value;
    const result = document.querySelector("#result").value;

    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/postScore",
      // url: "http://localhost:5000/api/postScore",
      method: "post",
      // withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        Authorization: Cookies.get("AuthToken"),
      },
      data: JSON.stringify({
        uid: this.state.userdata.uid,
        pScore: playerScore,
        cScore: computerScore,
        result: result,
      }),
    };

    Axios(DataPassing)
      .then(this.props.history.push("/"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <main>
        <Helmet>
          <title>Single Player Mode</title>
          <meta name="description" content="Train your skill with computer" />
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
            <span>ROCK PAPER SCISSOR</span>
          </div>
        </div>
        <div className="main-wrapper">
          <div className="main1">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="wrap-score d-flex justify-content-center align-items-center" style={{}}>
                  <span className="player-score d-inline-block">0</span>
                </div>
                <div
                  className="col col-sm-3 col-md-3 col-lg-3 flex-column justify-content-center"
                  id="player"
                  align="center"
                >
                  <p className="text-center">player</p>
                  <div>
                    <button className="box box-rock">
                      <img src={rock} alt="rock" className="rock" />
                    </button>
                  </div>
                  <div>
                    <button className="box box-paper">
                      <img src={paper} alt="paper" className="paper" />
                    </button>
                  </div>
                  <div>
                    <button className="box box-scissor">
                      <img src={scissor} alt="scissor" className="scissor" />
                    </button>
                  </div>
                </div>
                <div className="col col-sm-5 col-md-3 col-lg-3" align="center">
                  <div className="panel">vs</div>
                </div>
                <div
                  className="col col-sm-3 col-md-3 col-lg-3 flex-column justify-content-center computer"
                  id="computer"
                  align="center"
                >
                  <p className="text-center">computer</p>
                  <div className="box box-rock">
                    <img src={rock} alt="rock" className="rock" />
                  </div>
                  <div className="box box-paper">
                    <img src={paper} alt="paper" className="paper" />
                  </div>
                  <div className="box box-scissor">
                    <img src={scissor} alt="scissor" className="scissor" />
                  </div>
                </div>
                <div className="wrap-score d-flex justify-content-center align-items-center" style={{}}>
                  <span className="computer-score d-inline-block">0</span>
                </div>
              </div>
              <footer className="d-flex justify-content-center align-items-center m-auto">
                <div className="wrap-score-mini left d-flex justify-content-center align-items-center">
                  <div className="player-score d-flex justify-content-center align-items-center d-block">0</div>
                </div>
                <div className="row justify-content-center refresh">
                  <img src={refresh} alt="Refresh" />
                </div>
                <div className="wrap-score-mini right d-flex justify-content-center align-items-center">
                  <div className="computer-score d-flex justify-content-center align-items-center d-block">0</div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Games;
