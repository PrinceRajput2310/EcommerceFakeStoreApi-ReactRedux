import React from "react";
import Header from "./container/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";
//import AddNewProduct from "./container/AddNewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <AddNewProduct/> */}
        <Routes>
          <Route  exact  path="/"  element={<ProductListing/>} />
          <Route    exact  path="/product/:productId" element={<ProductDetail/>} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
