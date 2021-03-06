import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import './app.scss';
import Menu from './components/menu/Menu';
import About from './components/about/About';
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Intro />
      <About />
      <Portfolio />
      <Works />
      <Testimonials />
      <Contact />
    </>
  );
};
//  <div className='app'>
//    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//    <div className='sections'>
//      <Intro />
//      <About />
//      <Portfolio />
//      <Works />
//      <Testimonials />
//      <Contact />
//    </div>
//  </div>;

export default App;
