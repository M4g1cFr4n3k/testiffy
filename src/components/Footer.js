import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O nas</h2>
            <Link to='/sign-up'>Informacje</Link>
            <Link to='/'>Praca</Link>
          </div>
          <div class='footer-link-items'>
                <h2>Skontaktuj się z nami</h2>
            <Link to='/contact'>Kontakt</Link>
            <Link to='/contact'>Support</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com' target='_blank'>Facebook <i class='fab fa-facebook-f' /></a>
            <a href='https://www.instagram.com' target='_blank'>Instagram <i class='fab fa-instagram' /></a>
            <a  href='https://www.tiktok.com/pl-PL/' target='_blank'>Tiktok <i class='fab fa-tiktok' /></a>
            <a href='https://www.youtube.com' target='_blank'>Youtube <i class='fab fa-youtube' /></a>
            <a href='https://twitter.com' target='_blank'>Twitter <i class='fab fa-twitter' /></a>
            <a href='https://www.linkedin.com' target='_blank'>LinkedIn <i class='fab fa-linkedin' /></a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src="logotyp.png"></img>
            </Link>
          </div>
          <small class='website-rights'>Testify © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link-facebook'
              href='https://www.facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link-instagram'
              href='https://www.instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
               class='social-icon-link-tiktok'
               href='https://www.tiktok.com/pl-PL/'
               target='_blank'
               aria-label='tiktok'
            >
                <i class='fab fa-tiktok' />
            </a>
            <a
              class='social-icon-link-youtube'
              href='https://www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link-twitter'
              href='https://twitter.com'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link LinkedIn'
              href='https://www.linkedin.com'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;