import React from "react";
import "./Card.css";

const Card = ({overskrift, innhold}) => {
  return (
    <div className="card">
      <h2>{overskrift}</h2>
      <p>{innhold}</p>
    </div>
  );
};

export default Card;
