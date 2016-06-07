
import $ from 'jquery';
import 'styles/main.scss';
import todos from 'pages/todo-backbone';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import formsBackbone from 'pages/formsBackbone';
import header from 'components/header';

$(function(){

  header.init();

  // what page are we on?
  var url = window.location.pathname;

  // our first javascript router
  switch (url) {
    case '/pages/todo.html':
      todos.render();
    break;
    case '/pages/project.html':
      // init the project javascript
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/formsBackbone.html':
      formsBackbone.render();
    break;
    default: break;
  }

});

