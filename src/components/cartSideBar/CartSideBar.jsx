import React from "react";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

const CartSidebar = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCart();

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[80] shadow-2xl transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} strokeWidth={1.5} />
            <h2 className="text-xl font-semibold tracking-tight">
              Shopping Cart ({getTotalItems()})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="hover:bg-gray-100 p-2 rounded-full transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto h-[calc(100vh-280px)] p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag
                size={64}
                strokeWidth={1}
                className="text-gray-300 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Add some products to get started
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-3 bg-black text-white text-sm font-semibold tracking-wider hover:bg-gray-800 transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-gray-100 last:border-0"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      Size: {item.size}
                      {item.unit}
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      Tk {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-gray-100 transition-colors"
                        >
                          <Minus size={14} strokeWidth={2} />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={14} strokeWidth={2} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors ml-auto"
                      >
                        <Trash2 size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Checkout */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Subtotal
              </span>
              <span className="text-2xl font-bold text-gray-900">
                Tk {getTotalPrice().toFixed(2)}
              </span>
            </div>

            <Link to="/checkout" onClick={closeCart}>
              <button className="w-full bg-black text-white py-4 text-sm font-bold tracking-[0.15em] uppercase hover:bg-gray-800 transition-all duration-300">
                Proceed to Checkout
              </button>
            </Link>

            <button
              onClick={closeCart}
              className="w-full mt-3 text-sm text-gray-600 hover:text-black transition-colors uppercase tracking-wider font-medium"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
