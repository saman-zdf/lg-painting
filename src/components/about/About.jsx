import React from 'react';
import image from '../../assets/images/aboutTest.jpg';
import './about.scss';
const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src={image} alt='S.Fayazi' className='about-image' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About us</h1>
        <div className='divider'></div>
        <p className='desc-lead'>
          LG painting have been servicing all areas of Sydney for over 10 years.
          Offering internal and external home painting and commercial building
          painting, and colour consultancy. We offer FREE written quotes, and a
          10% discount to Seniors Card holders.
        </p>
      </div>
    </div>
  );
};

export default About;
