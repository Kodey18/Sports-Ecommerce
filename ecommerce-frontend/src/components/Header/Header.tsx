import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {Divider} from 'primereact/divider'
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";


        

const Header = () => {
  const cartCount = 11;
  const isAuthenticated = false;
  const [searchActive, setSearchActive] = useState<boolean>(false);

  const handleSearchFocus = () => {
    setSearchActive(true);
  }

  const handleSearchBlur = () => {
    setSearchActive(false);
  }

  return <div className="header-container">
    <div className="navbar">
      <div className="navbar-left">
          
        <div className="navbar-logo">
          <NavLink to={'/'}>
            <img src="/assets/sports_logo3.png" alt="navbar_logo" />
          </NavLink>
        </div>

        <div className={`navbar-search ${searchActive ? "navbar-search-active" : null}`}>
          <IoIosSearch className="navbar-search-icon" />
          <input 
            onFocus={handleSearchFocus} 
            onBlur={handleSearchBlur}
            type="text" 
            placeholder="Search" 
            className="navbar-search-input" 
          />
        </div>

      </div>

      <div className="navbar-links">
        {/* <div className=""></div>   */}
      </div>

      <div className="navbar-utility">
        {/*   
        Cart Count should be zero till Login and if clicked on cart before login then popup Should be show to login 
        */}
        <div className="utility-cart">
          <span className="cart-text">My Cart</span>
          <span className="cart-group">
            <IoBagCheckOutline className="cart-icon" />
            <span className="cart-count" >{cartCount}</span>
          </span>
        </div>

        <div className="utility-profile">
          <img className="profile-logo" src="/assets/profile.jpg" alt="profile_logo" />
          {/* If logged in then Logout will be show in the profile menu and if not logged in then Login will be shown. */}
          {
            !isAuthenticated && 
            <NavLink className={"login-link"} to={'/login'}>
              Login
            </NavLink>
          }
        </div>

      </div>

    </div>
  </div>
};

export default Header;
