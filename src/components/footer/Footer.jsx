import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* 1. Brand Identity */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif tracking-[0.3em]">YASSORAA</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Crafting scents that define the extraordinary. Join the elite
              community of fragrance connoisseurs.
            </p>
            <div className="flex gap-5 text-slate-300">
              <Instagram
                size={20}
                className="hover:text-amber-500 cursor-pointer transition-colors"
              />
              <Facebook
                size={20}
                className="hover:text-amber-500 cursor-pointer transition-colors"
              />
              <Twitter
                size={20}
                className="hover:text-amber-500 cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-amber-500">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                All Perfumes
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                New Arrivals
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                Attar Collection
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                Gift Sets
              </li>
            </ul>
          </div>

          {/* 3. Assistance */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-amber-500">
              Assistance
            </h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                Shipping & Returns
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                Privacy Policy
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                Terms & Conditions
              </li>
              <li className="hover:text-white transition-colors cursor-pointer text-[13px]">
                Contact Us
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-amber-500">
              The Newsletter
            </h4>
            <p className="text-slate-400 text-sm mb-6">
              Subscribe to receive updates on new launches and private sales.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-white/20 pb-2 text-xs focus:outline-none focus:border-amber-500 transition-colors tracking-widest uppercase"
              />
              <button className="absolute right-0 bottom-2 text-xs font-bold text-amber-500 tracking-widest hover:text-white transition-colors">
                JOIN
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
            © 2026 YASSORAA LUXURY FRAGRANCE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase">
            <span>Payment Methods:</span>
            <span className="text-slate-300">BKASH / NAGAD / VISA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
