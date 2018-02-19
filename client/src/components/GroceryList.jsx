import React from 'react';
import GroceryItem from './GroceryItem.jsx';

const GroceryList = (props) => (
  <div className="groceries"> 
    <div id="add-grocery"> 
      <button id="submit" onClick={function(){props.addGroceryOnClick()}}>Add Grocery</button>
    </div>
    {props.list.map(function(listItem) {
    return <GroceryItem item={listItem} />
    })} 
  </div>
)

export default GroceryList;