import React from "react";

import "./index.css";
import Sidebar from "./components/Sidebar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />

        {/* Main page content */}
        <div className="flex-1 p-10">
          <Routes>
            <Route path="/" element={<h1>Store Page</h1>} />
            <Route path="/favorite" element={<h1>Favorite Page</h1>} />
            <Route path="/bag" element={<h1>Bag Page</h1>} />
            <Route path="/logout" element={<h1>Logging Out...</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


