import { ShoppingBag } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../productsContent";

function ProductDetail() {

    const {id} = useParams();
   
// to match id details
    const product = products.find((p) => p.id === parseInt(id));

    if(!product){
        return <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link to="/" className="text-blue-600">Return Home</Link>
            </div>
        </div>
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link to="/" className="mb-8 inline-block">
          Back
        </Link>
      </div>

      {/* The grid on how the layout is */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded w-full max-w-[600px]">
          {/* The image of the product, to the person styling:please resize image to make it not to big and fit right */}
          <img src={product.image} alt={product.title} className="w-full h-auto" />
        </div>

        {/* The product Title, Price and Description */}
        <div>
            {/* Product Title */}
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          {/* Product Category */}
          <p className="text-gray-600 mb-6">{product.category}</p>
          {/* Product Price */}
          <div className="mb-6">
            <span className="text-3xl font-bold">${product.price}</span>
             {/* Product Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          </div>

          {/* The Add to bag Button */}
          <button className="w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300">
            <ShoppingBag /> Add to bag
          </button>
        </div>
        <div className="">
          {/* Description, to the person styling: It needs to be centered and add a top border line with light gray, for example: border-gray-400 */}
          <h1 className="text-2xl font-bold mb-4">Description</h1>
          <p className="text-gray-600 mb-6">Discover a premium selection of modern tech designed to elevate your everyday life — from powerful smartphones to stylish wearables and high-quality audio gear. Each product in our collection has been carefully chosen for its exceptional performance, reliability, and sleek aesthetic that suits any lifestyle. Whether you're upgrading to a faster iPhone with stunning cameras and impressive battery life, stepping into the world of smart convenience with an Apple Watch designed to keep you connected and active, or immersing yourself in rich, detailed sound with lightweight Sony headphones, our range offers the perfect combination of innovation and comfort. Built to deliver seamless efficiency, these devices blend advanced technology with user-friendly design, making them ideal for work, entertainment, fitness, and everyday connectivity. No matter which device you choose, you’re selecting a product crafted to enhance productivity, simplify your routines, and complement your personal style with elegance and durability.</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;