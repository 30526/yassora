import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router"; // Ensure using react-router-dom
import { useCart } from "../../context/CartContext";
import CartSidebar from "../cartSideBar/CartSideBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsCartOpen,getCartCount } = useCart();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["HOME", "SHOPS", "PRODUCTS", "BLOG", "PAGES"];

  // THEME LOGIC
  const navPosition =
    "fixed top-0 left-0 w-full z-50 transition-all duration-500";

  const navStyles = isHomePage
    ? isScrolled
      ? "bg-black/90 backdrop-blur-md py-3 border-b border-white/10"
      : "bg-transparent py-6 border-b border-transparent"
    : ` border-b border-gray-100 ${isScrolled ? "bg-transparent backdrop-blur-sm py-3" : "bg-white/90 py-6"}`;

  const textColor = isHomePage ? "text-white" : "text-black";

  return (
    <>
      <nav className={`${navPosition} ${navStyles}`}>
        <div className="px-6 lg:px-12 flex items-center justify-between relative">
          {/* 1. LEFT SECTION: Mobile Toggle & Desktop Search */}
          <div className="flex items-center gap-6 flex-1">
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden ${textColor} hover:opacity-70 transition-opacity`}
            >
              <Menu size={28} />
            </button>

            {/* Desktop Only Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <Search
                size={20}
                strokeWidth={1.5}
                className={`${textColor} cursor-pointer hover:scale-110 transition-transform`}
              />
              <Heart
                size={20}
                strokeWidth={1.5}
                className={`${textColor} cursor-pointer hover:scale-110 transition-transform`}
              />
            </div>
          </div>

          {/* 2. CENTER SECTION: Logo & Desktop Links */}
          <div className="flex items-center gap-4 md:gap-10">
            {/* Left Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`text-[11px] font-bold tracking-[0.2em] ${textColor} hover:opacity-60`}
              >
                HOME
              </Link>
              <Link
                to="/shops"
                className={`text-[11px] font-bold tracking-[0.2em] ${textColor} hover:opacity-60`}
              >
                SHOPS
              </Link>
            </div>

            {/* Logo - Always Centered */}
            <Link to="/" className="mx-2 md:mx-4">
              <h1
                className={`text-xl md:text-3xl font-serif tracking-[0.3em] ${textColor}`}
              >
                YASSORAA
              </h1>
            </Link>

            {/* Right Nav Links (Desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/products"
                className={`text-[11px] font-bold tracking-[0.2em] ${textColor} hover:opacity-60`}
              >
                PRODUCTS
              </Link>
              <Link
                to="/blog"
                className={`text-[11px] font-bold tracking-[0.2em] ${textColor} hover:opacity-60`}
              >
                BLOG
              </Link>
            </div>
          </div>

          {/* 3. RIGHT SECTION: User & Cart */}
          <div className="flex items-center justify-end gap-6 flex-1">
            <User
              size={20}
              strokeWidth={1.5}
              className={`hidden md:block ${textColor} cursor-pointer`}
            />
            <div className="relative cursor-pointer hover:scale-110 transition-transform">
              <ShoppingBag
                onClick={() => setIsCartOpen(true)}
                size={22}
                strokeWidth={1.5}
                className={textColor}
              />
              <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {getCartCount()}
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE PANEL */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-[280px] bg-black text-white p-8 transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-xl font-serif tracking-widest">YASSORAA</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:rotate-90 transition-transform duration-300"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-bold tracking-[0.3em] border-b border-white/10 pb-4 hover:text-white/70 transition-all"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-10 left-8 right-8 space-y-4">
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-4 border border-white/20 text-center text-[10px] font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              LOGIN / REGISTER
            </Link>
            <div className="flex gap-2">
              <button className="flex-1 py-3 border border-white/10 text-[9px] font-bold">
                ENG
              </button>
              <button className="flex-1 py-3 border border-white/10 text-[9px] font-bold">
                USD
              </button>
            </div>
          </div>
        </div>
      </div>
      <CartSidebar></CartSidebar>
    </>
  );
};

export default Navbar;
