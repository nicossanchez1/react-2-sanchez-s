import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Aside from "../../aside/aside";
import axios from "axios";
import Cards from "../../cards/Cards";
import { Link } from "react-router-dom";
/* import { mockComponent } from "react-dom/test-utils";
 */

const Category = () => {
  const [autos, setAutos] = useState([]);

  let { categoryId } = useParams();

  let filteredAutos = autos.filter((auto) => {
    return auto.category === categoryId;
  });

  console.log("filteredAutos", filteredAutos);

  useEffect(() => {
    // axios(`${process.env.REACT_APP_BASE_URL}`).then((json) => setAutos(json.data.models));
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) => {
      const nombres = json.data.filter((modelos) => modelos.category);
      setAutos(nombres);
    });
  }, []);
  return (
    <div className="wrapper">
      <Aside></Aside>
      <main>
        <div className="tituloMain">
          <h2 style={{ textTransform: "Capitalize" }}>{categoryId}</h2>
        </div>
        <div className="productos">
          {filteredAutos.map((auto) => {
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
};

export default Category;
