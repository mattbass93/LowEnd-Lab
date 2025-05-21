import { useState } from "react";
import Logo from '../assets/logos/logo.png'

import MiniCart from "../components/MiniCart";




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  



  return (
    <header className="bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo + Title */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="LowEnd Lab Logo"
            className="w-10 h-10 hover:scale-105 transition-transform duration-200"
          />

        </a>


        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Shop</a>
<div className="relative group">
  <MiniCart />
</div>



          <a href="#" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <a href="#" className="block hover:text-yellow-400 transition">Home</a>
          <a href="#" className="block hover:text-yellow-400 transition">Shop</a>
          <a href="#" className="block hover:text-yellow-400 transition">Cart</a>
          <a href="#" className="block hover:text-yellow-400 transition">Contact</a>
        </div>
      )}
    </header>
  );
}
