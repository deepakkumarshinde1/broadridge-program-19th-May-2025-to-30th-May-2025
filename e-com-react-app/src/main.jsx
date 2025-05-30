import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { ProductContextProvider } from "./context/product.context.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </BrowserRouter>
);
