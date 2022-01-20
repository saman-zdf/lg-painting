import React from 'react';
import './topbar.scss';

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            LG Painting
          </a>
          <div className='itemContainer'>
            <i className='fas fa-phone-alt'></i>
            <a href='tel:+61416608482' className='phone'>
              0416608482
            </a>
          </div>
          <div className='itemContainer'>
            <i className='fas fa-envelope icon'></i>
            <span>lgpaintingservices@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
