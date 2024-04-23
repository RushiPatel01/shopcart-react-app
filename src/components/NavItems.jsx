import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  // Auth context
  const { user, logout } = useContext(AuthContext);

  // Handle logout
  const handleLogout = () => {
    logout();
  };

  // Add event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* Header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            {!user ? (
              <>
                <Link to="/signup" className="lab-btn me-3">
                  Create Account
                </Link>
                <Link to="/login">Log in</Link>
              </>
            ) : (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="\src\assets\images\logo\logo1.png" alt="" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <button onClick={handleLogout} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                  <li>
                    <Link to="/cart-page" className="dropdown-item">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="dropdown-item">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="dropdown-item">
                      Orders
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Header bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* Menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/cart-page" >
                      <FaShoppingCart className="fs-4"/>
                    </Link>
                  </li>
                </ul>
              </div>
              {!user ? (
                <>
                  <Link to="/signup" className="lab-btn me-3">
                    Create Account
                  </Link>
                  <Link to="/login">Log in</Link>
                </>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="\src\assets\images\logo\logo1.png" alt="" />
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <button onClick={handleLogout} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                    <li>
                      <Link to="/cart-page" className="dropdown-item">
                        Shopping Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="dropdown-item">
                        Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

              {/* Menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
