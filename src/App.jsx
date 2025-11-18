// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// ---------- pages / components ----------
import CartPage from "./components/CartPage";
import CheckoutForm from "./components/CheckoutForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Sidebar from "./components/Sidebar";

// ---------- layout that keeps Sidebar on every page ----------
function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      {/* where the actual page component renders */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

// ---------- root component ----------
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* every route inside this wrapper shows the sidebar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Store Page</h1>} />
          <Route path="home" element={<div>Home Page</div>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutForm />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="favorite" element={<h1>Favorite Page</h1>} />
          <Route path="bag" element={<h1>Bag Page</h1>} />
          <Route path="logout" element={<h1>Logging Out…</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
