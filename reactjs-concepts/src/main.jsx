//Wrapping App component with GlobalState is important to recive the children into the  Context

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GlobalState from "./components/context/index.jsx";

createRoot(document.getElementById("root")).render(
  <GlobalState>
    <App />
  </GlobalState>
);
