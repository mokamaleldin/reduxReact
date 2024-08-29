import { createStore } from 'redux'

const counterReducer = (action, state = { counter: 0 }) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store;