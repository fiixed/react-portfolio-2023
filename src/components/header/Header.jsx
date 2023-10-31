import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpeg';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h4 className='hey'>Hey! I'm</h4>

        <h1>Andrew Sherrod</h1>
        <h4 className='text-light'>
          React Native Mobile Developer / React Express Full Stack Developer
        </h4>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
