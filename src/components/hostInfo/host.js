// host.js
import React from 'react';

import './host.scss';

export default function Host({ host }) {
  return (
    <div className="host">
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </div>
  );
}
