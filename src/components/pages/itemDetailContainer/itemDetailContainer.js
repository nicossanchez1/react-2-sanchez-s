import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cards from "../../cards/Cards";
import Aside from "../../aside/aside";
const ItemDetailContainer = () => {
  const [auto, setAuto] = useState();
  let { id } = useParams();
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((json) => setAuto(json.data));
  }, [id]);
  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <b>Todos los productos</b>
        </div>
        <div className="productos">
          <div style={{ display: "flex", justifyContent: "center", margin: 0, width: 1080, padding: 100 }}>{auto ? <Cards auto={auto} /> : null}</div>;
        </div>
      </main>
    </div>
  );
};

export default ItemDetailContainer;
