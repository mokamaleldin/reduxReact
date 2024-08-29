import { createStore } from 'redux'

//forwarded to
const counterReducer = (state = { counter: 0 }, action) => {
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

//Store ( change datat in store)
const store = createStore(counterReducer);

export default store;