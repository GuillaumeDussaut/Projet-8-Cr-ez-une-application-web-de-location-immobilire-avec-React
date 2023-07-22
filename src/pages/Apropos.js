import React from 'react';
import Bandeau from '../components/bandeau/bandeau';
import Collapse from '../components/collapse/collaps'; 
import imgBandeau from '../assets/background2.png';

export default function AproposContainer() {
  const bandeauText = '';
  return (
    <>
      <Bandeau imgURL={imgBandeau} imgTXT={bandeauText} />
      <div className="nav-apropos">
        <Collapse title="fiabilité" collapsContent='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'/>
        <Collapse title="Respect" collapsContent='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
        <Collapse title="Services" collapsContent='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
        <Collapse title="Sécurité" collapsContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    </>
  );
}



