import React, { useState } from "react";

import styles from "./style.module.css";
import "./styles.css";
import Axios from "axios";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import ScoreCard from "./ScoreCard/ScoreCard";
import { Helmet } from "react-helmet";

// class Profile extends React.Component {
//   state = {
//     scores: null,
//   };

//   componentDidMount() {
//     const DataPassing = {
//       // url: "https://binarch9wave12.herokuapp.com/api/profile",
//       url: "http://localhost:5000/api/userScore",
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: Cookies.get("AuthToken"),
//       },
//     };
//     Axios(DataPassing)
//       .then((response) => {
//         this.setState({
//           scores: response.data.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     // console.log(this.state.scores);
//   }

//   componentDidUpdate() {
//     console.log(this.state.scores);
//   }

//   render() {
//     return (
//       <div className="homeContainer" style={{ overflow: "auto !important" }}>
//         <div>
//           <form>
//             <div className={styles.body__wrap}>
//               <div className={styles.body}>
//                 <div className="d-flex justify-content-between">
//                   <h4 className={styles.heading}>Player's Score</h4>
//                   <a href="/profile/score" className="btn btn-warning me-2 mt-2">
//                     Player Score
//                   </a>
//                 </div>
//                 <div>
//                   <table className="table table-hover mt-2">
//                     <thead>
//                       <tr>
//                         <th scope="col">No.</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Player's Score</th>
//                         <th scope="col">Computer's Score</th>
//                         <th scope="col">Win/Lose</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {this.state.scores.map((score, i) => {
//                         return (
//                           <ScoreCard
//                             key={i}
//                             date={score.date}
//                             pScore={score.pScore}
//                             cScore={score.cScore}
//                             result={score.result}
//                           />
//                         );
//                       })}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;

import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect, useSelector } from "react-redux";

const Score = () => {
  const storeData = useSelector((state) => state);
  console.log(storeData);

  const [scores, setScores] = useState([]);
  useEffect(() => {
    const DataPassing = {
      url: "https://binarch9wave12.herokuapp.com/api/userScore",
      // url: "http://localhost:5000/api/userScore",
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // Authorization: Cookies.get("AuthToken"),
        Authorization: storeData.UserReducer.UserData,
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
  });

  return (
    <div className="homeContainer" style={{ overflow: "auto !important" }}>
      <Helmet>
        <title>Your Match History</title>
        <meta name="description" content="Match history" />
      </Helmet>
      <div>
        <form>
          <div className={styles.body__wrap}>
            <div className={styles.body}>
              <div className="d-flex justify-content-between">
                <h4 className={styles.heading}>Player's Score</h4>
                <a href="/profile" className="btn btn-warning me-2 mt-2">
                  Profile
                </a>
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
                        <ScoreCard
                          key={i}
                          number={i++}
                          date={score.date}
                          pScore={score.pScore}
                          cScore={score.cScore}
                          result={score.result}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Score;
