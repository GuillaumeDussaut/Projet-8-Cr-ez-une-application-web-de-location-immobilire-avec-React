import React from "react";
import Card from "../cards/cards";
import "../cards/cards.scss";
import dataJSON from "../data.json";
import Bandeau from '../bandeau/bandeau';

export default function Accueil() {
  const CardClick = (cardData) => {
  };

  return (
    <>
    <Bandeau/>
      <section className="location">
        <div className="cardsContainer">
          {dataJSON.map((location) => (
            <Card
              key={location.id}
              id={location.id}
              title={location.title}
              image={location.cover}
              onClick={CardClick}
            />
          ))}
        </div>
      </section>
    </>
  );
}