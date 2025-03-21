import { useState } from "react";

const CounterApp = (props) => {
  const { valor } = props;
  const [count, setCount] = useState(valor);
  //   let count = 0;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <span className="fs-1">{count}</span>
      <div>
        <button onClick={increment} className="btn btn-primary me-2">
          +1
        </button>
        <button onClick={decrement} className="btn btn-primary">
          -1
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
