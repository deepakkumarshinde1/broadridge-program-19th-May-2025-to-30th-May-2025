import { useCounterContext } from "../context/counter.context";

function Counter() {
  let {
    intervalId,
    counter,
    manualCounter,
    startAutoCounter,
    stopAutoCounter,
  } = useCounterContext();
  return (
    <>
      <h1>{counter}</h1>
      <section className="btn-group">
        <button
          disabled={intervalId === null ? false : true}
          onClick={() => manualCounter("INC")}
        >
          INC
        </button>
        <button
          disabled={intervalId === null ? false : true}
          onClick={() => manualCounter("DEC")}
        >
          DEC
        </button>
        <button
          disabled={intervalId === null ? false : true}
          onClick={() => manualCounter("RESET")}
        >
          RESET
        </button>
        <button
          disabled={intervalId === null ? false : true}
          onClick={startAutoCounter}
        >
          START
        </button>
        <button onClick={stopAutoCounter}>STOP</button>
      </section>
    </>
  );
}

export default Counter;
