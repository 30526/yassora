import React, { useState } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

const AddToCartModal = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize, quantity);
    onClose();
    // Reset states
    setSelectedSize(null);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Add to Cart</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex gap-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-24 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <span className="text-[10px] text-amber-600 font-bold tracking-wider uppercase">
                {product.category}
              </span>
              <h4 className="mt-1 text-lg font-serif italic text-gray-900">
                {product.name}
              </h4>
              <p className="mt-2 text-sm font-medium text-gray-900">
                {selectedSize
                  ? `Tk ${selectedSize.price}`
                  : `Tk ${Math.min(...product.sizes.map((s) => s.price))} — Tk ${Math.max(...product.sizes.map((s) => s.price))}`}
              </p>
            </div>
          </div>
        </div>

        {/* Size Selection */}
        <div className="p-6 border-b border-gray-100">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Select Size *
          </label>
          <div className="grid grid-cols-4 gap-2">
            {product.sizes.map((sizeOption, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(sizeOption)}
                className={`py-3 px-2 text-sm font-medium border-2 transition-all ${
                  selectedSize?.size === sizeOption.size
                    ? "border-black bg-black text-white"
                    : "border-gray-200 text-gray-900 hover:border-gray-400"
                }`}
              >
                {sizeOption.size}
                {sizeOption.unit}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="p-6 border-b border-gray-100">
          <label className="block text-sm font-semibold text-gray-900 mb-3">
            Quantity
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={decrementQuantity}
              className="w-10 h-10 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="text-lg font-semibold w-12 text-center">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="w-10 h-10 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Total & Add Button */}
        <div className="p-6 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-xl font-bold text-gray-900">
              Tk{" "}
              {selectedSize
                ? (selectedSize.price * quantity).toFixed(2)
                : "0.00"}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 text-sm font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedSize}
          >
            <ShoppingBag size={18} />
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
