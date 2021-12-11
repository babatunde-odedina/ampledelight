import {
  faBars,
  faTimes,
  faHeart,
  faSearch,
  faShoppingCart,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scroll, setScroll] = useState(1);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.pageYOffset;
      setScroll(scrollCheck);
    };
    document.addEventListener('scroll', onScroll);
    if (showMenu) {
      toggleMenu();
    }
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <>
      <header>
        <a href='#' className='header_logo'>
          <FontAwesomeIcon icon={faUtensils} />
          AmpleDelight
        </a>

        <nav className={showMenu ? 'header_navbar active' : 'header_navbar'}>
          <Link to='home' activeClass='active' offset={-45} spy={true}>
            home
          </Link>
          <Link
            to='dishes'
            activeClass='active'
            offset={-45}
            spy={true}
          >
            dishes
          </Link>
          <Link to='about' activeClass='active' offset={-45} spy={true}>
            about
          </Link>
          <Link to='menu' activeClass='active' offset={-45} spy={true}>
            menu
          </Link>
          <Link to='reviews' activeClass='active' offset={-45} spy={true}>
            reviews
          </Link>
          <Link to='order' activeClass='active' offset={-45} spy={true}>
            order
          </Link>
        </nav>

        <div className='header_icons'>
          <FontAwesomeIcon
            icon={showMenu ? faTimes : faBars}
            id='menu_bar'
            onClick={toggleMenu}
          />
          <FontAwesomeIcon icon={faSearch} onClick={toggleSearch} />
          <a href='#'>
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>
      </header>
      <form
        action=''
        className={showSearch ? 'search-form active' : 'search-form'}
      >
        <input
          type='search'
          name=''
          id='search-box'
          placeholder='search here...'
        />
        <label htmlFor='search-box'>
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <FontAwesomeIcon icon={faTimes} id='close' onClick={toggleSearch} />
      </form>
    </>
  );
};

export default Header;
