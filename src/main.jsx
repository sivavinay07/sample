import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NumberShowdown from "./App.jsx";
import A from "./a.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <A /> */}
    <NumberShowdown />
  </StrictMode>,
);
