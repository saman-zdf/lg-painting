import React from 'react';
import './testimonials.scss';
import rightArrow from '../../assets/images/right-arrow.png';
import man1 from '../../assets/images/man-1.jpg';
import man2 from '../../assets/images/man-2.jpg';
import woman1 from '../../assets/images/woman-1.jpg';
import woman2 from '../../assets/images/woman-2.jpg';
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: 'Jonas Hernandez',

      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus impedit eum recusandae libero placeat totam dolore ut sit atque beatae!',
      image: man1,
      icon: rightArrow,
    },
    {
      id: 2,
      name: 'Ashley Johnson',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus impedit eum recusandae libero placeat totam dolore ut sit atque beatae!',
      image: woman1,
      icon: rightArrow,
      featured: true,
    },
    {
      id: 3,
      name: 'Sarah Smith',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus impedit eum recusandae libero placeat totam dolore ut sit atque beatae!',
      image: woman2,
      icon: rightArrow,
    },
    {
      id: 4,
      name: 'Alex Doe',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus impedit eum recusandae libero placeat totam dolore ut sit atque beatae!',
      image: man2,
      icon: rightArrow,
    },
  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h2>Customer Reviews </h2>
      <div className='container'>
        {data.map((item) => (
          <div className={item.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img src={item.icon} alt='' className='right' />
              <img src={item.image} alt='person' className='user' />
            </div>
            <div className='center'>{item.desc}</div>
            <div className='bottom'>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
