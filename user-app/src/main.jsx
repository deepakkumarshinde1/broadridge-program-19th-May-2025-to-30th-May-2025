import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ Bootstrap JS (for dropdowns, modals, etc.)
import "./index.css";
import App from "./App.jsx";
import { UserContextWrapperComponent } from "./context/user.context.jsx";

createRoot(document.getElementById("root")).render(<App />);
