import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./bootstrap.css";
import "./style.css";
import "./bootstrap.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
