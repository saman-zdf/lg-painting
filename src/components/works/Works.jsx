import React, { useState, useEffect } from 'react';
import './works.scss';
import arrow from '../../assets/images/arrow.png';
import image1Before from '../../assets/images-2/8.jpg';
import image1After from '../../assets/images-2/9.jpg';
import image2Before from '../../assets/images-2/be-6.jpg';
import image2After from '../../assets/images-2/af-6.jpg';
import image3Before from '../../assets/images-2/be-4.jpg';
import image3After from '../../assets/images-2/af-4.jpg';
import image4Before from '../../assets/images-2/43.jpg';
import image4After from '../../assets/images-2/44.jpg';
import image5Before from '../../assets/images-2/be-1.jpg';
import image5After from '../../assets/images-2/af-1.jpg';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      beforeImg: image1Before,
      afterImg: image1After,
    },
    {
      id: 2,
      beforeImg: image2Before,
      afterImg: image2After,
    },
    {
      id: 3,
      beforeImg: image3Before,
      afterImg: image3After,
    },
    {
      id: 4,
      beforeImg: image4Before,
      afterImg: image4After,
    },
    {
      id: 5,
      beforeImg: image5Before,
      afterImg: image5After,
    },
  ];
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setCurrentSlide(
          (currentSlide === data.length ? 0 : currentSlide + 1 + data.length) %
            data.length
        ),
      5000
    );
    return () => clearTimeout(timeout);
  }, [currentSlide, data.length]);

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <>
      <div className='works' id='works'>
        <h2>Our Results</h2>
        <div className='divider'></div>
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
                      <h3>After</h3>
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
