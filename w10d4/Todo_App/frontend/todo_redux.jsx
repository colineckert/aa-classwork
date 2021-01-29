import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep} from './actions/step_actions';

document.addEventListener("DOMContentLoaded", () => {
  // const reactRoot = document.getElementById('root');
  // ReactDOM.render(, reactRoot);
  window.store = configureStore();
  
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
})