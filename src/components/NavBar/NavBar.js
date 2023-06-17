/*   < >  */
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link className="boton-menu boton-categoria" to="/">
            <i className="bi bi-hand-index-thumb-fill"></i>Todos los productos
          </Link>
        </li>
        <li>
          <Link className="boton-menu boton-categoria" to="/Category/men's clothing">
            <i className="bi bi-hand-index-thumb"></i> men's clothing
          </Link>
        </li>
        <li>
          <Link className="boton-menu boton-categoria" to="/Category/jewelery">
            <i className="bi bi-hand-index-thumb"></i> Jewelery
          </Link>
        </li>
        <li>
          <Link className="boton-menu boton-categoria" to="/Category/electronics">
            <i className="bi bi-hand-index-thumb"></i> Electronics
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
