import React from 'react';
import './footer.css';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Andrew Sherrod
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/absherrod/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/fiixed">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Andrew Sherrod. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
