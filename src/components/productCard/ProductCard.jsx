import React, { useState } from "react";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router";
import AddToCartModal from "../addToCartModal/AddToCartModal";

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileActionsVisible, setIsMobileActionsVisible] = useState(false);

  const startingPrice = Math.min(...product.sizes.map((s) => s.price));
  const highestPrice = Math.max(...product.sizes.map((m) => m.price));

  const onClose = () => setIsOpen(false);

  const handleMobileTouch = () => {
    setIsMobileActionsVisible(!isMobileActionsVisible);
  };

  return (
    <div className="group relative bg-white transition-all duration-300">
      {/* Image Container */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-gray-50 cursor-pointer"
        onClick={handleMobileTouch}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Desktop Hover Overlay */}
        <div className="hidden md:block absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Favorite Icon - Desktop Only on Hover */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-700 hover:text-red-600 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            <Heart size={18} strokeWidth={1.5} />
          </button>

          {/* Desktop Action Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="w-full bg-black text-white py-3.5 text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart
            </button>

            <Link to={`/product/${product._id}`}>
              <button
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-white/95 text-black py-3.5 text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300"
              >
                <Eye size={16} strokeWidth={1.5} />
                View Details
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Touch Overlay */}
        <div
          className={`md:hidden absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMobileActionsVisible
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Mobile Action Buttons */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
                setIsMobileActionsVisible(false);
              }}
              className="w-full bg-black text-white py-3 text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 active:bg-white active:text-black transition-all duration-200"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              Add to Cart
            </button>

            <Link to={`/product/${product._id}`}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileActionsVisible(false);
                }}
                className="w-full bg-white text-black py-3 text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 active:bg-black active:text-white transition-all duration-200"
              >
                <Eye size={16} strokeWidth={1.5} />
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-5 pb-4 px-1 text-center">
        <span className="text-[9px] text-amber-500 font-medium tracking-[0.3em] uppercase">
          {product.category}
        </span>

        <h3 className="mt-2 text-base md:text-lg font-light text-gray-900 tracking-tight leading-tight">
          {product.name}
        </h3>

        <div className="mt-3 flex flex-col items-center">
          <span className="text-sm font-medium text-gray-900">
            Tk {startingPrice}{" "}
            {startingPrice !== highestPrice && `— Tk ${highestPrice}`}
          </span>
          <span className="text-[9px] text-gray-400 uppercase tracking-[0.25em] mt-1.5">
            {product.sizes.length} Size{product.sizes.length > 1 ? "s" : ""}{" "}
            Available
          </span>
        </div>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal product={product} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ProductCard;
