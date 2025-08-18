import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// necessary css
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/animate.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/style.css";

// necessary js
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/js/jquery-ui.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
