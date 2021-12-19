import React from 'react';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='back'>
        <a className='back-btn' href='#'>
          <i className='fas fa-arrow-left'></i>
          Back
        </a>
      </div>

      <div className='btn-container2'>
        <button className='btn btn-white'>CONTINUE SHOPPING</button>
        <button className='btn btn-green'>PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};
