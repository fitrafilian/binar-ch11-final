import React, { useState } from "react";

const ScoreCard = ({ number, date, pScore, cScore, result }) => {
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{date}</td>
      <td>{pScore}</td>
      <td>{cScore}</td>
      <td>{result}</td>
    </tr>
  );
};

export default ScoreCard;
