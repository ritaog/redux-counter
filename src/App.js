import {useSelector, useDispatch} from 'react-redux';

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  
  const increment = () => {
    dispatch({type: "INC"});
  }

  const decrement = () => {
    dispatch({type: "DEC"});
  }

  const AddByTen = () => {
    dispatch({type: "ADD", action: {payload: 10}});
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={AddByTen}>AddByTen</button>
    </div>
  );
}

export default App;
