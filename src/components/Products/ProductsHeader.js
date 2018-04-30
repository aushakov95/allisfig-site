import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';
import HeaderNav from '../global/HeaderNav';

class ProductsHeader extends Component {
  render() {
    return (

      <HeaderNav />

    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
