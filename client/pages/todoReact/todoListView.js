var $ = require('jquery');

import React from 'react';
import reactDOM from 'react-dom';
import Backbone from 'backbone';
import todoModel from 'pages/todoReact/todoModel';
import TodoItemView from 'pages/todoReact/todoView';
import dispatcher from 'pages/todoReact/todoDispatcher';

var TodoListView = Backbone.View.extend({
  el: '.todo-container',
  model: todoModel,
  events: {
    'click .btn-add': 'addTodoItem'
  },
  initialize: function(){
    this.model.fetch();
    this.model.on('change', this.render, this);
  },
  render: function(){
    // render the todo items
    var todos = this.model.get('todos');
    var $ul = this.$el.find('.list-group');
    $ul.html('');
    todos.forEach(function(todo){
      var $li = $('<li class="list-group-item row"></li>');
      $ul.append($li);
      reactDOM.render(
        <TodoItemView data={todo} />,
        $li[0] // react does not recognize jQuery selector, get original DOMnode from jQuery object
      );
    });

  },
  addTodoItem: function(){
    var $input = this.$el.find('.input-name');
    var newTitle = $input.val();
    if (newTitle === '') { return; }
    dispatcher.addTodo(newTitle);
  }
});

module.exports = TodoListView;
