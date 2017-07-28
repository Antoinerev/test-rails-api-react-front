/* eslint-env browser */
import React, { Component } from 'react';
import $ from 'jquery';
// import logo from './logo.svg';
// import '../App.css';


export class TodoList extends Component {
  constructor() {
    super();
    // this.state = {content: []};
  }
  render() {
    return(
      <ul className="small-box">{this.props.todos.map(todo =>
        <li key={todo.id}>
          <h3 className="TodoTitle">{todo.title}</h3>
          <div><ItemsList listItems={todo.all_items} /></div>
        </li>)}
      </ul>
    );
  }
}
class ItemsList extends Component {
  render() {
    return(
      <ol>{this.props.listItems.map(item => <li key={item.id}>{item.name}</li>)}</ol>
    );
  }
}
