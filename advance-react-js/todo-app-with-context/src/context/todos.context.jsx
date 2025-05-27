import { createContext, useContext, useMemo, useState } from "react";

const TodosContext = createContext({});

export function useTodosContext() {
  return useContext(TodosContext);
}

export function TodosContextWrapperComponent({ children }) {
  let [todos, setTodos] = useState([]);
  const saveTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
    alert("Todo Saved....");
  };
  let handelChecked = (index) => {
    let _todos = [...todos];
    _todos[index].status = true;
    setTodos(_todos);
  };
  let shared = useMemo(() => {
    return {
      todos,
      saveTodo,
      handelChecked,
    };
  }, [todos]);
  return (
    <TodosContext.Provider value={shared}>{children}</TodosContext.Provider>
  );
}
