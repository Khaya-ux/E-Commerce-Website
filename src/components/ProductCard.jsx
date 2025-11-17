import React from "react";
import { Link } from "react-router-dom";
import products from "../productsContent";
import { Handbag } from "lucide-react";

function ProductCard({ product }) {
  return (
    // Link makes it responsive so that when clicked, it goes to product description
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-shadow">
        {/* The product */}
        <img
          src={product.image}
          alt=""
          className="w-full h-48 object-contain mb-4"
        />
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="flex justify-between items-center pt-4">
            <p className="text-2xl font-semibold">${product.price}</p>

            {/* The Cart Logic will be added to this button */}
            <button className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition-colors">
              <Handbag
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
