import React, { useEffect, useState } from 'react'
import Axios from "axios";
import Cookies from "js-cookie";

import "./game_history.css"

const GameHistory = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
      const DataPassing = {
        url: "https://binarch9wave12.herokuapp.com/api/userScore",
        // url: "http://localhost:5000/api/userScore",
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: Cookies.get("AuthToken"),
        },
      };
      Axios(DataPassing)
        .then((response) => {
          console.log(response);
          setScores(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
        <div className="game-history">
            <form>
                <div className="body__wrap">
                    <div className="body">
                    <div className="d-flex justify-content-center">
                        <h4 className="heading">Player's Score</h4>
                    </div>
                    <div>
                        <table className="table table-hover mt-2">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Date</th>
                            <th scope="col">Player's Score</th>
                            <th scope="col">Computer's Score</th>
                            <th scope="col">Win/Lose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scores.map((score, i) => {
                            i++;
                            return (
                                <tr key={i}>
                                    <th scope="row">{i++}</th>
                                    <td>{score.date.toLocaleString()}</td>
                                    <td>{score.pScore}</td>
                                    <td>{score.cScore}</td>
                                    <td>{score.result}</td>
                                </tr>
                            );

                            })}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default GameHistory
