/*   < >  */

import  CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav class="barra navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="tituloDaytona fw-bold">Daytona</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav col-12">
            <div className="col-1"></div>
            <li className="nav-item col-1">
              <button className="itemNav text-warning fs-3 fw-bold text-center" href="#">Aceites</button>
            </li>
            <li className="nav-item col-2">
              <button className="itemNav text-warning fs-3 fw-bold text-center"  href="#">Filtros</button>
            </li>
            <li className="nav-item col-1">
              <button className="itemNav text-warning fs-3 fw-bold text-center"  href="#">Repuestos</button>
            </li> 
          </ul>
        </div>
        <CartWidget/>
      </div>
    </nav>
  );
};


export default NavBar;
