import * as React from "react";
import { useLocation } from "react-router-dom";

import imageAccueil from '../../assets/background1.png';
import imageApropos from '../../assets/background2.png';
import './bandeau.scss';

export default function Bandeau({imageURL, title}) {
  const location = useLocation();

  let image;
  let text;
  if (location.pathname === "/") {
    image = imageAccueil;
    text = "Chez vous, partout ailleurs";
  } else if (location.pathname === "/apropos") {
    image = imageApropos;
  }

  return (
    <div className="Bandeau">
      <img src={image} alt="Bandeau" />
      {text && <p className="Bandeau-text">{text}</p>}
    </div>
  );
}