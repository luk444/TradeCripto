import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to="/" className="w-full text-3xl font-bold">
        <span className="text-[#fa8072]">CRIPTO</span>
        <span className="text-[#00df9a]">-TRADE.</span>
      </Link>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/">Inicio</Link>
        </li>
        <li className="p-4">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="p-4">
          <Link to="/trade">Trade</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <Link
          to="/"
          className="w-full text-3xl font-bold text-[#fa8072] m-4"
        >
        <span className="text-[#fa8072]">CRIPTO</span>
        <span className="text-[#00df9a]">-TRADE.</span>
        </Link>
        <li className="p-4 border-b border-gray-600 mt-10">
          <Link to="/">Inicio</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="/trade">Trade</Link>
        </li>
      </ul>
      {/* Botón para desplazarse hasta arriba */}
      <button
        className="fixed bottom-8 right-8 bg-[#fa8072] text-white p-2 rounded-full m-2 w-12 h-12"
        onClick={scrollToTop}
      >
        &#94;
      </button>
    </div>
  );
};

export default Navbar;
