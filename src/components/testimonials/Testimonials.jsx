import React from 'react';
import './testimonials.scss';
import rightArrow from '../../assets/images/right-arrow.png';
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: 'Chris',

      desc: 'Good communication. Friendly. Honest. And high attention to detail in painting. We are really happy with the job they did. We will definitely be using them for any future painting work.',
      address: 'Leumeah, NSW',
      icon: rightArrow,
    },
    {
      id: 2,
      name: 'Debra',
      desc: 'Professional friendly gentleman who are a pleasure to deal with. Highly recommend these painters for anyone looking for an pleasant professional service.',
      address: 'Picnic Point, NSW',
      icon: rightArrow,
    },
    {
      id: 3,
      name: 'George',
      desc: 'I am very happy with the service provided. Louie is very professional from the very start to finish. The quote is also very competitive. I highly recommend his service to everyone.',
      address: 'Castle Hill, NSW',
      icon: rightArrow,
    },
    {
      id: 4,
      name: 'Cecilia M',
      desc: 'Knowledgable, friendly, on time, take their time to explain the process and what to expect. I was informed and guided all the way through. It was a pleasure dealing with Louie and team. My apartment looks great!',
      address: 'Sutherland, NSW',
      icon: rightArrow,
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h2>Customer Reviews</h2>
      <div className='divider'></div>
      <div className='container'>
        {data.map((item) => (
          <div className={item.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img src={item.icon} alt='' className='right' />
            </div>
            <div className='center'>
              <p>{item.desc}</p>
            </div>
            <div className='bottom'>
              <h3>{item.name}</h3>
              <p>From: {item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
