import React, { useEffect, useRef } from 'react';
import './intro.scss';
import image from '../../assets/images/IMG_2330.jpg';
import down from '../../assets/images/down.png';
import { init } from 'ityped';
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [' Interior', ' Exterior', ' Commercial', ' Industrial'],
    });
  }, []);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src={image} alt='hero' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h1>You Are Covered</h1>
          <p>
            We are licence bonded and insured that our work is covered. You will
            get the best result in your business or home with Peace of mind.
          </p>
          <h3>
            Our Services
            <span ref={textRef}></span>
          </h3>
        </div>
        {/* <a href='#portfolio'>
          <img src={down} alt='down' />
        </a> */}
      </div>
    </div>
  );
};

export default Intro;
