import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      {/* <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> */}
    </div>
  );
}

export default Counter;
