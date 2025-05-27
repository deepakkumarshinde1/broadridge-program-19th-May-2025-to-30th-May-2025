import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterContextWrapperComponent } from "./context/counter.context.jsx";

createRoot(document.getElementById("root")).render(
  <CounterContextWrapperComponent>
    <App />
  </CounterContextWrapperComponent>
);
