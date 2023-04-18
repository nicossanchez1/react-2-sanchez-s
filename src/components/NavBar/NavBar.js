/*   < >  */

import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
        <nav>
          <ul className="menu">
            
            <li>
              <a id="inicio" className="boton-menu boton-categoria" href="/">
                <i className="bi bi-hand-index-thumb-fill"></i>Todos los productos
              </a>
            </li>
            <li>
              <a id="calza" className="boton-menu boton-categoria" href="/category/aceites" >
                <i className="bi bi-hand-index-thumb"></i> Aceites
              </a>
            </li>
            <li>
              <a id="remera" className="boton-menu boton-categoria" href="/category/filtros">
                <i className="bi bi-hand-index-thumb"></i> Filtros
              </a>
            </li>
            <li>
              <a id="top" className="boton-menu boton-categoria" href="/category/repuestos">
                <i className="bi bi-hand-index-thumb"></i> Repuestos
              </a>
            </li>
            <li>
            <CartWidget />
            </li>
          </ul>
        </nav>
  );
};

export default NavBar;