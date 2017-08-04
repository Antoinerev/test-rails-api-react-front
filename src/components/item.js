/* eslint-env browser */
import React, { Component } from 'react';

class Item extends Component {
  render() {
    let deleteButton ="";
    if(this.props.isActive === true) {
      deleteButton = <button onClick={this._handleDeleteItem.bind(this)}>X</button>;
    };
    let item = this.props.item;
    return(
      <div className="itemBox">
        <li>{item.name}</li>
        {deleteButton}
      </div>
    )
  }
  _handleDeleteItem(event) {
    event.preventDefault();
    // console.log(`item id: ${this.props.item.id}`);
    this.props.onDelete(this.props.item);
  }

}

export default Item;
