import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/steps_actions';

// const initialState = {
//   todos: {
//     1: {
//       id: 1,
//       title: 'take a shower',
//       body: 'and be clean',
//       done: false
//     }
//   },
//   steps: {
//     1: { // this is the step with id = 1
//       id: 1,
//       title: 'walk to store',
//       done: false,
//       todo_id: 1
//     },
//     2: { // this is the step with id = 2
//       id: 2,
//       title: 'buy soap',
//       done: false,
//       todo_id: 1
//     }
//   }
// }

const stepsReducer = (oldState = initialState, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_STEP:
            newState[action.step.id] = action.step;
           return newState; 

        case RECEIVE_STEPS:
            // newState = [...oldState, ...action.todos];
            action.steps.forEach(step => {
                newState[step.id] = step;
            });
            return newState;

        case REMOVE_STEP:
            delete newState[action.step.id];
            return newState;
    
        default:
        return oldState;
    }
};

export default stepsReducer;



