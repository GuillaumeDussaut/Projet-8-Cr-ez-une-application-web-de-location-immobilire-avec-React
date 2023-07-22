import React, { useState } from 'react';
import Arrow from '../../assets/arrow_back.png';
import './collaps.scss';

export default function Collapse({title, collapsContent }) {
    const [isOpen, setIsOpen] = useState(false);

  
    const toggleCollapse = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`collapse-container ${isOpen ? 'open' : ''}`}>
        <div className="collapse-header" >
          <h2>{title}</h2>
          <img src={Arrow} alt="Arrow" onClick={toggleCollapse}/>
        </div>
        {isOpen && (
          <div className="collapse-content">
            {collapsContent}
          </div>
        )}
      </div>
    );
  }
  