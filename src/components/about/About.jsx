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
        <h1 className='about-title'>Our Prepration</h1>
        <div className='divider'></div>
        <p className='desc-lead'>
          Scrape and remove loose and peeling paint. <br /> Filling up all the
          minor cracks and gaps. <br /> Sealing paint of bare or new surfaces...{' '}
          <br />
          Washing down of mildew and oily surfaces where required. <br /> Drop
          sheets to be used at all the times. <br /> Stand down and dust clean
          where necessary. <br /> Rust to be ground back, treated and primed
          prior to painting as requested.
          <br /> Flexible filler to be used where required. <br /> There is no
          allowance for sanding new plasterboard.
        </p>
        {/* <p className='about-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          impedit soluta esse aliquid! Numquam rerum quis aspernatur laudantium
          iure error sit, ipsum voluptas laboriosam illo, ratione nihil ea a
          nesciunt corporis vero dolore iste doloribus quod adipisci
          voluptatibus facilis tenetur.
        </p> */}
      </div>
    </div>
  );
};

export default About;
