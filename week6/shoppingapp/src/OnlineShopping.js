import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);

    // Create an array of Cart objects
    this.items = [
      new Cart('Laptop', 60000),
      new Cart('Smartphone', 25000),
      new Cart('Headphones', 2000),
      new Cart('Keyboard', 1500),
      new Cart('Smartwatch', 5000)
    ];
  }

  render() {
    return (
      <div>
        <h1>Online Shopping Items</h1>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {this.items.map((item, index) => (
              <tr key={index}>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
