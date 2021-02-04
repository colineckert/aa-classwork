import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestSinglePokemon } from './actions/pokemon_actions';
import {fetchPokemon} from './util/api_util'

window.store = configureStore();
window.requestSinglePokemon = requestSinglePokemon;
window.fetchPokemon = fetchPokemon;


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl)
})

