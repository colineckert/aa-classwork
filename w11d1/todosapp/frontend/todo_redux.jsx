import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import { fetchTodos } from './util/todo_api_util';
import * as TodoActions from './actions/todo_actions';
// import { receiveTodos, receiveTodo, removeTodo} from './actions/todo_actions';
// import { receiveSteps, receiveStep, removeStep} from './actions/step_actions';
import Root from './components/root';
// import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  window.store = configureStore();
  // window.fetchTodos = fetchTodos;
  window.TodoActions = TodoActions;
  const reactRoot = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, reactRoot);
  
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.removeTodo = removeTodo;
  
  // window.receiveStep = receiveStep;
  // window.receiveSteps = receiveSteps;
  // window.removeStep = removeStep;
})