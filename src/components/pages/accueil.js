import React from "react";
import Card from "../cards/cards";
import "../cards/cards.scss";
import dataJSON from "../data.json";

export default function Accueil() {
  const handleCardClick = (cardData) => {
  };

  return (
    <>
      <section className="location">
        <div className="cardsContainer">
          {dataJSON.map((location) => (
            <Card
              key={location.id}
              id={location.id}
              title={location.title}
              image={location.cover}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </section>
    </>
  );
}