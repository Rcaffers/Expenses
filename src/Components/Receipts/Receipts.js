import React, { Component } from 'react';
import Receipt from './Receipt/Receipt';

class Receipts extends Component {

  render () {

    return this.props.receipts.map((receipt, index) => {
    return <Receipt
        delete={() => this.props.deleteReceipt(index)}
        shop={receipt.shop}
        item={receipt.item}
        date={receipt.date}
        price={receipt.price}
        key={receipt.id} />
      });
    };
  };

export default Receipts;