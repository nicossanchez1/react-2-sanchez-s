import "./filtros.css";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Item from "../Item/Item";
import Counter from "../CounterWithCustomHook";
const traerImagenes = require.context("../../assets/img", true);

function ItemListContainer() {
  const [selected, setSelected] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.clear();

    const mockApiProducts = new Promise((resolved, rejected) => {
      setTimeout(() => {
        resolved([
          {
            id: 1,
            category: "filtros",
            name: "man",
            description: "description",
            stock: 10,
            image: traerImagenes(`./man.jpg`),
          },
          {
            id: 2,
            category: "filtros",
            name: "fram",
            description: "description",
            stock: 10,
            image: traerImagenes(`./fram.jpg`),
          },
          {
            id: 3,
            category: "filtros",
            name: "vinto",
            description: "description",
            stock: 10,
            image: traerImagenes(`./vinto.jpg`),
          },
        ]);
      }, 3000);
    });

    mockApiProducts
      .then((response) => {
        console.log(response);
        setProducts(response);
      })
      .catch((error) => {
        console.log("Error inesperado, pruebe en unos minutos por favor");
      });
  }, []);

  return (
    <div className="App">
      <body>
        <div className="wrapper">
          <aside className="navCompleta">
            <button className="close-menu" id="close-menu">
              <i className="bi bi-x"></i>
            </button>
            <header>
              <div className="title">
                <h1 className="logo" href="/">
                  Lubricentro
                </h1>
              </div>
              <div className="nav">
                <NavBar />
              </div>
            </header>
            <footer>
              <p className="texto-footer">© 2023 Nicolás J.K</p>
            </footer>
          </aside>
          <main>
            <div className="tituloMain">Nuestros Filtros</div>
            <div className="productos">
              {products.length > 0
                ? products.map((product) => {
                    return (
                      <Item isSelected={selected} onSelectedChange={setSelected}>
                        <p className="title">
                          <b>{product.name}</b>
                        </p>
                        <img width={150} height={150} src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Cantidad disponible: {product.stock}</p>
                        <div>
                          <button className="botonAdd">Ver detalles</button>
                        </div>
                      </Item>
                    );
                  })
                : null}
            </div>
          </main>
        </div>

        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
        <script src="./js/main.js"></script>
        <script src="./js/menu.js"></script>
      </body>
    </div>
  );
}

export default ItemListContainer;
