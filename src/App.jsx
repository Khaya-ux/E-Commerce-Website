import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto px-4'>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;