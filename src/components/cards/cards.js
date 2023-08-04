// Card.js
import React from "react";
import { Link } from "react-router-dom";
import "./cards.scss";

export default function Card({ id, title, image}) {

  return (
    <Link to={`/location/${id}`}>
            <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(180deg, #fde8e80a 20%, #00000080 100%), url(${image})`,
        }}
      >
      <h1>{title}</h1>
      </div>
    </Link>
  );
}