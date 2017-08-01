/* eslint-env browser */
import React, { Component } from 'react';
// import $ from 'jquery';
// import logo from './logo.svg';
// import '../App.css';


export class TodoForm extends Component {
  constructor() {
    super();
    this.state = {content: []};
  }

  render() {
    return(

      <form onSubmit={this._handleSubmit.bind(this)}>
        <h3>Add a new todo list</h3>
        <label>
          Todo Title:
          <input type="text" name="title" ref={(input) => this._title = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  _handleSubmit(event) {
    event.preventDefault();
    // return alert("OK!");
    let title = this._title;

    this.props.addTodo(title.value);

    // let ajaxUrlLocal = 'http://localhost:3000/api/todos/todos/';
    // let ajaxUrlDistant = 'https://test-rails-api.herokuapp.com/api/todos/todos';
    // var _this = this;
    // $.ajax({
    //   type: "POST",
    //   url: ajaxUrlLocal,
    //   success: function(data){
    //     console.log(data);
    //   },
    //   error: function(jqXHR){
    //     console.log("error");
    //   }
    // }).then(function(data) {

    //   if(data.length) {
    //     _this.setState({content: data});
    //   } else {
    //     _this.setState({content: [data]});
    //   }
    // });
  }
}
