import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Ct from '../assets/Ct.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Agregar un listener para ocultar el menú desplegable al hacer clic en cualquier parte de la página
    const handleOutsideClick = () => {
      if (nav) {
        setNav(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [nav]);

  return (
    <div className='flex flex-col md:flex-row justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-3xl font-bold text-[#fa8072] mb-4 md:mb-0'>
        CRIPTO TRADE.</h1>

      {/* Barra de navegación para pantallas grandes */}
      <ul className='hidden md:flex space-x-4'>
        <li>
          <a href="#seccion1">Inicio</a>
        </li>
        <li>
          <a href="#seccion2">Nosotros</a>
        </li>
        <li>
          <a href="#seccion3">Trade</a>
        </li>
      </ul>

      {/* Icono del menú para pantallas pequeñas */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <ul className={`nav-menu ${nav ? 'nav-menu-open' : 'nav-menu-closed'} md:hidden fixed left-0 top-0 w-[60%] h-full bg-[#000300] transition-all duration-500 ease-in-out`}>
        <li>
          <a href="#seccion1" onClick={handleNav}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#seccion2" onClick={handleNav}>
            Nosotros
          </a>
        </li>
        <li>
          <a href="#seccion3" onClick={handleNav}>
            Trade
          </a>
        </li>
      </ul>

      {/* Botón para desplazarse hasta arriba */}
        <button
          className="fixed bottom-8 right-8 bg-[#fa8072] text-white p-2 rounded-full m-2 w-12 h-12"
          onClick={scrollToTop}
        >
           &#94; {/* Código HTML para el símbolo "^" */}
        </button>
    </div>
  );
};

export default Navbar;
