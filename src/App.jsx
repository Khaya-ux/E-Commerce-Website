// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import CartPage from "./components/CartPage";
import CheckoutForm from "./components/CheckoutForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Sidebar from "./components/Sidebar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="home" element={<ProductList />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="bag" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutForm />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="favorite" element={<h1>Favorite Page</h1>} />
          <Route path="logout" element={<h1>Logging Out…</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
