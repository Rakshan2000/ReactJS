import  ReactDOM  from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShoppingContext from "./components/context/index.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingContext>
      <App />
    </ShoppingContext>
  </BrowserRouter>
);
