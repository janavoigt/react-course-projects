import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
 const counter = useSelector(state => state.counter.counter);
 const show = useSelector(state => state.counter.showCounter);
 const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component{

// incrementHandler() {
//   this.props.increment();
// }

// decrementHandler() {
//   this.props.decrement();
// }

// toggleCounterHandler() {

// }

//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementDispatch.bind(this)}>Increment</button>
//           <button onClick={this.decrementDispatch.bind(this)}>Decrement</button>
//         </div>
//         <button>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return{
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
