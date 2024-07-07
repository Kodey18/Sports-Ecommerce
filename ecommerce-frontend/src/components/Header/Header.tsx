import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import {Divider} from 'primereact/divider'
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";


        

const Header = () => {
  const cartCount = 11;
  const isAuthenticated = false;
  const menuRef = useRef<HTMLDivElement>(null);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [profileMenuActive, setProfileMenuActive] = useState<boolean>(false);

  const handleSearchFocus = () => {
    setSearchActive(!searchActive);
  }

  const handleMenuFocus = () => {
    setProfileMenuActive(true);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setProfileMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            onBlur={handleSearchFocus}
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
          <div className="profile-group">
            <img 
              onClick={handleMenuFocus}
              className="profile-logo" 
              src="/assets/profile.jpg" 
              alt="profile_logo" 
            />
            <div 
              ref={menuRef}
              className={`profile-menu ${profileMenuActive ? 'profile-menu-active' : ''}`}
            >
              <div className="profile-item">Profile</div>
              <div className="profile-item">Orders</div>
              <div className="profile-item">
                {/* If logged in then Logout will be show in the profile menu and if not logged in then Login will be shown. */}
                {
                  isAuthenticated ? (
                    <span>
                      Logout
                    </span>
                  ) : (
                    <NavLink to={'/login'}>
                      Login
                    </NavLink>
                  )
                }
              </div>
            </div>
          </div>          

        </div>

      </div>

    </div>
  </div>
};

export default Header;
