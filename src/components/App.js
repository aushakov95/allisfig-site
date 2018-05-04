import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import CheckoutContainer from './Checkout/CheckoutContainer';
import StylesContainer from './Styles/StylesContainer';
import ProductsContainer from './Products/ProductsContainer';
import SingleProductContainer from './Products/SingleProductContainer';
import OrderConfirmationContainer from './Orders/OrderConfirmationContainer';
import NotFound from './global/NotFound';
import MobileNav from './global/Mobile/MobileNav';
import Footer from './global/Footer';

const App = props => (
  <div>
    { <MobileNav /> }
    <StripeProvider apiKey="pk_test_AjjYCAe4gb9KcVYKSuy8Isr4">
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/cart" component={Cart} />
      <Route path="/styles" component={StylesContainer} />
      <Route path="/order-confirmation" component={OrderConfirmationContainer} />
      <Route path="/products" component={ProductsContainer} />

          <Route path="/checkout" component={CheckoutContainer} />

      <Route
        path="/order-confirmation"
        component={OrderConfirmationContainer}
      />
      <Route path="/product/:id" component={SingleProductContainer} />
      <Route path="*" component={NotFound} />
    </Switch>
    </StripeProvider>
    <Footer />
  </div>
);

export default App;
