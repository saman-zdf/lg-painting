import React, { useEffect, useState } from 'react';
import './contact.scss';
import shake from '../../assets/images/shake.svg';
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      setMessage(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <div className='imgContainer'>
          <img src={shake} alt='' />
        </div>
        <div className='itemContainer'>
          <i className='fas fa-envelope icon'></i>
          <span>lgpaintingservices@gmail.com</span>
        </div>
        <div className='itemContainer'>
          <i className='fas fa-phone-alt'></i>
          <span>
            <a href='tel:+61416608482' className='phone'>
              +61416608482 Click Here To Call
            </a>
          </span>
        </div>
      </div>
      <div className='right'>
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' name='email' />
          <input type='email' placeholder='Email' name='email' />
          <input type='text' placeholder='Phone No.' name='text' />
          <textarea name='message' placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && (
            <span>Thanks for your message, I will reply very soon :)</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
