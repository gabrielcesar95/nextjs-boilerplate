import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { State } from '../interfaces';
import {Creators as CounterCreators} from '../state/ducks/counter'


const Counter: React.FunctionComponent = () => {
  const count = useSelector((state: State): number => state.counter);
  const dispatch = useDispatch();

  const onIncrement = (): void => {
    dispatch(CounterCreators.increment())
  };
  
  const onDecrement = (): void => {
    dispatch(CounterCreators.decrement())    
  };
  
  const onReset = (): void => {
    dispatch(CounterCreators.reset())
  };

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={onIncrement}>+1</button>
      <span style={{margin:'0 15px'}}>{count}</span>
      <button onClick={onDecrement}>-1</button>
      <div style={{margin: '10px 0'}}>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
