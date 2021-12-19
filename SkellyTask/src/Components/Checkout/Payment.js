import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import paypal from '../../assets/paypal.png';
import visa from '../../assets/visa.png';
import mastercard from '../../assets/mastercard.png';
import discover from '../../assets/discover.png';
import razorpay from '../../assets/razorpay.png';
import Button from '../layout/Button';
export const Payment = () => {
  const payments = [paypal, visa, mastercard, discover, razorpay];

  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal');

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(script);
    };
    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, []);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
  };

  return (
    <div className='payment'>
      <p>Payment Method</p>
      <div className='btn-container'>
        {payments.map((payment, index) => (
          <Button key={index} img={payment} />
        ))}
        <PayPalButton amount={159} onSuccess={successPaymentHandler} />
      </div>
    </div>
  );
};
