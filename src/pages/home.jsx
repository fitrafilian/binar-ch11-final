import Navbar from "../components/navbar/navbar";
import GameChoice from "../components/game_choice/game_choice";
import GameReq from "../components/game_req/game_req";
import TopScore from "../components/top_score/top_score";
import Footer from "../components/footer/footer";
import React from "react";
import { Helmet } from "react-helmet";

import "./home.css";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Traditional Game</title>
        <meta name="description" content="Play Traditional Game" />
      </Helmet>
      <div id="header">
        <Navbar />
        {/* <div className="card">
              <div className="card-body">
                <h1 className="card-title" id="title-header">
                  PLAY TRADITIONAL GAME
                </h1>
                <h3 className="card-text" id="text-header">
                  Experience new traditional gameplay
                </h3>
                <a href="/games" className="btn btn-warning" id="btn-header">
                  TRY
                </a>
                <p className="card-text" id="text-header2">
                  THE STORY
                </p>
                <a href="#game-choice">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.25px"
                    height="18.17px"
                    fill="#fff"
                    className="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                  </svg>
                </a>
              </div>
            </div> */}
        <div className="card text-center bg-transparent">
          <div className="card-body">
            <h5 className="card-title" id="title1">
              PLAY TRADITIONAL GAME
            </h5>
            <h5 className="card-title" id="title2">
              Experience new traditional gameplay
            </h5>
            <a
              // href="/games"
              className="btn btn-warning mx-2"
              id="btn-header"
              data-toggle="modal"
              data-target="#GameMode"
            >
              PLAY GAME
            </a>
            <div
              className="modal fade in"
              id="GameMode"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              data-show="true"
              data-backdrop="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <p className="fw-bold">Choose Game Mode</p>
                    <a href="/games" className="btn btn-warning mx-2">
                      Single Player
                    </a>
                    <button
                      className="btn btn-warning mx-2"
                      data-toggle="modal"
                      data-target="#Multiplier"
                      data-bs-dismiss="modal"
                      // data-bs-toggle="modal"
                      aria-label="Close"
                    >
                      Multiplier
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade in"
              id="Multiplier"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
              data-show="true"
              data-backdrop="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <p className="fw-bold">Choose Room</p>
                    <a href="/multiplier/player1" className="btn btn-warning mx-2">
                      Create Room
                    </a>
                    <a href="/multiplier/player2" className="btn btn-warning mx-2">
                      Join Room
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="card-text" id="text-header2">
              THE STORY
            </p>
            <a href="GameChoice">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.25px"
                height="18.17px"
                fill="#fff"
                className="bi bi-caret-down"
                viewBox="0 0 16 16"
              >
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </a>
          </div>
        </div>

        {/* <div className="col d-flex justify-content-center">
          <div className="card text-center bg-transparent">
            <div className="card-body">
              <h1 className="card-title" id="title-header">
                PLAY TRADITIONAL GAME
              </h1>
              <h3 className="card-text" id="text-header">
                Experience new traditional gameplay
              </h3>
              <a href="/games" className="btn btn-warning" id="btn-header">
                TRY
              </a>
              <p className="card-text" id="text-header2">
                THE STORY
              </p>
              <a href="#game-choice">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.25px"
                  height="18.17px"
                  fill="#fff"
                  className="bi bi-caret-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <GameChoice />
      <GameReq />
      <TopScore />
      <Footer />
    </div>
  );
}
