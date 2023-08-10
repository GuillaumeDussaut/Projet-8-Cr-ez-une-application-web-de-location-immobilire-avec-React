import React from "react";
import { useParams } from "react-router-dom";
import dataJSON from "../data/data.json";
import Slider from '../components/slider/slider';
import LocInfo from '../components/infoLoc/locInfo';
import Collaps from '../components/collapse/collaps';
import Rate from '../components/rate/rate';
import Host from '../components/hostInfo/host';
import Tags from '../components/tags/tags';

export default function Location() {
  const { id } = useParams();
  const data = dataJSON;
  const selectedLocation = data.find((location) => location.id === id);
  const { title, location, host, tags, description, equipments, rating, pictures } = selectedLocation;

  return (
    <section className="locationContainer">
      <Slider images={pictures} />
      <div className="hostContainer">
        <LocInfo id={id} title={title} location={location} />
        <Host host={host} />
        <Tags id={id} tags={tags} />
        <Rate rating={rating} />
      </div>
      <div className="ContainerCollaps">
        <Collaps title="Description" collapsContent={description} />
        <Collaps title="Equipements" collapsContent={
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        } />
      </div>
    </section>
  );
}




