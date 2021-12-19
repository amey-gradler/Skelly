import React from 'react';
import { Cart } from './Cart';
import { Delivery } from './Delivery';
import { Payment } from './Payment';
export const Right = () => {
  return (
    <div className='right'>
      <div className='progress hide-sm'>
        <i className='fas fa-shopping-cart cart'></i>
        <i className='fas fa-truck truck'></i>
      </div>
      <div className='rightC'>
        <div className='pd'>
          <Payment />
          <Delivery />
        </div>
        <Cart />
      </div>
    </div>
  );
};
