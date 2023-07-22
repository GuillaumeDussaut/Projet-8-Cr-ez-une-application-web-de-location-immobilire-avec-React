import React from 'react';
import './equipement.scss';
import Arrow from '../../assets/arrow_back.png';

export default function Equipments(id, equipments){

    return(
        <>
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
        </>
    )
}



