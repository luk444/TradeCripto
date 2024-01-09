import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  const handleRedirect = () => {
    const section3 = document.getElementById('seccion3');
    if (section3) {
      section3.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='text-white'>
      <section id="seccion1"></section>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#fa8072] font-bold p-2'>
          CRECIENDO CON ANALÍTICA DE DATOS
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Crece con datos.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Financiamiento Rápido : 
            <Typed
              className='bg-[#fa8072] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
              strings={['WLD', 'BTC', 'USDT']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Nos encargamos de analizar datos para aumentar los ingresos de las plataformas WLD, BTC y USDT.</p>
        <button
          className='bg-[#fa8072] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'
          onClick={handleRedirect}
        >
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default Hero;
