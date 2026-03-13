import React from "react";
import { Heart, Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  // Get the lowest price for the "Starting at" display
  const startingPrice = Math.min(...product.sizes.map((s) => s.price));
  const highestPrice = Math.max(...product.sizes.map((m) => m.price));

  return (
    <div className="group relative bg-white transition-all duration-500 border border-transparent hover:border-slate-100">
      {/* 1. Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#FBFBFB]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* 2. Hover Overlay: Size Selection Quick-Add */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {/* <p className="text-white text-[9px] font-bold tracking-widest mb-3 text-center uppercase">
              Select Size
            </p> */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {product.sizes.map((option, index) => (
                <button
                  key={index}
                  className="bg-white/90 hover:bg-white text-black text-[10px] font-bold px-3 py-1 transition-colors"
                >
                  {option.size}
                  {option.unit}
                </button>
              ))}
            </div>

            <Link to={`product/${product._id}`}>
              <button className="w-full bg-white text-black py-3 text-xs font-semibold tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-black hover:text-white cursor-pointer transition-all">
                <ShoppingBag size={14} /> View Details
              </button>
            </Link>
          </div>
        </div>

        {/* 3. Favorite Button (Top Right) */}
        <button className="absolute top-4 right-4 text-slate-600 hover:text-red-600 transition-colors">
          <Heart size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* 4. Product Details */}
      <div className="pt-6 pb-6 px-2 text-center">
        <span className="text-[10px] text-amber-600 font-bold tracking-[0.4em] uppercase">
          {product.category}
        </span>

        <h3 className="mt-2 text-xl font-serif italic text-slate-900 tracking-tight">
          {product.name}
        </h3>

        <div className="mt-3 flex flex-col items-center">
          <span className="text-sm font-medium text-slate-800">
            Tk {startingPrice} — Tk
            {highestPrice}
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">
            {product.sizes.length} Sizes Available
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
