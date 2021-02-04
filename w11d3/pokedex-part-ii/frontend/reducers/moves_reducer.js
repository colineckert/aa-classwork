import {RECEIVE_POKEMON} from './../actions/pokemon_actions'

const movesReducer = (oldState={}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type){
    case RECEIVE_POKEMON:
      newState = action.payload.moves
      return newState;

    default:
      return oldState

  }

}


export default movesReducer;
