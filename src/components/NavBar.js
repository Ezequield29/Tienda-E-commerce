import CartWidget from "./CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <h3 className="navbar-brand" href="#">Computek</h3>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="nav-link" href="#">Cables y Adaptadores</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Disco Rigidos</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Fuentes</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Microprocesadores</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Memorias Ram</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Monitores</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" href="#">Preifericos</button>
                </li>
            </ul>               
            <CartWidget/>         
            </div>
        </nav>
    )
}
export default NavBar