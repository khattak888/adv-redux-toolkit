import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        className="button"
        aria-label="Increment Value"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <span className="value">Count:{count}</span>

      <button
        className="button"
        aria-label="Decrement Value"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default Counter;
