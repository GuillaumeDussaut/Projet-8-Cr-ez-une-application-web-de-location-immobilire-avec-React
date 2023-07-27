import * as React from "react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="liensHeader">
        <NavLink exact to="/" className="lienAccueil" activeClassName="active">Accueil</NavLink>
        <NavLink to="/apropos" className="lienApropos" activeClassName="active">À Propos</NavLink>
      </nav>
    </header>
  );
}
