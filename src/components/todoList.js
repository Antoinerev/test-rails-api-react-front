/* eslint-env browser */
import React, { Component } from 'react';
import $ from 'jquery';

import Item from "./item.js";
import {TodoItemForm} from './todoItemForm.js';
// import logo from './logo.svg';
// import '../App.css';


export class TodoList extends Component {

  componentWillMount() {
    this.state = {items: this.props.all_items};
  }
  render() {
    var isActive ="";
    var formContent = "";
    var itemIsActive =false;
    if(this.props.activeTodo === this.props.id) {
      isActive = "active";
      itemIsActive = true;
      formContent = <TodoItemForm addTodoItem={this._addTodoItem.bind(this)} />;
    };
    return(
      <ul className={"small-box "+ isActive}  >
        <li key={"todoList"+this.props.id} onClick={this._handleActivateTodo.bind(this)}>
          <h3 className="TodoTitle" >{this.props.title}</h3>
          <ol id={"todoList"+this.props.id}>
            {this.state.items.map(item =>
              <Item
                item={item}
                todoId={this.props.id}
                isActive={itemIsActive}
                onDelete={this._removeTodoItem.bind(this)}
                key={`todo${this.props.todoId}Item${item.id}`}
              />
            )}
          </ol>
        </li>
          {formContent}
      </ul>
    );
  }
  _handleActivateTodo(event) {
    event.preventDefault();
    this.props.activateTodo(this.props.id);
  }
  _addTodoItem(itemName) {
    const todoId = this.props.id;
    const todoItem = { name:itemName };
    let _this = this;
    const url = `http://localhost:3000/api/todos/todos/${todoId}/items/`;

    $.ajax({
      type: 'post',
      url: url,
      data: todoItem,
      success: function(updatedList){
        var newItem = updatedList.all_items[updatedList.all_items.length-1];
        _this.setState({items: _this.state.items.concat(newItem)});
      }
    })
  }
  _removeTodoItem(item) {
    const todoId = this.props.id;
    let _this = this;
    const url = `http://localhost:3000/api/todos/todos/${todoId}/items/${item.id}`;

    $.ajax({
      type: 'DELETE',
      url: url,
      success: function(updatedList){
        let itemIndex = _this.state.items.indexOf(item);
        let itemsArray = [..._this.state.items];
        itemsArray.splice(itemIndex, 1);
        _this.setState({items: itemsArray});
      }
    })
  }
}
