// Location.js
import React from "react";
import { useParams } from "react-router-dom";
import dataJSON from "../data.json";
import "../tagsAndRate/tagsAndRate.scss";
import "../../App.scss";

export default function Location() {
  const { id } = useParams();
  const data = dataJSON;

  const selectedLocation = data.find((location) => location.id === id);
  const { title, location, host, cover, tags, rating } = selectedLocation;

  const starColor = rating >= 4 ? "#FF6060" : "#E3E3E3";

  return (
    <section className="locationContainer">
      <div className="Slider"></div>
      <div className="Infos">
        <div className="Titre">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="host">
          <p>{host.name}</p>
          <img src={host.picture} alt={host.name} />
        </div>
      </div>
      <div className="tagAndRate">
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="rate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="196"
            height="36"
            viewBox="0 0 196 36"
            fill="none"
          >
            <path d="..." fill={starColor} />
            {/* Autres éléments SVG */}
          </svg>
        </div>
      </div>
    </section>
  );
}

