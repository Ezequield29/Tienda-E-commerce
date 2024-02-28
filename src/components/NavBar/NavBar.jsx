import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'; // Ajustar la ruta de importación del archivo CSS
const NavBar = () => {
    return(
        <nav className="NavBar">
            <h3>COMPUTEK</h3>
            <div>
                <button>Cables y Adaptadores</button>
                <button>Discos Rigidos</button>
                <button>Fuentes</button>
                <CartWidget/>
            </div>
        </nav>
    )
}
export default NavBar;
