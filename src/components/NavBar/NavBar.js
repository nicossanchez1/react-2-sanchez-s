/*   < >  */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "yellow",
    fontSize: 18,
    fontWeight: "bold",
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const NavBar = () => {
  const [items] = useContext(ItemsContext);

  return (
    <nav>
      <ul className="menu">
        <li>
          <Link className="boton-menu boton-categoria" to="/">
            <i className="bi bi-hand-index-thumb-fill"></i>Todos los productos
          </Link>
        </li>
        <li>
          <Link className="boton-menu boton-categoria" to="/Category/aceites">
            <i className="bi bi-hand-index-thumb"></i> Aceites
          </Link>
        </li>
        <li>
          <Link className="boton-menu boton-categoria" to="/Category/filtros">
            <i className="bi bi-hand-index-thumb"></i> Filtros
          </Link>
        </li>
        <li>
          <Link className="boton-menu boton-categoria" to="/Category/repuestos">
            <i className="bi bi-hand-index-thumb"></i> Repuestos
          </Link>
        </li>
        <li>
          <Link to="/CartShop" style={styles.linkButton}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartIcon />
              {items.length}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
