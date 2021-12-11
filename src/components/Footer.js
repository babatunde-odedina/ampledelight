import React from 'react';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='box-container'>
        <div className='box'>
          <h3>Locations</h3>
          <a href='#'>Nigeria</a>
          <a href='#'>Ghana</a>
          <a href='#'>South Africa</a>
          <a href='#'>USA</a>
          <a href='#'>Netherlands</a>
        </div>

        <div className='box'>
          <h3>Quick links</h3>
          <a href='#'>home</a>
          <a href='#'>dishes</a>
          <a href='#'>about</a>
          <a href='#'>menu</a>
          <a href='#'>review</a>
          <a href='#'>order</a>
        </div>

        <div className='box'>
          <h3>Contact info</h3>
          <a href='#'>(+234)81-8213-0057</a>
          <a href='#'>babsodedina@gmail.com</a>
          <a href='#'>babsodedina@yahoo.com</a>
          <a href='#'>lagos, Nigeria</a>
        </div>

        <div className='box'>
          <h3>follow us</h3>
          <a href='#'>facebook</a>
          <a href='#'>twitter</a>
          <a href='#'>instagram</a>
          <a href='#'>linkedin</a>
        </div>
      </div>

      <div className='credit'>
        copyright &copy; 2021 by <span>Odedina Babatunde</span>
      </div>
    </section>
  );
};

export default Footer;
