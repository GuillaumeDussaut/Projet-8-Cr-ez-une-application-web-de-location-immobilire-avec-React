import React from 'react';
import Arrow from '../../assets/arrow_back.png';

import './description.scss';

export default function Description({ id, description, equipments }) {
  return (
    <>
    <div className="Container">

        <div className='description'>
            <div class="barreDescription">
                <h1>Description</h1>
                <img src={Arrow} alt="arrow back" />
            </div>
            <div className="descriptionCollapse">
            {description}
            </div>
        </div>

        <div className="Equipements">
            <div className="equipements">
                <div className="barreEquipement">
                    <h1>Equipements</h1>
                    <img src={Arrow}/>
                </div>
                <div className="equipementCollapse">
                    {equipments.map((equipments) => (
                    <ul>
                        <li key={equipments}>
                        {equipments}
                        </li>
                    </ul>
                    ))}
                </div>
            </div>
        </div>

    </div>
    </>
  );
}
