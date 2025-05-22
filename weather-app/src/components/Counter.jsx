import { useState } from "react";

function Counter(props) {
  let { increment, counter, index, remove } = props;
  return (
    <section>
      <h1>
        Counter: {counter}
        <button onClick={() => increment(index)}>INC</button>
        <button onClick={(event) => remove(index, event)}>Remove</button>
      </h1>
    </section>
  );
}

export default Counter;
