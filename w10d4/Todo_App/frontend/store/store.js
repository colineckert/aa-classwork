import { createStore } from 'redux';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState);
  return store;
}

export default configureStore;

// {
//   1: {
//     id: 1,
//       title: 'wash car',
//         body: 'with soap',
//           done: false
//   },
//   2: {
//     id: 2,
//       title: 'wash dog',
//         body: 'with shampoo',
//           done: true
//   },
// }