import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { receivePokemon, requestSinglePokemon } from './actions/pokemon_actions';

window.store = configureStore();
window.requestSinglePokemon = requestSinglePokemon


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl)
})

