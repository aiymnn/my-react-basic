import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  return (
    <>
      <p>Count value is: {count}</p>
      <button onClick={() => setCount(count + incrementBy)}>Tambah</button>
      <button
        disabled={count <= 0 ? true : false}
        onClick={() => setCount(count - incrementBy)}>
        Tolak
      </button>

      <h1>We are incrementing the value by:{incrementBy}</h1>
      <button onClick={() => setIncrementBy(incrementBy + 1)}>
        Increase Increment
      </button>
      <button onClick={() => setIncrementBy(incrementBy - 1)}>
        Decrease Increment
      </button>
    </>
  );
}
