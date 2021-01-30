import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
// import { receiveSteps, receiveStep, removeStep} from './actions/step_actions';
import Root from './components/root';
// import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  const reactRoot = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, reactRoot);

  // window.allTodos = allTodos;
  
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.removeTodo = removeTodo;
  
  // window.receiveStep = receiveStep;
  // window.receiveSteps = receiveSteps;
  // window.removeStep = removeStep;
})