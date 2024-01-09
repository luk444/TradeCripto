import React, { useState, useEffect } from 'react';
import triple from '../assets/triple.png';
import Modal from './Modal';

const CardUSDT = ({ title, currency, buttonColor, onTradeClick }) => {
  const [usdtToARSExchangeRate, setUsdtToARSExchangeRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [pesoValue, setPesoValue] = useState(0);

  useEffect(() => {
    const fetchExchangeRateUSDToARS = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        setUsdtToARSExchangeRate(data.rates.ARS);
      } catch (error) {
        console.error('Error fetching USDT to ARS exchange rate:', error);
      }
    };

    fetchExchangeRateUSDToARS();
  }, []);

  useEffect(() => {
    setPesoValue(amount * usdtToARSExchangeRate);
  }, [amount, usdtToARSExchangeRate]);

  const handleTradeClick = () => {
    onTradeClick();
    // Puedes realizar cualquier acción adicional al hacer clic en "Tradear"
  };

  return (
    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
      <h2 className='text-2xl font-bold text-center py-8'>{title} Trade</h2>
      <p className='text-center text-4xl font-bold'>{currency}</p>
      <div className='text-center font-medium'>
        <div className='conversor'>
          <br />
          <div className="mt-4">
            <label htmlFor="amountToChange" className="block text-sm font-medium text-gray-700">
              Ingresa monto a cambiar
            </label>
            <input
              id="amountToChange"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 rounded-md px-2 mt-1"
            />
            <button className={`border-2 rounded-md px-2 bg-${buttonColor} mt-2`}>{currency}</button>
          </div>
          <br />
          <div className="mt-4">
            <label htmlFor="amountToReceive" className="block text-sm font-medium text-gray-700">
              Monto a recibir en ARS
            </label>
            <input
              id="amountToReceive"
              type="number"
              value={pesoValue}
              readOnly
              className="border-2 rounded-md px-2 mt-1"
            />
          </div>
          <button className="border-2 rounded-md px-2 mt-2">ARS</button>
        </div>
      </div>
      <button className={`bg-${buttonColor} bg-[#fa8072] text-white px-4 py-2 rounded w-[120px] rounded-md font-medium my-6 mx-auto px-6 py-3`} onClick={handleTradeClick}>
        Tradear
      </button>
    </div>
  );
};

export default CardUSDT;
