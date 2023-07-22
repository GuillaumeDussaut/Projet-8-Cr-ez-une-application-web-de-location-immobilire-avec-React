import React from "react";
import { useParams } from "react-router-dom";
import dataJSON from "../data/data.json";
import Slider from '../components/slider/slider';
import HostInfo from '../components/hostInfo/hostInfo';
import Description from '../components/description/description';
import Collaps from '../components/collapse/collaps';
import Rate from '../components/rate/rate';

import "../components/tags/tags.scss";
// import "../../App.scss";

export default function Location() {
  const { id } = useParams();
  const data = dataJSON;
  const selectedLocation = data.find((location) => location.id === id);
  const { title, location, host, tags, description, equipments, rating, pictures } = selectedLocation;

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
        <div className="rate">
          <Rate />
        </div>
      </div>
      <div className="ContainerCollaps">
            <Collaps title="Description" collapsContent={description}></Collaps>
            <Collaps title="Equipements" collapsContent={
                <ul>
                  {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>}>
            </Collaps>
        </div>
    </section>
  );
}


