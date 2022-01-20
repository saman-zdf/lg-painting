import React from 'react';
import image from '../../assets/images/man-1.jpg';
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
        <h1 className='about-title'>About Me</h1>
        <p className='about-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          impedit soluta esse aliquid! Numquam rerum quis aspernatur laudantium
          iure error sit, ipsum voluptas laboriosam illo, ratione nihil ea a
          nesciunt corporis vero dolore iste doloribus quod adipisci
          voluptatibus facilis tenetur. Voluptates sunt ea modi enim nulla rem
          consequuntur illum at?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In, harum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis, ut.
        </p>
      </div>
    </div>
  );
};

export default About;
