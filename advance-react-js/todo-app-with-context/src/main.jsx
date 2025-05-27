import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodosContextWrapperComponent } from "./context/todos.context.jsx";

createRoot(document.getElementById("root")).render(
  <TodosContextWrapperComponent>
    <App />
  </TodosContextWrapperComponent>
);
