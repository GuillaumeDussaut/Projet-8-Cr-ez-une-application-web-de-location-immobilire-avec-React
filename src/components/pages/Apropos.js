import React, { useState } from 'react';
import ArrowBack from '../../assets/arrow_back.png';

export default function AproposContainer() {
  const [arrowRotation, setArrowRotation] = useState([false, false, false, false]);
  const [collapse, setCollapse] = useState([false, false, false, false]);

  const handleArrowClick = (index) => {
    setArrowRotation((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setCollapse((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>

      <div className="nav-apropos">
        <div className={`menu-deroulant ${collapse[0] ? 'collapsed' : ''}`}>
          <p>Flabilité</p>
          <img
            src={ArrowBack}
            alt="fleche bas"
            className={`arrowNav ${arrowRotation[0] ? 'rotate' : ''}`}
            onClick={() => handleArrowClick(0)}
          />
        </div>
        <div className={`zoneTXT ${collapse[0] ? 'collapsed' : ''}`}>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
        <div className={`menu-deroulant ${collapse[1] ? 'collapsed' : ''}`}>
          <p>Respect</p>
          <img
            src={ArrowBack}
            alt="fleche bas"
            className={`arrowNav ${arrowRotation[1] ? 'rotate' : ''}`}
            onClick={() => handleArrowClick(1)}
          />
        </div>
        <div className={`zoneTXT ${collapse[1] ? 'collapsed' : ''}`}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
</p>
        </div>
        <div className={`menu-deroulant ${collapse[2] ? 'collapsed' : ''}`}>
          <p>Service</p>
          <img
            src={ArrowBack}
            alt="fleche bas"
            className={`arrowNav ${arrowRotation[2] ? 'rotate' : ''}`}
            onClick={() => handleArrowClick(2)}
          />
        </div>
        <div className={`zoneTXT ${collapse[2] ? 'collapsed' : ''}`}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div className={`menu-deroulant ${collapse[3] ? 'collapsed' : ''}`}>
          <p>Sécurité</p>
          <img
            src={ArrowBack}
            alt="fleche bas"
            className={`arrowNav ${arrowRotation[3] ? 'rotate' : ''}`}
            onClick={() => handleArrowClick(3)}
          />
        </div>
        <div className={`zoneTXT ${collapse[3] ? 'collapsed' : ''}`}>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
</p>
        </div>
      </div>
    </>
  );
}

