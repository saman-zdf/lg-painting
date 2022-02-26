import React from 'react';
import { Link } from 'react-scroll';
import './menu.scss';
const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to='intro'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className='link'
          >
            Home
          </Link>
          {/* <a href='#intro'>Home</a> */}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            className='link'
          >
            About
          </Link>
          {/* <a href='#about'>About</a> */}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to='portfolio'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className='link'
          >
            Works
          </Link>
          {/* <a href='#portfolio'>Portfolio</a> */}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to='works'
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            className='link'
          >
            Results
          </Link>
          {/* <a href='#works'>Works</a> */}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to='testimonials'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className='link'
          >
            Testimonials
          </Link>
          {/* <a href='#testimonials'>Testimonials</a> */}
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className='link'
          >
            Contact
          </Link>
          {/* <a href='#contact'>Contact</a> */}
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
