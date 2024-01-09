// Cards.jsx
import React, { useState } from 'react';
import CardBTC from './CardBTC';
import CardWLD from './CardWLD';
import CardUSDT from './CardUSDT';
import Modal from './Modal';

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState('');

  const handleTradeClick = (cardTitle) => {
    setSelectedCard(cardTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <body className='bg-greey-200'>
      <section id="seccion3"><hr />
      </section>
        <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <CardBTC title="BTC" currency="BTC" buttonColor="#fff" onTradeClick={() => handleTradeClick('BTC')} />
        <CardWLD title="WLD" currency="WLD" buttonColor="#fff" onTradeClick={() => handleTradeClick('WLD')} />
        <CardUSDT title="USDT" currency="USDT" buttonColor="#fff" onTradeClick={() => handleTradeClick('USDT')} />
      </div>

      {/* Modal común para todas las tarjetas */}
      {isModalOpen && <Modal onClose={handleCloseModal} cardTitle={selectedCard} />}
    </div>
    </body>

  );
};

export default Cards;
