import React from 'react';
import './menu.scss';
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#about'>About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#works'>Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
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
          <a href='#'>
            <i class='fab fa-facebook'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
