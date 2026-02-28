import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle background change on scroll for better readability
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-20 py-2 flex items-center justify-between">
        
        {/* Left Side: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {["HOME", "SHOPS", "PRODUCTS", "BLOG", "PAGES"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[12px] font-semibold  text-white hover:text-white/70 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Center: Brand Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h2 className="text-2xl md:text-4xl text-white">
            YASSORAA
          </h2>
        </div>

        {/* Right Side: Tools & Actions */}
        <div className="flex items-center gap-6">
          {/* Selectors */}
          <div className="hidden md:flex items-center gap-4 text-white">
            <button className="flex items-center gap-1 text-[10px] font-bold border border-white/20 rounded-full px-3 py-2 hover:bg-white hover:text-black transition-all">
              English <ChevronDown size={12} />
            </button>
            <button className="flex items-center gap-1 text-[10px] font-bold border border-white/20 rounded-full px-3 py-2 hover:bg-white hover:text-black transition-all">
              USD <ChevronDown size={12} />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-white">
            <a href="/login" className="text-[10px] font-bold tracking-widest hover:text-white/70">
              LOGIN
            </a>
            <button className="hover:scale-110 transition-transform">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button className="hover:scale-110 transition-transform">
              <Heart size={22} strokeWidth={1.5} />
            </button>
            {/* Cart with Badge */}
            <button className="relative hover:scale-110 transition-transform">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;