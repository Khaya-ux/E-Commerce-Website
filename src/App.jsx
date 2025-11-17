import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
