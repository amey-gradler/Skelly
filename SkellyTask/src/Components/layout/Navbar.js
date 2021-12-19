import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-white'>
      <p>
        <i className='fas fa-map'></i>
        <a href='#'>
          <span>E-</span>Shop
        </a>
      </p>

      <ul className='List1'>
        <li>
          <a href='/men'>Men</a>
        </li>
        <li>
          <a href='/women'>Women</a>
        </li>
        <li>
          <a href='/kids'>Kids</a>
        </li>
      </ul>

      <ul className='List2'>
        <li>
          <a href='/search' className='hide-sm'>
            <i className='fas fa-search'></i>
          </a>
        </li>
        <li>
          <a href='/cart' className='hide-sm'>
            <i className='fas fa-shopping-cart'></i>
          </a>
        </li>
        <li>
          <a href='/user' className='hide-sm'>
            <i className='far fa-user'></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
