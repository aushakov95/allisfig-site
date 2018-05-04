import React from 'react';
import {CardElement} from 'react-stripe-elements';

class CardSection extends React.Component {
  render() {
    return (
      <div className="stripe-card-section">
        <CardElement style={{base: {fontSize: '20px', fontFamily: 'Montserrat, sans-serif', color: '#50505b'}}} />
      </div>
    );
  }
};

export default CardSection;
