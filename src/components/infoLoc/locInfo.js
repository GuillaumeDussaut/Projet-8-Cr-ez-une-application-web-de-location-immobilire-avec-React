import React from 'react';
import './locInfo.scss';

export default function HostInfo({title, location}) {
  return (
    <>
      <div className="Infos">
        <div className="Titre">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
}
