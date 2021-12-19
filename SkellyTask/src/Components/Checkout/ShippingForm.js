import React, { useState } from 'react';

export const ShippingForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    firstName: '',
    lastName: '',
    city: '',
    postalCode: '',
    phone: '',
    country: '',
  });

  const {
    email,
    address,
    firstName,
    lastName,
    city,
    postalCode,
    phone,
    country,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='form-container'>
      <p>Shipping Information</p>
      <form action='' className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-row'>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Address'
              name='address'
              value={address}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='First Name'
              name='firstName'
              value={firstName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='City'
              name='city'
              value={city}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Last Name'
              name='lastName'
              value={lastName}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Postal Code/ZIP'
              name='postalCode'
              value={postalCode}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Phone Number'
              name='phone'
              value={phone}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <select
              name='country'
              id='country'
              value={country}
              onChange={(e) => onChange(e)}
            >
              <option value='India'>India</option>
              <option value='Australia'>Australia</option>
              <option value='England'>England</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
