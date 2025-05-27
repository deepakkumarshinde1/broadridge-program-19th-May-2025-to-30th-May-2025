import { useTodosContext } from "../context/todos.context";

function Todos() {
  let { todos, handelChecked } = useTodosContext();
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <p>
                {todo.status ? null : <button>DEL</button>}
                <input
                  type="checkbox"
                  checked={todo.status}
                  disabled={todo.status}
                  onChange={() => handelChecked(index)}
                />
                <span
                  style={{
                    backgroundColor: todo.colorB,
                    color: todo.colorT,
                  }}
                >
                  {todo.name}
                </span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
