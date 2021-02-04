import {RECEIVE_POKEMON} from './../actions/pokemon_actions'

const itemsReducer = (oldState={}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type){
    case RECEIVE_POKEMON:
      // return Object.assign(newState, newState.items)
      // action.pokemon.items.forEach( item => {
      //   newState.items[item.id] = item
      // })
      newState = action.pokemon.items

      return newState;

    default:
      return oldState

  }

}


export default itemsReducer;
