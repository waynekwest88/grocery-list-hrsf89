import React from 'react';

const GroceryItem = (props) => (
  <div id="list-item">{props.item.description} {props.item.quantity}</div>
)

export default GroceryItem;