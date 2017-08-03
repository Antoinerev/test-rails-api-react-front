/* eslint-env browser */
import React, { Component } from 'react';
import $ from 'jquery';

import {TodoItemForm} from './todoItemForm.js';
// import logo from './logo.svg';
// import '../App.css';


export class TodoList extends Component {
  constructor() {
    super();
    // const todo = this.props.todo;
    // this.state = {active: false};
  }
  render() {
    var isActive ="";
    if(this.props.activeTodo === this.props.id) {
      isActive = "active";
    };
    return(
      <ul className={"small-box "+ isActive} onClick={this._handleActivateTodo.bind(this)} >
        <li key={this.props.id}>
          <h3 className="TodoTitle" >{this.props.title}</h3>
          <h5>Yolo</h5>
          <button onClick={this._handleAddItemToTodolist.bind(this)}>"Add Item"</button>
          <ol id={this.props.id}>
          {this.props.all_items.map(item => <li key={item.id}>{item.name}</li> )}
          </ol>
          <TodoItemForm />
        </li>
      </ul>
    );
  }
  _handleActivateTodo(event) {
    event.preventDefault();
    this.props.activateTodo(this.props.id);
  }

  _handleAddItemToTodolist(e) {
    e.preventDefault();

    let content = $('#'+ this.props.id).append($('TodoItemForm'));
    console.log('#'+ this.props.id);
  }

  _addTodoItem(itemName) {
    const todoId = this.id;
    const todoItem = { itemName };
    let _this = this;
    const url = 'http://localhost:3000/api/todos/todos/'+{todoId}+'/items/';

    // $.post(`http://localhost:3000/api/todos/todos/${todoId}/items/`,
    //   data: todoItem,
    //   function(newItem) {
    //     _this.setState({items: _this.state.items.concat(newItem)});
    //   }
    // )
    $.ajax({
      type: 'post',
      url: url,
      data: todoItem,
      success: function(newItem){
        _this.setState({items: _this.state.items.concat(newItem)});
      }
    })
  }
}
// class ItemsList extends Component {
//   render() {
//     console.log('item '+this.props.name);
//     return(
//         <li key={this.props.id}>{this.props.name}</li>
//     );
//   }
// }
