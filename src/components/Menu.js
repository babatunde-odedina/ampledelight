import {
  faHeart,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Menu = ({ items }) => {
  return (
    <section className='menu' id='menu'>
      <h3 className='sub-heading'>Our Menu</h3>
      <h1 className='heading'>today's specialty</h1>

      <div className='box-container'>
        {items.map((item, index) => {
          return (
            <div className='box' key={index}>
              <div className='image'>
                <img src={item.image} alt='' />
                <a href='#'>
                  <FontAwesomeIcon icon={faHeart} />
                </a>
              </div>
              <div className='content'>
                <div className='stars'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <h3>{item.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, adipisci.
                </p>
                <a href='#' className='btn'>
                  Add to cart
                </a>
                <span className='price'>#{item.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
