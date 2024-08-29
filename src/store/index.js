import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }
//forwarded to
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + action.amount,
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