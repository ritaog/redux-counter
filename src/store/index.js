import { createStore } from "redux"


const reducerFn = (state = {counter: 0}, action) => {
    //Any function passed here must be synchronous
    //You cannot mutate the original state (make a copy of the state object)

    if (action.type === 'INC') {
        return {state: state.counter + 1};
    }

    if (action.type === 'DEC') {
        return {state: state.counter - 1};
    }

    if (action.type === 'ADD') {
        return {state: state.counter + action.payload};
    }

    return state;
}

 const store = createStore(reducerFn);

 export default store;


