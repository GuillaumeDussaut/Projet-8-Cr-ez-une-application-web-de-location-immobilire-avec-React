import * as React from "react";
import './bandeau.scss';

export default function Bandeau({ imgURL, imgTXT }) {
  return (
    <div className="Bandeau">
      <img src={imgURL} alt="Bandeau" />
      <p className="Bandeau-text">{imgTXT}</p>
    </div>
  );
}