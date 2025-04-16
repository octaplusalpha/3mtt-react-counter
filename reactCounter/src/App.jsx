import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount((lastCount) => Math.min(lastCount + 1, 10));
  };

  const decreaseCount = () => {
    setCount((lastCount) => Math.max(lastCount - 1, 0));
  };

  return (
    <div className="counterContainer">
      <header className="header">
        <h1>{count}</h1>
      </header>
      <div className="buttonsContainer">
        <button
          className="buttons"
          onClick={increaseCount}
          disabled={count === 100}
        >
          +
        </button>
        <button
          className="buttons"
          onClick={decreaseCount}
          disabled={count === 0}
        >
          -
        </button>
      </div>
      <div>
        {(count === 0 || count === 10) && (
          <p className="limitMessage">
            ⚠️ You have reached the {count === 0 ? "minimum" : "maximum"} limit
          </p>
        )}
      </div>
    </div>
  );
}
