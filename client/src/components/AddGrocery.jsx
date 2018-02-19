import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  addGroceryOnClick() {
    var lastId = this.state.list[this.state.list.length - 1].id
    this.setState({
      list: this.state.list.push({
        id: lastId++, 
        quanity: $('#quantity-input').val(), 
        decription: $('#description-input').val(),
      })
    });
  }

  render () {
    return <div><GroceryList list={this.state.list} addGroceryOnClick={this.addGroceryOnClick.bind(this)} /></div>;
  }
}

export default AddGrocery;

