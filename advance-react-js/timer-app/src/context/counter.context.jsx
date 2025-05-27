import { createContext, useContext, useState } from "react";

// create context
const CounterContext = createContext({});

// hook
export function useCounterContext() {
  return useContext(CounterContext);
}

//wrapper component
export function CounterContextWrapperComponent({ children }) {
  let [counter, setCounter] = useState(0);
  let [intervalId, setIntervalId] = useState(null);
  let manualCounter = (type) => {
    switch (type) {
      case "INC":
        setCounter(counter + 1);
        break;

      case "DEC":
        setCounter(counter - 1);
        break;

      default:
        setCounter(0);
        break;
    }
  };

  let startAutoCounter = () => {
    let id = setInterval(() => {
      setCounter((_counter) => {
        return _counter + 1;
      });
    }, 50);
    setIntervalId(id);
  };

  let stopAutoCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  let shared = {
    counter,
    manualCounter,
    startAutoCounter,
    intervalId,
    stopAutoCounter,
  };
  return (
    <CounterContext.Provider value={shared}>{children}</CounterContext.Provider>
  );
}
