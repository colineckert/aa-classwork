import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { signupUser } from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.signupUser = signupUser;

  window.getState = store.getState;
  window.dispatch = store.dispatch; // just for testing!

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});