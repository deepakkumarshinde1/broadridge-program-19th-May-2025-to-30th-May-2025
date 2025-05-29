import { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1 data-testid="title-id">{props.text ? "Counter" : "Testing"}</h1>
      <h1 data-testid="counter-value">{count}</h1>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </>
  );
}
export default Counter;
