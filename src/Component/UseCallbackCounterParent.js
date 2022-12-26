import {useState, useCallback} from 'react';
import CounterChild from './CounterChild';

function UseCallbackCounterParent() {
  const [incrementValue, setIncrementValue] = useState(0);
  const [mulValue, setMulValue] = useState(2);

  const increment = useCallback(
    ()=>setIncrementValue(incrementValue+1), 
    [incrementValue]
  );

  const multiply = useCallback(
    ()=>setMulValue(mulValue*2),
    [mulValue]  
  );

  return(
  <div>
      <h2>increment value : {incrementValue}</h2>
      <CounterChild handleClick={increment} value={incrementValue} >increment</CounterChild>
      <h2>multiply value : {mulValue}</h2>
      <CounterChild handleClick={multiply} value={mulValue} >multiply</CounterChild>
  </div>
  );
}

export default UseCallbackCounterParent;