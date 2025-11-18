// ProductDetail.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShoppingBag, ChevronLeft } from "lucide-react";
import { addToCart } from "../features/cart/cartSlice";
import products from "../productsContent";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === parseInt(id));

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  if (!product)
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-blue-600">
          Return Home
        </Link>
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-lg">
          <ChevronLeft className="w-5 h-5" /> Back
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        {/* images */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-8 rounded-3xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl w-20 h-20 flex items-center justify-center"
              >
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* info */}
        <div>
          <h1 className="text-5xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-400 text-xl mb-4">{product.category}</p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-teal-700 text-3xl">
              {"★".repeat(4)}
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-teal-700 text-3xl">4.5 / 5</span>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold">${product.price}</span>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Redux-connected button */}
          <button
            onClick={handleAdd}
            className="bg-black text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-800"
          >
            <ShoppingBag /> Add to Bag
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16">
        <hr className="border-gray-700/50 border-t-4 mb-8" />
        <h1 className="text-3xl font-bold mb-6">Description</h1>
        <p className="text-gray-600 leading-relaxed">
          Discover a premium selection of modern tech designed to elevate your
          everyday life — from powerful smartphones to stylish wearables and
          high-quality audio gear. Each product in our collection has been
          carefully chosen for its exceptional performance, reliability, and
          sleek aesthetic that suits any lifestyle. Whether you're upgrading to
          a faster iPhone with stunning cameras and impressive battery life,
          stepping into the world of smart convenience with an Apple Watch
          designed to keep you connected and active, or immersing yourself in
          rich, detailed sound with lightweight Sony headphones, our range
          offers the perfect combination of innovation and comfort. Built to
          deliver seamless efficiency, these devices blend advanced technology
          with user-friendly design, making them ideal for work, entertainment,
          fitness, and everyday connectivity. No matter which device you choose,
          you're selecting a product crafted to enhance productivity, simplify
          your routines, and complement your personal style with elegance and
          durability.
        </p>
      </div>
    </div>
  );
}
