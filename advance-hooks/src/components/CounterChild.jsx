import { memo } from "react";

function CounterChild({ result, incCountTwo }) {
  console.log("CounterChild");
  return (
    <>
      <div>CounterChild {result}</div>
      <button onClick={incCountTwo}>INC 2</button>
    </>
  );
}

export default memo(CounterChild);
