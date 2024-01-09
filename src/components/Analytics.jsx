import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
           Optimize Your Cryptocurrency Transactions
          </h1>
          <p>Enter the amount of cryptocurrency you have to calculate the amount you'll receive in ARS.</p>
        </div>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Effortless Trading Process
          </h1>
          <p>Simply click on 'Trade' for the specified cryptocurrency, and a Wallet Address will be generated for your transaction.</p>
        </div>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Receive ARS Deposit
          </h1>
          <p>Next, enter your CVU/CBU/ALIAS to receive the deposit in ARS.</p>
        </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default Analytics;
