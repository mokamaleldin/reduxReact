import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

//1-every slice need a name
//2- insitial State
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    //reducers are functions that can update the state
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})



//Store is created by passing the reducer to the configureStore function
const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;