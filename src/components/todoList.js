/* eslint-env browser */
import React, { Component } from 'react';
import $ from 'jquery';
// import logo from './logo.svg';
// import '../App.css';


export class TodoList extends Component {
  // constructor() {
  //   super();
  //   // const todo = this.props.todo;
  //   // this.state = {items: [...props.todo.all_items]};
  // }
  render() {
    // console.log('todo is: '+this.props.title);
    return(
      <ul className="small-box">
        <li key={this.props.id}>
          <h3 className="TodoTitle">{this.props.title}</h3>
          <ol>
          {this.props.all_items.map(item => <li key={item.id}>{item.name}</li> )}
          </ol>
        </li>
      </ul>
    );
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
