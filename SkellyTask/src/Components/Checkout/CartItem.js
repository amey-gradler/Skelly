import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  const { id, img, product_name, collection_name, hashtag, price } = item;
  return (
    <div className='cart-item'>
      <img src={img} alt='' />
      <div className='prod-desc'>
        <p>{product_name}</p>
        <p>{collection_name}</p>
        <p className='hashtag'>#{hashtag}</p>
      </div>

      <p className='cost'>${price}</p>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.any,
  img: PropTypes.any,
};

export default CartItem;
