import React from 'react'
import products from "../productsContent";
import ProductCard from "./ProductCard";

function ProductList() {
   return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24 bg-gray-200 p-8 rounded-3xl">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList