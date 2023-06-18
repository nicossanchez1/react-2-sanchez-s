import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/itemDetailContainer/itemDetailContainer";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Category from "./components/pages/category/Category";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <></>
        <div className="container-fluid containerCard">
          <div className="row">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:categoryId/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/Category/:categoryId" element={<Category />} />
              {/* <Route path='*' element={<h1>404 NOT FOUND</h1>} /> */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* . */
