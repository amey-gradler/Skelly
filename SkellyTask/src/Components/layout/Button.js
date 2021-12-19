import React from 'react';
import PropTypes from 'prop-types';

function Button({ img, price }) {
  return (
    <div>
      <button
        className='btn2 btn-white img'
        style={price && { width: '150px' }}
      >
        <img src={img} alt='' />
        {price && <span className='price'>${price.toFixed(2)}</span>}
      </button>
    </div>
  );
}

Button.propTypes = {
  img: PropTypes.any,
};

export default Button;
