import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Products</Link>
      <Link to="/styles">Styles</Link>
    </nav>
    <div className="logo light">
      <Link to="/">Allis Fig Pottery</Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />
    </nav>
  </div>
);

export default HeaderNav;
