import React from 'react';
import './topbar.scss';

import image from '../../assets/images/IMG_2330.jpg';
const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            LG Painting
          </a>
          <div className='itemContainer'>
            <i class='fas fa-user icon'></i>
            <span>+61423555666</span>
          </div>
          <div className='itemContainer'>
            <i class='fas fa-envelope icon'></i>
            <span>lgpaintingservices@gmial.com</span>
          </div>
        </div>
        <div className='right'>This is right</div>
      </div>
    </div>
  );
};

export default Topbar;
