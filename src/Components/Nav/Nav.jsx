import { useState } from 'react';
import '../NavBar/Style.css';
import logo from "../../assets/logo.jpg";

const MobileMenu = () => {
  return (
    <div className={'mobile-menu'}>
       <a href='#news'>About Us</a>
          <a href='#shop'>Spomsers</a>
          <a href='#contact'>Competition</a>
          <a href='#about'>Workshops</a>
          <a href='#about'>Speakers</a>
          <a href='#about'>Merchandice</a>
    </div>
  );
};

function Nav() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className='topnav'>
        <div className='header'>
        <div className='logo'>
        <img src={logo} alt="Logo" className="logo-with-name-logo" loading="lazy" />
        </div>

        <div className='menu'>
          <a href='#home' className='active-link'>
            Home
          </a>
          <a href='#news'>About Us</a>
          <a href='#shop'>Spomsers</a>
          <a href='#contact'>Competition</a>
          <a href='#about'>Workshops</a>
          <a href='#about'>Speakers</a>
          <a href='#about'>Merchandice</a>
        </div>

        <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
        </div>
      </div>

      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &times;
        </button>
      )}
    </>
  );
}

export default Nav;