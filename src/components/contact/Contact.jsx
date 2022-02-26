import React, { useEffect, useState, useRef } from 'react';
import './contact.scss';
import { Element } from 'react-scroll';
import emailJs from '@emailjs/browser';
const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailJs
      .sendForm(
        'service_bwvfygi',
        'template_tko0r3h',
        form.current,
        '0rI_QsMprUTjiz3id'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
    <Element name='contact'>
      <div className='contact'>
        <div className='left'>
          <div className='itemContainer'>
            <i className='fas fa-envelope icon'></i>
            <span>lg.paintingservices@yahoo.com</span>
          </div>
          <div className='itemContainer'>
            <i className='fas fa-phone-alt'></i>
            <span>
              <a href='tel:+61416608482' className='phone'>
                0416608482 Click Here To Call
              </a>
            </span>
          </div>
          <div className='socials'>
            <div>
              <a
                href='https://www.instagram.com/lg.painting.services'
                target='_blank'
              >
                <i class='fab fa-instagram'></i>
              </a>
            </div>
            <div>
              <a
                href='https://m.facebook.com/LG.Painting.Services/'
                target='_blank'
              >
                <i class='fab fa-facebook'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='right'>
          <h2>Contact Me</h2>
          <form onSubmit={sendEmail} ref={form}>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='email' placeholder='Email' name='user_email' />
            <input type='text' placeholder='Phone No.' name='user_phone' />
            <textarea name='message' placeholder='Message'></textarea>
            <button type='submit' name='submit' value='send'>
              Send
            </button>
            {message && (
              <span>Thanks for your message, I will reply very soon :)</span>
            )}
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
