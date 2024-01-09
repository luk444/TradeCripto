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
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <CardBTC title="BTC" currency="BTC" buttonColor="#00df9a" onTradeClick={() => handleTradeClick('BTC')} />
        <CardWLD title="WLD" currency="WLD" buttonColor="#00df9a" onTradeClick={() => handleTradeClick('WLD')} />
        <CardUSDT title="USDT" currency="USDT" buttonColor="#00df9a" onTradeClick={() => handleTradeClick('USDT')} />
      </div>

      {/* Modal común para todas las tarjetas */}
      {isModalOpen && <Modal onClose={handleCloseModal} cardTitle={selectedCard} />}
    </div>
  );
};

export default Cards;
