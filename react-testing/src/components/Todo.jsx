import { useState } from "react";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    if (input.trim()) {
      if (isNaN(Number(input))) {
        setTodos([...todos, input]);
        setInput("");
      }
    }
  };
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
        data-testid="todo-input"
      />
      <button onClick={addTodo}>Add</button>
      <ul data-testid="todo-list">
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
