import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart,
  faStar,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Dishes = ({ dishes }) => {
  return (
    <section className='dishes' id='dishes'>
      <h3 className='sub-heading'>Our Dishes</h3>
      <h1 className='heading'>Popular Dishes</h1>

      <div className='box-container'>
        {dishes.map((dish, index) => {
          return (
            <div className='box' key={index}>
              <a href='#' className='heart'>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href='#' className='eye'>
                <FontAwesomeIcon icon={faEye} />
              </a>
              <img src={dish.image} alt='' />
              <h3>{dish.title}</h3>
              <div className='stars'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
              </div>
              <span>#{dish.price}</span>
              <a href='#' className='btn'>
                Add to Cart
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dishes;
