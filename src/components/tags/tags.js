// tags.js
import React from 'react';
import './tags.scss';

export default function Tags({ id, tags }) { 
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div className="tag" key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
}





