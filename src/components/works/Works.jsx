import React, { useState, useEffect } from 'react';
import './works.scss';
import manLadder from '../../assets/images/man-paint-ladder.jpg';
import manPaint from '../../assets/images/man-paint.jpg';
import arrow from '../../assets/images/arrow.png';
import brush from '../../assets/images/brush.jpg';
import brush2 from '../../assets/images/brush2.jpg';
import colors from '../../assets/images/colors.jpg';
import roller from '../../assets/images/roller.jpg';
import rollerPaint from '../../assets/images/roller-paint.jpg';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      beforeImg: manLadder,
      afterImg: manPaint,
    },
    {
      id: 2,
      beforeImg: brush,
      afterImg: brush2,
    },
    {
      id: 3,
      beforeImg: colors,
      afterImg: roller,
    },
    {
      id: 4,
      beforeImg: rollerPaint,
      afterImg: colors,
    },
  ];
  // useEffect(() => {
  //   const timeout = setTimeout(
  //     () => setCurrentSlide((currentSlide + 1 + data.length) % data.length),
  //     5000
  //   );
  //   return () => clearTimeout(timeout);
  // }, [currentSlide, data.length]);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <>
      <div className='works' id='works'>
        <h2>Our Results</h2>
        <div
          className='slider'
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((item) => (
            <div className='container' key={item.id}>
              <div className='item'>
                <div className='left'>
                  <div className='leftContainer'>
                    <div className='imgContainer'>
                      <h3>Before</h3>
                      <img src={item.beforeImg} alt='' />
                    </div>
                  </div>
                </div>
                <div className='right'>
                  <div className='rightContainer'>
                    <div className='imgContainer'>
                      <h3>after</h3>
                      <img src={item.afterImg} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src={arrow}
          alt='arrow'
          className='arrow left'
          onClick={() => handleClick('left')}
        />
        <img
          src={arrow}
          alt='arrow'
          className='arrow right'
          onClick={() => handleClick('right')}
        />
      </div>
    </>
  );
};

export default Works;
