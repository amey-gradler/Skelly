import React from 'react';
import cart1 from '../../assets/cart1.jpg';
import cart2 from '../../assets/cart2.jpg';
import CartItem from './CartItem';

export const Cart = () => {
  const cartItems = [
    {
      id: 0,
      img: cart1,
      product_name: 'T-shirt',
      collection_name: 'Summer Vibes',
      hashtag: 216813,
      price: 89.99,
    },
    {
      id: 1,
      img: cart2,
      product_name: 'Basic Slim',
      collection_name: 'Fit T-Shirt',
      hashtag: 212315,
      price: 69.99,
    },
  ];
  let total = 0;
  cartItems.map((item) => (total += item.price));

  return (
    <div className='cartContainer'>
      <p>Your Cart</p>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className='total'>
        <p className='h'>Total Cost</p>
        <p className='totalP'>${total}</p>
      </div>
    </div>
  );
};
