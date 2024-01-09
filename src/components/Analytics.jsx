import React from 'react';
import Laptop from '../assets/laptop.jpg';
import Laptop1 from '../assets/laptop1.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 text-black'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[600px] mx-auto mt-40' src={Laptop} alt='/' />
        <div className='w-full py-16 text-black px-4'>
          <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
            <section id="seccion2">
                </section>
              <h1 className='text-[#fa8072] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                1. Optimiza tus Transacciones de Criptomonedas
              </h1>
              <p className='font-bold'>Calcula la cantidad que recibirás en ARS al ingresar la cantidad de criptomonedas que posees.</p>
            </div>
            <div className='lg:col-span-2 my-4'>
              <h1 className='text-[#fa8072] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                2. Proceso de Trading sin Esfuerzo
              </h1>
              <p className='font-bold'>Simplemente haz clic en 'Trade' para la criptomoneda especificada, y se generará una dirección de billetera para tu transacción.</p>
            </div>
            <div className='lg:col-span-2 my-4'>
              <h1 className='text-[#fa8072] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                3. Recibe tu Depósito en ARS
              </h1>
              <p className='font-bold'>Luego, ingresa tu CVU/CBU/ALIAS para recibir el depósito en ARS.</p>
            </div>
            <div className='lg:col-span-2 my-4'>
              <h1 className='text-[#fa8072] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                4. Acreditacion inmediata!
              </h1>
              <p className='font-bold'>Al instante que se valide la transaccion, veras reflejado el Deposito desde la Entidad "WLDC Trade"</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default Analytics;
