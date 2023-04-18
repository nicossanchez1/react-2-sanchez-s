import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Item from "../Item/Item";
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
            category: "aceites",
            name: "castrol",
            description: "description",
            stock: 10,
            image: traerImagenes(`./castrol-edge.jpg`),
          },
          {
            id: 2,
            category: "aceites",
            name: "gulf",
            description: "description",
            stock: 10,
            image: traerImagenes(`./Aceite.jpg`),
          },
          {
            id: 3,
            category: "aceites",
            name: "motul",
            description: "description",
            stock: 10,
            image: traerImagenes(`./hidraulica.jpg`),
          },



          {
            id: 1,
            category: "filtros",
            name: "filtro",
            description: "description",
            stock: 10,
            image: traerImagenes(`./man.jpg`),
          },
          {
            id: 2,
            category: "filtros",
            name: "filtro",
            description: "description",
            stock: 10,
            image: traerImagenes(`./fram.jpg`),
          },
          {
            id: 3,
            category: "filtros",
            name: "filtro",
            description: "description",
            stock: 10,
            image: traerImagenes(`./vinto.jpg`),
          },

          {
            id: 1,
            category: "repuestos",
            name: "repuesto",
            description: "description",
            stock: 10,
            image: traerImagenes(`./amortiguador.jpg`),
          },
          {
            id: 2,
            category: "repuestos",
            name: "repuesto",
            description: "description",
            stock: 10,
            image: traerImagenes(`./neuma.png`),
          },
          {
            id: 3,
            category: "repuestos",
            name: "repuesto",
            description: "description",
            stock: 10,
            image: traerImagenes(`./disco.jpg`),
          
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
            <div className="tituloMain">
              <b>Todos los productos</b>
            </div>
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

// <Counter />
