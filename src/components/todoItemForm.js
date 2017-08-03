/* eslint-env browser */
import React, { Component } from 'react';
// import $ from 'jquery';
// import logo from './logo.svg';
// import '../App.css';


export class TodoItemForm extends Component {
  constructor() {
    super();
    this.state = {content: []};
  }

  render() {
    return(

      <form onSubmit={this._handleSubmit.bind(this)}>
        <label>
          Add New:
          <input type="text" name="name" ref={(input) => this._name = input} placeholder="item name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  _handleSubmit(event) {
    event.preventDefault();
    // return alert("OK!");
    let name = this._name;

    this.props._addTodoItem(name.value);
  }
}
