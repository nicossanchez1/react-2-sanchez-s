import "./index.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Aceites from "./components/aceites/Aceites"
import Repuestos from "./components/repuestos/Repuestos"
import Filtros from "./components/filtros/Filtros"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container-fluid containerCard">
          <div className='row'>
            
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/pre-entrega1-sanchez-s' element={<ItemListContainer />} />
              <Route path='/category/aceites' element={<Aceites />} />
              <Route path='/category/aceites:name' element={<Aceites />} />
              <Route path='/category/filtros' element={<Filtros />} />
              <Route path='/category/filtros:name' element={<Filtros />} />
              <Route path='/category/repuestos' element={<Repuestos />} />
              <Route path='/category/repuestos:name' element={<Repuestos />} />
              {/* <Route path='/item/:itemId' element={<ItemDetailContainer />} /> */}
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />

            </Routes>

          </div>
        </div>
      </BrowserRouter>

   
    </div>
  );
}


export default App;


