import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
         <header id="header">
      <div id="header-wrap">
        <nav className="secondary-nav border-bottom">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-4 header-contact">
                <p>Let's talk! <strong>+57 444 11 00 35</strong>
                </p>
              </div>
              <div className="col-md-4 shipping-purchase text-center">
                <p>Free shipping on a purchase value of $200</p>
              </div>
              <div className="col-md-4 col-sm-12 user-items">
                <ul className="d-flex justify-content-end list-unstyled">
                  <li>
                    <NavLink to="/login">
                      <i className="icon icon-user"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cart">
                      <i className="icon icon-shopping-cart"></i>
                    </NavLink>
                  </li>
                  <li>
                    <a href="wishlist.html">
                      <i className="icon icon-heart"></i>
                    </a>
                  </li>
                  <li className="user-items search-item pe-3">
                    <a href="#" className="search-button">
                      <i className="icon icon-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <nav className="primary-nav padding-small">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-2 col-md-2">
                <div className="main-logo">
                  <NavLink to="/">
                    <img src="images/main-logo.png" alt="logo" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-10 col-md-10">
                <div className="navbar">

                  <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                    <ul className="menu-list">

                      <li className="menu-item">
                        <NavLink to="/" className="item-anchor  d-flex align-item-center" data-effect="Home">Home</NavLink>
                      </li>

                      <li><NavLink to="/about" className="item-anchor" data-effect="About">About</NavLink></li>

                      <li className="menu-item">
                        <NavLink to="/shop" className="item-anchor d-flex align-item-center" data-effect="Shop">Shop</NavLink>
                      
                      </li>


                      <li className="menu-item has-sub">
                        <NavLink to="/blog" className="item-anchor d-flex align-item-center" data-effect="Blog">Blog</NavLink>
                       
                      </li>

                      <li><NavLink to="/contact" className="item-anchor" data-effect="Contact">Contact</NavLink></li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header