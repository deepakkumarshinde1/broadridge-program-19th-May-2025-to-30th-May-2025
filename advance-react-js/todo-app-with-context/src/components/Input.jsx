import { memo, useState } from "react";
import { useTodosContext } from "../context/todos.context";

function Input() {
  let { saveTodo } = useTodosContext();
  let [newTodo, setNewTodo] = useState({
    name: "",
    status: false,
    colorB: "#000000",
    colorT: "#ffffff",
  });

  console.log("Input");

  let handelInput = (event, type) => {
    let { value } = event.target;
    if (type === "status") {
      setNewTodo({ ...newTodo, status: value === "yes" ? true : false });
    } else {
      setNewTodo({ ...newTodo, [type]: value });
    }
  };

  let save = () => {
    saveTodo(newTodo);
    setNewTodo({
      name: "",
      status: false,
      colorB: "#000000",
      colorT: "#ffffff",
    });
  };

  return (
    <>
      <section>
        <section>
          <label htmlFor="">Task Name</label>
          <input
            onChange={(e) => handelInput(e, "name")}
            type="text"
            value={newTodo.name}
            placeholder="enter task"
          />
        </section>
        <section>
          <label htmlFor="">Is Completed&nbsp;</label>
          <input
            type="radio"
            value="yes"
            name="taskStatus"
            id="taskStatusYes"
            checked={newTodo.status ? true : false}
            onChange={(e) => handelInput(e, "status")}
          />
          <label htmlFor="taskStatusYes">Yes</label>

          <input
            checked={newTodo.status ? false : true}
            type="radio"
            value="no"
            name="taskStatus"
            id="taskStatusNo"
            onChange={(e) => handelInput(e, "status")}
          />
          <label htmlFor="taskStatusNo">No</label>
        </section>
        <section>
          <label htmlFor="">Select A Back Color&nbsp;</label>
          <input
            onChange={(e) => handelInput(e, "colorB")}
            type="color"
            value={newTodo.colorB}
            name="taskBgColor"
            id=""
          />
        </section>
        <section>
          <label htmlFor="">Select A Text Color&nbsp;</label>
          <input
            type="color"
            value={newTodo.colorT}
            name="taskTextColor"
            id=""
            onChange={(e) => handelInput(e, "colorT")}
          />
        </section>
      </section>
      <section>
        <button onClick={save}>Save</button>
      </section>
    </>
  );
}

export default memo(Input);
