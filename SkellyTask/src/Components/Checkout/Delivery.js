import React from 'react';
import Button from '../layout/Button';
import dhl from '../../assets/dhl.png';
import fedex from '../../assets/fedex.png';
import inpost from '../../assets/inpost1.png';
import delhivery from '../../assets/delivery.jpg';
export const Delivery = () => {
  const delivery = [
    {
      img: dhl,
      price: 50.0,
    },

    {
      img: fedex,
      price: 12.0,
    },
    {
      img: inpost,
      price: 10.0,
    },
    {
      img: delhivery,
      price: 70.12,
    },
  ];
  return (
    <div className='delivery'>
      <p>Delivery Method</p>
      <div className='btn-container'>
        {delivery.map((payment, index) => (
          <Button key={index} img={payment.img} price={payment.price} />
        ))}
      </div>
    </div>
  );
};
