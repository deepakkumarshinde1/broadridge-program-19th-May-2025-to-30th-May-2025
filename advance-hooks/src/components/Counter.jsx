import { useCallback, useMemo, useState } from "react";
import CounterChild from "./CounterChild";

function Counter() {
  let [countOne, setCountOne] = useState(0);
  let [countTwo, setCountTwo] = useState(10);
  let incCountOne = () => {
    setCountOne(countOne + 1);
  };

  let incCountTwo = useCallback(() => {
    setCountTwo(countTwo + 1);
  }, [countTwo]);

  let result = useMemo(() => {
    return countTwo % 5 === 0 ? "Yes" : "No";
  }, [countTwo]);

  return (
    <>
      <h1>Counter One {countOne}</h1>
      <button onClick={incCountOne}>INC 1</button>
      <hr />
      <h1>Counter 2 {countTwo}</h1>

      <CounterChild result={result} incCountTwo={incCountTwo} />
    </>
  );
}

export default Counter;
