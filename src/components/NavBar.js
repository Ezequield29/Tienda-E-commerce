import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Computek</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/category/cables" className="nav-link">Cables y Adaptadores</Link>
          </li>
          {/* Agrega enlaces adicionales para otras categorías si es necesario */}
          <li className="nav-item">
            <Link to="/category/discos" className="nav-link">Discos Rígidos</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/fuentes" className="nav-link">Fuentes</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/microprocesadores" className="nav-link">Microprocesadores</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/memorias" className="nav-link">Memorias RAM</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/monitores" className="nav-link">Monitores</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/perifericos" className="nav-link">Periféricos</Link>
          </li>
          <li className="nav-item">
            <Link to="/catalog" className="nav-link">Catálogo</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
