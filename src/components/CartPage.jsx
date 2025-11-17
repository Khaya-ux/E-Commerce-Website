import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalAmount, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const handleIncrease = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your bag is empty
          </h2>
          <p className="text-gray-600 mb-6">Add some items to get started!</p>
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Cart Items */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Check your Bag Items
              </h1>
              <div className="w-full h-1 bg-gradient-to-r from-gray-900 to-transparent"></div>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-6 border-b border-gray-200 last:border-0"
                >
                  {/* Product Image */}
                  <div className="w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg
                          className="w-16 h-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">White</p>
                      <p className="text-sm text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4 ? "text-yellow-400" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">4.5 / 5</span>
                      </div>
                    </div>

                    {/* Price and Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-gray-900">
                          $ {item.price.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg text-gray-600">x</span>
                          <span className="text-lg font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDecrease(item.id)}
                          className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition"
                          aria-label="Decrease quantity"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => handleIncrease(item)}
                          className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 transition"
                          aria-label="Increase quantity"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={() => handleRemove(item.id)}
                          className="ml-2 w-10 h-10 flex items-center justify-center border-2 border-red-300 rounded-lg hover:border-red-500 hover:bg-red-50 text-red-500 transition"
                          aria-label="Remove item"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Bag Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-8 sticky top-6">
              <div className="relative mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Bag</h2>
                <div className="absolute -right-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span className="font-semibold">
                    $ {totalAmount.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold">$ 0.00</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">
                    $ {(totalAmount * 0.1).toFixed(2)}
                  </span>
                </div>

                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Bag Total:
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      $ {(totalAmount + totalAmount * 0.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition shadow-lg"
              >
                Checkout
              </button>

              <button
                onClick={() => navigate("/")}
                className="w-full mt-3 bg-white text-gray-900 py-4 rounded-lg font-semibold text-lg border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
