/* eslint-env browser */
import React, { Component } from 'react';
import $ from 'jquery';

import {TodoItemForm} from './todoItemForm.js';
// import logo from './logo.svg';
// import '../App.css';


export class TodoList extends Component {
  // constructor() {
  //   super();


  // }
  componentWillMount() {
    this.state = {items: this.props.all_items};
  }
  render() {
    var isActive ="";
    var formContent = "";
    var todoId = this.props.id;
    if(this.props.activeTodo === this.props.id) {
      isActive = "active";
      formContent = <TodoItemForm addTodoItem={this._addTodoItem.bind(this)} />;
    };
    return(
      <ul className={"small-box "+ isActive}  >
        <li key={"todoList"+this.props.id} onClick={this._handleActivateTodo.bind(this)}>
          <h3 className="TodoTitle" >{this.props.title}</h3>
          <ol id={"todoList"+this.props.id}>
          {this.state.items.map(item => <div className="itemBox"><li  key={`todo${todoId}Item${item.id}`}>{item.name}</li><div>X</div></div> )}
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
    // console.log(name:itemName);
    let _this = this;
    const url = 'http://localhost:3000/api/todos/todos/'+todoId+'/items/';

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
      success: function(updatedList){
        var newItem = updatedList.all_items[updatedList.all_items.length-1];
        _this.setState({items: _this.state.items.concat(newItem)});
        // console.log(newItem.id);
      }
    })
  }
  _removeTodoItem(item) {
    const todoId = this.props.id;
    // const todoItem = { name:itemName };
    // console.log(name:itemName);
    let _this = this;
    const url = 'http://localhost:3000/api/todos/todos/'+todoId+'/items/'+item.id;

    $.ajax({
      type: 'DELETE',
      url: url,
      // data: todoItem,
      success: function(updatedList){
        let itemIndex = _this.state.items.indexOf(item);
        _this.setState({items: _this.state.items.splice(itemIndex, 1)});
        // console.log(newItem.id);
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
