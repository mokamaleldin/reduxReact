import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
  //subscription
  const counter = useSelector(state => state.counter);

  //dispatch
  const dispatch = useDispatch();
  //dispatch functions
  const incrementHandler = () => {
    dispatch({ type: "increment", amount: 1 })
  }
  const incrementHandlerBy5 = () => {
    dispatch({ type: "increment", amount: 5 })
  }
  const decrementHandler = () => {
    dispatch({ type: "decrement" })
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={ classes.counter }>
      <h1>Redux Counter</h1>
      <div className={ classes.value }>{ counter }</div>
      <div>
        <button onClick={ incrementHandler }>increment</button>
        <button onClick={ incrementHandlerBy5 }>increment by 5</button>
        <button onClick={ decrementHandler }>Decrement</button>
      </div>
      <button onClick={ toggleCounterHandler }>Toggle Counter</button>
    </main>
  );
};



export default Counter;
