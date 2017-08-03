import React, { Component } from 'react';
import $ from 'jquery';

import {TodoList} from './todoList.js';
import {TodoForm} from './todoForm.js';

export class TodoBox extends Component {
  constructor() {
    super();

    this.state = {todos: [], activeTodo: 1};

  }
  componentWillMount() {
    this._fetchTodos();

  }
  render() {
    return(
      <div className="todobox">
      {console.log(this.state.activeTodo)}
        <div id="add-new-todo">
        <h2>Here are your lists</h2>

        </div>
        <div className="todolists">
          {this.state.todos.map(todo => <TodoList key={todo.id} activeTodo={this.state.activeTodo} activateTodo={this._activateTodo.bind(this)} {...todo} />)}

          <TodoForm addTodo={this._addTodo.bind(this)} />
        </div>
      </div>
    );
  }

  _fetchTodos() {
    let ajaxUrlLocal = 'http://localhost:3000/api/todos/todos/';
    // let ajaxUrlDistant = 'https://test-rails-api.herokuapp.com/api/todos/todos';
    var _this = this;
    $.ajax({
      type: "GET",
      url: ajaxUrlLocal,
      success: function(data){},
      error: function(jqXHR){
        console.log("error");
      }
    })
    .then(function(data) {

      if(data.length) {
        _this.setState({todos: data});
      } else {
        _this.setState({todos: [data]});
      }
      _this.setState({activeTodo: _this.state.todos[0].id});
    });
  }

  _addTodo(title) {
    const todoToAdd = {
      title
    };
    let _this = this;
    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/api/todos/todos/',
      data: todoToAdd,
      success: function(newTodo){
        console.log(_this.state.todos);
        _this.setState({todos: _this.state.todos.concat([newTodo])});
      }
    });
  }
  _activateTodo(todoId) {
    this.setState({activeTodo: todoId})
  }
}
