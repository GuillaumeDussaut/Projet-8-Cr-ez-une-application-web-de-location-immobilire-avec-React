// Card.js
import React from "react";
import { Link } from "react-router-dom";
import "./cards.scss";

export default function Card(props) {
  const { id, title, image } = props;

  return (
    <Link to={`/location/${id}`}>
      <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
      </div>
    </Link>
  );
}



