import {
  faDollarSign,
  faHeadset,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutImg from '../images/about-img.png';
import React from 'react';

const About = () => {
  return (
    <section className='about' id='about'>
      <h3 className='sub-heading'>About us</h3>
      <h1 className='heading'>Why choose us?</h1>

      <div className='row'>
        <div className='image'>
          <img src={aboutImg} alt='' />
        </div>
        <div className='content'>
          <h3>Best food in the country</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            saepe unde quae. Consectetur, dolores delectus beatae distinctio ea
            ab? Accusamus laudantium itaque enim quaerat rerum doloribus,
            reiciendis architecto consequatur!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            saepe unde quae. Consectetur, dolores delectus beatae distinctio
          </p>
          <div className='icons-container'>
            <div className='icons'>
              <FontAwesomeIcon icon={faShippingFast} />
              <span>free delivery</span>
            </div>
            <div className='icons'>
              <FontAwesomeIcon icon={faDollarSign} />
              <span>easy payments</span>
            </div>
            <div className='icons'>
              <FontAwesomeIcon icon={faHeadset} />
              <span>24/7 service</span>
            </div>
          </div>
          <a href='#' className='btn'>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
