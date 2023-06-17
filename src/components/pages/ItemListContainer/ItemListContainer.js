import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import Cards from "../../cards/Cards";
import axios from "axios";
import Aside from "../../aside/aside";
import { Link } from "react-router-dom";

function ItemListContainer() {
  const [autos, setAutos] = useState([]);
  console.clear();
  console.log("Autos", autos);

  useEffect(() => {
    // axios(`${process.env.REACT_APP_BASE_URL}`).then((json) => setAutos(json));
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) => {
      const nombres = json.data.map((modelos) => modelos);
      setAutos(nombres);
    });
  }, []);
  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <b style={{ textTransform: "Capitalize" }}>Todos los productos</b>
        </div>
        <div className="productos">
          {autos.map((auto) => {
            return (
              <div style={{ margin: 10 }} key={auto.id}>
                <Link to={`detail/${auto.id}`}>
                  <Cards auto={auto} />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ItemListContainer;

// <Counter />
