import { StrictMode } from "react";
import App from "./App";
import { createRoot } from "react-dom/client"
import "./index.css"
createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)