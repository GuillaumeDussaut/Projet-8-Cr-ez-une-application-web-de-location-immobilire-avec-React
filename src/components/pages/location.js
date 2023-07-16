import React from "react";
import { useParams } from "react-router-dom";
import dataJSON from "../data.json";
import Slider from '../slider/slider';
import HostInfo from '../hostInfo/hostInfo';

import "../tagsAndRate/tagsAndRate.scss";
import "../../App.scss";

export default function Location() {
  const { id } = useParams();
  const data = dataJSON;
  const selectedLocation = data.find((location) => location.id === id);
  const { title, location, host, tags, rating, pictures } = selectedLocation;

  return (
    <section className="locationContainer">
      <Slider images={pictures} />
      <HostInfo id={id} title={title} location={location} host={host} />
      <div className="tagAndRate">
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="rate"></div>
      </div>
    </section>
  );
}


