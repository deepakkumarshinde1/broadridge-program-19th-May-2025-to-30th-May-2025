import { Component, memo, PureComponent, useState } from "react";
import { TodosContext } from "../context/todos.context";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      status: false,
      colorB: "#000000",
      colorT: "#ffffff",
    };
  }

  handelInput = (event, type) => {
    let { value } = event.target;
    if (type === "status") {
      this.setState({ ...this.state, status: value === "yes" ? true : false });
    } else {
      this.setState({ ...this.state, [type]: value });
    }
  };

  save = (saveTodo) => {
    saveTodo(this.state);
    this.setState({
      name: "",
      status: false,
      colorB: "#000000",
      colorT: "#ffffff",
    });
  };

  render() {
    let newTodo = this.state;
    console.log("InputComponent");
    return (
      <>
        <section>
          <section>
            <label htmlFor="">Task Name</label>
            <input
              onChange={(e) => this.handelInput(e, "name")}
              type="text"
              value={newTodo.name}
              placeholder="enter task"
              className="w-[30rem]"
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
              onChange={(e) => this.handelInput(e, "status")}
            />
            <label htmlFor="taskStatusYes">Yes</label>

            <input
              checked={newTodo.status ? false : true}
              type="radio"
              value="no"
              name="taskStatus"
              id="taskStatusNo"
              onChange={(e) => this.handelInput(e, "status")}
            />
            <label htmlFor="taskStatusNo">No</label>
          </section>
          <section>
            <label htmlFor="">Select A Back Color&nbsp;</label>
            <input
              onChange={(e) => this.handelInput(e, "colorB")}
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
              onChange={(e) => this.handelInput(e, "colorT")}
            />
          </section>
        </section>
        <section>
          <TodosContext.Consumer>
            {(value) => {
              return (
                <button onClick={() => this.save(value.saveTodo)}>Save</button>
              );
            }}
          </TodosContext.Consumer>
        </section>
      </>
    );
  }
}

export default memo(Input);
