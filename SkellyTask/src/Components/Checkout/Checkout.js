import React from 'react';
import { Right } from './Right';
import { ShippingForm } from './ShippingForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { Footer } from './Footer';

const Checkout = ({ auth: { isAuthenticated }, logout }) => {
  return (
    <>
      <div className='checkoutContainer'>
        <div className='shipping'>
          <p>Shipping and Payment</p>

          <div className='upButtons'>
            {isAuthenticated ? (
              <a href='#!' onClick={logout} className='btn btn-green'>
                LOG OUT
              </a>
            ) : (
              <>
                {' '}
                <a href='/login' className='btn btn-green'>
                  LOG IN
                </a>
                <a href='/register' className='btn btn-white'>
                  SIGN UP
                </a>
              </>
            )}
          </div>
          <ShippingForm />
        </div>

        <Right />
      </div>
      <Footer />
    </>
  );
};

Checkout.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Checkout);
