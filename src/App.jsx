import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import CheckoutForm from "./components/CheckoutForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<h1>Store Page</h1>} />
        <Route path="/favorite" element={<h1>Favorite Page</h1>} />
        <Route path="/bag" element={<h1>Bag Page</h1>} />
        <Route path="/logout" element={<h1>Logging Out...</h1>} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/productcard" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
