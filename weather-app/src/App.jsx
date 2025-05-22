// import (optional)

import { Component, useEffect, useRef, useState } from "react";
import Counter from "./components/Counter";

// comp (class / function)
function App() {
  let [counters, setCounters] = useState([]); // string , number, boolean , array , object
  let [isDisabled, setDisabled] = useState(true);

  let inputRef = useRef(null);

  // return a array [ stateValue , functionToUpdateState  ]
  let increment = (index) => {
    // deep copy
    // let newArray = [...counters];
    // newArray[index] += 1;
    counters[index] += 1;
    setCounters([...counters]);
  };

  let addNewCounter = () => {
    if (checkValidation()) {
      let newArray = [...counters];
      newArray.push(Number(inputRef.current.value));
      setCounters(newArray);
      inputRef.current.value = "";
    }
  };

  let checkValidation = () => {
    if (Number(inputRef.current.value) <= 0) {
      inputRef.current.focus();
      inputRef.current.style.backgroundColor = "red";
      setDisabled(true);
      return false;
    } else {
      inputRef.current.style.backgroundColor = "white";
      setDisabled(false);
      return true;
    }
  };
  let remove = (index) => {
    let newArray = [...counters];
    newArray.splice(index, 1);
    setCounters(newArray);
  };

  return (
    <section>
      <input ref={inputRef} onKeyUp={checkValidation} type="text" />
      <button
        className={isDisabled ? "btn zoom" : "btn"}
        disabled={isDisabled}
        onClick={addNewCounter}
      >
        Add New Counter
      </button>

      <hr />
      <br />
      {counters.map((counter, index) => {
        return (
          <Counter
            key={index}
            index={index}
            counter={counter}
            increment={increment}
            remove={remove}
          />
        );
      })}
    </section>
  );
}

export default App;

// JSX => Javascript XML

// it has only one parent
// elements must be closed
// class => className
// for => htmlFor
// javascript = {} => JSX string interpolation syntax
