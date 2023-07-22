import React from "react";
import Card from "../components/cards/cards";
import dataJSON from "../data/data.json";
import Bandeau from '../components/bandeau/bandeau';
import imgBandeau from '../assets/background1.png';

export default function Accueil() {
  const bandeauText = 'Chez vous, partout et ailleurs';
  const CardClick = (cardData) => {
  };

  return (
    <>
    <Bandeau imgURL={imgBandeau} imgTXT={bandeauText} />
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