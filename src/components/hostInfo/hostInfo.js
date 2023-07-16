import React from 'react';
import './hostInfo.scss';

export default function HostInfo({ id, title, location, host }) {
  return (
    <>
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
    </>
  );
}
