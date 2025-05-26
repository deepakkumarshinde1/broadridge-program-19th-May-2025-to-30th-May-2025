import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProductContextWrapperComponent } from "./context/products.context.jsx";

createRoot(document.getElementById("root")).render(<App />);
