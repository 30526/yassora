import React, { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["HOME", "SHOPS", "PRODUCTS", "BLOG", "PAGES"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/10 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-20 py-2 flex items-center justify-between">
          
          {/* Mobile: Menu Toggle (Left) */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(true)} className="text-white">
              <Menu size={28} />
            </button>
          </div>

          {/* Desktop: Navigation Links (Left) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-semibold text-white hover:text-white/70 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center: Brand Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h2 className="text-xl md:text-4xl text-white font-serif tracking-widest">
              YASSORAA
            </h2>
          </div>

          {/* Right Side: Tools & Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Selectors */}
            <div className="hidden md:flex items-center gap-4 text-white">
              <button className="flex items-center gap-1 text-[11px] font-bold border border-white/20 rounded-full px-3 py-2 hover:bg-white hover:text-black transition-all">
                English <ChevronDown size={12} />
              </button>
              <button className="flex items-center gap-1 text-[11px] font-bold border border-white/20 rounded-full px-3 py-2 hover:bg-white hover:text-black transition-all">
                USD <ChevronDown size={12} />
              </button>
            </div>

            {/* Icons (Visible on Mobile/Desktop) */}
            <div className="flex items-center gap-3 md:gap-4 text-white">
              <a href="/login" className="hidden sm:block text-[10px] font-bold tracking-widest hover:text-white/70">
                LOGIN
              </a>
              <button className="hidden sm:block hover:scale-110 transition-transform">
                <Search size={22} strokeWidth={1.5} />
              </button>
              {/* Cart Icon - Always Visible */}
              <button className="relative hover:scale-110 transition-transform">
                <ShoppingBag size={24} md:size={22} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDE PANEL --- */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-black text-white p-8 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-serif tracking-widest">YASSORAA</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium tracking-widest border-b border-white/10 pb-2 hover:text-white/70"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="mt-12 space-y-4">
             <a href="/login" className="block text-sm font-bold tracking-widest border border-white/20 text-center py-3 rounded-md">
                LOGIN
             </a>
             <div className="flex gap-2">
                <button className="flex-1 text-[10px] border border-white/10 py-2 rounded-md">ENGLISH</button>
                <button className="flex-1 text-[10px] border border-white/10 py-2 rounded-md">USD</button>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;